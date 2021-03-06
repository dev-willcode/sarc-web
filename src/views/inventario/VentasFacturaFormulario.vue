<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <div class="columns">
          <section class="column is-half">
            <b-field label="N° Factura" horizontal v-if="accion !== 'NUEVO'">
              <b-input
                readonly
                v-mask="'###-###-####'"
                v-model="ventaFactura.numero_factura"
              />
            </b-field>
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Fecha"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-datepicker
                    icon="calendar-today"
                    locale="fr-CA"
                    editable
                    v-model="fecha_emision"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>

            <seleccionar-entidad
              ref="SeleccionarCliente"
              label="Cliente"
              field-visible="nombre"
              v-model="ventaFactura.cliente"
              :configuracion="configuraciones.cliente"
              :disabled="accion !== 'NUEVO'"
            />

            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Forma pago"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-select
                    v-model="ventaFactura.forma_pago"
                    placeholder="Elija la forma de pago..."
                    expanded
                  >
                    <option
                      v-for="formapago in formaPagoListado"
                      :value="formapago"
                      :key="formapago"
                    >
                      {{ formapago }}
                    </option>
                  </b-select>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
          </section>

          <section class="column is-half">
            <seleccionar-entidad
              ref="SeleccionarVendedor"
              label="Vendedor"
              field-visible="nombre"
              v-model="ventaFactura.vendedor"
              :configuracion="configuraciones.vendedor"
              :disabled="usuario.tipo === 'Vendedor'"
            />

            <seleccionar-entidad
              ref="SeleccionarAuto"
              label="Auto"
              field-visible="bastidor"
              argumentos="?estado=true"
              v-model="ventaFactura.auto"
              :configuracion="configuraciones.auto"
              @modelo="seleccionarAuto"
              :disabled="accion !== 'NUEVO'"
            />
            <validation-provider
              :rules="{
                required: true,
                max_value: ventaFactura.precio
              }"
              v-slot="{ errors, valid }"
            >
              <b-field
                v-if="ventaFactura.auto"
                label="Descuento"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <numeric
                    class="input"
                    :class="valid ? 'is-success' : 'is-danger'"
                    :options="{
                      currencySymbol: '$',
                      emptyInputBehavior: 'zero'
                    }"
                    v-model="ventaFactura.descuento"
                    placeholder="descuento..."
                  ></numeric>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
          </section>
        </div>
        <tabla-equipamientos
          ref="TablaEquipamientos"
          label="Equipamientos del auto"
          v-model="ventaFactura.detalle_factura"
          :configuracion="detalleConfiguracion"
          @seleccionar="seleccionarEquipamiento"
          v-if="ventaFactura.auto"
        />
        <section class="level box" v-if="ventaFactura.auto">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Precio del auto</p>
              <p class="title">{{ precioAuto | filtro_decimales(2) }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title is-1">+</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Equipamientos</p>
              <p class="title">
                {{ precioEquipamientos | filtro_decimales(2) }}
              </p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title is-1">-</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Descuento</p>
              <p class="title">{{ descuentos | filtro_decimales(2) }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title is-1">=</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">total</p>
              <p class="title">{{ precioTotal | filtro_decimales(2) }}</p>
            </div>
          </div>
        </section>
        <br />
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <b-button
                v-if="accion === 'NUEVO'"
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(guardar)"
                >Guardar</b-button
              >
              <b-button
                v-else
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(editar)"
                >Editar</b-button
              >
            </div>
            <div class="control">
              <b-button type="is-primary is-outlined" @click="cancelar"
                >Cancelar</b-button
              >
            </div>
          </b-field>
        </b-field>
      </ValidationObserver>
    </div>
  </card-component>
</template>

<script>
import dayjs from "dayjs";
import baseFormulario from "@/components/shared/bases/baseFormulario";
import SeleccionarEntidad from "@/components/application/SeleccionarEntidad";
import TablaEquipamientos from "@/components/inventario/TablaEquipamientos";
import { mapState } from "vuex";
export default {
  name: "VentaFactura",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad, TablaEquipamientos },
  data() {
    return {
      entidad: "ventaFactura",
      ventaFactura: {
        numero_factura: "",
        fecha_emision: dayjs().format("YYYY-MM-DD"),
        precio: 0,
        descuento: 0,
        vendedor: null,
        cliente: null,
        auto: null,
        forma_pago: "Efectivo",
        detalle_factura: []
      },
      autoSeleccionado: {},
      // listados
      formaPagoListado: ["Efectivo", "Tarjeta de crédito", "Debito bancario"],
      // configuraciones
      detalleConfiguracion: [
        { label: "descripcion", field: "descripcion" },
        { label: "precio", field: "precio" }
      ]
    };
  },
  mounted() {
    if (this.usuario.tipo === "Vendedor") {
      this.$refs.SeleccionarVendedor.recuperarEntidad(this.usuario.id);
    }
  },
  computed: {
    ...mapState(["usuario"]),
    descuentos() {
      return parseFloat(this.ventaFactura.descuento || 0);
    },
    precioAuto() {
      return parseFloat(this.ventaFactura.precio || 0);
    },
    precioEquipamientos() {
      return this.ventaFactura.detalle_factura.reduce(
        (acumulador, elem) => (acumulador += parseFloat(elem.precio)),
        0
      );
    },
    precioTotal() {
      return this.precioAuto + this.precioEquipamientos - this.descuentos;
    },
    fecha_emision: {
      get() {
        return dayjs(this.ventaFactura.fecha_emision || new Date()).toDate();
      },
      set(value) {
        this.ventaFactura.fecha_emision = dayjs(value).format("YYYY-MM-DD");
      }
    }
  },
  methods: {
    // @Override
    despuesObtener(entidad) {
      entidad.numero_factura = this.agregarCeros(entidad.id, 10);
      this.$refs.SeleccionarCliente.establecerCampoVisible(
        entidad.nombre_cliente
      );
      this.$refs.SeleccionarVendedor.establecerCampoVisible(
        entidad.nombre_vendedor
      );
      this.$refs.SeleccionarAuto.establecerCampoVisible(entidad.auto_bastidor);
    },
    seleccionarAuto(auto) {
      this.autoSeleccionado = auto;

      if (this.accion == "NUEVO") {
        this.ventaFactura.precio = auto.precio_modelo;
        this.ventaFactura.descuento = auto.descuento_modelo;
        this.ventaFactura.detalle_factura = auto.equipamientos_auto.map(
          (elem) => this.crearDetalle(elem, true)
        );
      }
    },
    seleccionarEquipamiento(equipamiento) {
      if (
        !this.ventaFactura.detalle_factura.some(
          (elem) => elem.descripcion === equipamiento.nombre
        )
      ) {
        this.ventaFactura.detalle_factura.push(this.crearDetalle(equipamiento));
      } else {
        this.notificar("El equipamiento ya esta agregado!", "is-warning");
      }
    },
    crearDetalle(equipamiento, defecto = false) {
      return {
        descripcion: equipamiento.nombre,
        precio: defecto ? 0 : equipamiento.precio,
        es_serie: defecto
      };
    }
  }
};
</script>
