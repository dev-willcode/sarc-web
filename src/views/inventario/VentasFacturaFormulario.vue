<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <div class="columns">
          <section class="column is-half">
            <b-field label="N° Factura" horizontal v-if="accion !== 'NUEVO'">
              <b-input readonly v-model="ventaFactura.numero_factura" />
            </b-field>
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Fecha"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-datepicker
                    placeholder="Type or select a date..."
                    icon="calendar-today"
                    locale="fr-CA"
                    editable
                    v-model="ventaFactura.fecha_emision"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>

            <seleccionar-entidad
              label="Cliente"
              field-visible="nombre"
              v-model="ventaFactura.cliente"
              :configuracion="configuraciones.cliente"
            />
          </section>

          <section class="column is-half">
            <seleccionar-entidad
              label="Vendedor"
              field-visible="nombre"
              v-model="ventaFactura.vendedor"
              :configuracion="configuraciones.vendedor"
            />

            <seleccionar-entidad
              label="Auto"
              field-visible="bastidor"
              v-model="ventaFactura.auto"
              :configuracion="configuraciones.auto"
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
        </div>
        <card-component
          class="has-table has-mobile-sort-spaced"
          title="Equipamientos del auto"
          v-if="ventaFactura.auto"
        >
          <template slot="card-header">
            <seleccionar-entidad
              label="Auto"
              type="button"
              icon="plus"
              @input="seleccionarEquipamiento"
              :configuracion="configuraciones.equipamiento"
            />
          </template>
          <tabla-editable
            :url="configuraciones.equipamiento.urlListado"
            :configuracion="configuraciones.equipamiento.listado"
            v-model="ventaFactura.equipamientos"
          />
        </card-component>
        <br />
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <b-button
                v-if="accion === 'NUEVO'"
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(guardar(modelarFactura()))"
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
              <b-button type="is-primary is-outlined" @click="$router.back()"
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
import TablaEditable from "@/components/application/TablaEditable";

export default {
  name: "VentaFactura",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad, TablaEditable },
  data() {
    return {
      entidad: "ventaFactura",
      url: "factura_venta",
      ventaFactura: {
        numero_factura: "",
        fecha_emision: new Date(),
        precio: 0,
        vendedor: null,
        cliente: null,
        auto: null,
        forma_pago: null,
        equipamientos: []
      },
      // listados
      formaPagoListado: ["Efectivo", "Tarjeta de crédito", "Debito bancario"]
    };
  },
  computed: {},
  methods: {
    modelarFactura() {
      let factura = {};
      Object.assign(factura, this.ventaFactura);
      factura.fecha_emision = dayjs(factura.fecha_emision).format("YYYY-MM-DD");
      return factura;
    },
    seleccionarEquipamiento(equipamiento) {
      let duplicado = !this.ventaFactura.equipamientos.some(
        (equip) => equip.id == equipamiento.id
      );
      if (duplicado) {
        this.ventaFactura.equipamientos.push(equipamiento);
      } else {
        this.notificar("El equipamiento ya esta agregado!", "is-warning");
      }
    }
  }
};
</script>
