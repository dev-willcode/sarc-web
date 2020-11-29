<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <div class="columns">
          <section class="column is-half">
            <b-field label="N° Revisión" horizontal v-if="accion !== 'NUEVO'">
              <b-input
                readonly
                v-mask="'###-###-####'"
                v-model="facturaServicio.numero_revision"
              />
            </b-field>

            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Fecha emisión"
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
              v-model="facturaServicio.cliente"
              :configuracion="configuraciones.cliente"
              :disabled="accion !== 'NUEVO'"
            />
          </section>

          <section class="column">
            <seleccionar-entidad
              ref="SeleccionarRevision"
              label="Revisión Técnica"
              field-visible="id"
              v-model="facturaServicio.revision_tecnica"
              :configuracion="configuraciones.revisiontecnica"
              @modelo="revisionSeleccionada = $event"
            />
            <validation-provider
              v-if="facturaServicio.revision_tecnica"
              rules="required"
              v-slot="{ errors, valid }"
            >
              <b-field
                label="Costo revisión"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <numeric
                    class="input"
                    disabled
                    v-model="revisionSeleccionada.costo_revision"
                    :options="{
                      currencySymbol: '$',
                      emptyInputBehavior: 'zero'
                    }"
                    placeholder="Costo revisión..."
                  ></numeric>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
          </section>
        </div>
        <tabla-repuestos
          ref="TablaRepuestos"
          label="Repuestos del vehiculo"
          v-model="facturaServicio.detalle_servicio"
          :accion="accion"
          @seleccionar="seleccionarEquipamiento"
        />
        <section class="level box">
          <div
            class="level-item has-text-centered"
            v-show="facturaServicio.revision_tecnica"
          >
            <div>
              <p class="heading">Costo revisión</p>
              <p class="title">{{ precioRevision | filtro_decimales(2) }}</p>
            </div>
          </div>
          <div
            class="level-item has-text-centered"
            v-show="facturaServicio.revision_tecnica"
          >
            <div>
              <p class="title is-1">+</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Repuestos</p>
              <p class="title">{{ precioRepuestos | filtro_decimales(2) }}</p>
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
import TablaRepuestos from "@/components/servicio/TablaRepuestos";

export default {
  name: "ServicioFacturaFormulario",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad, TablaRepuestos },
  data() {
    return {
      entidad: "facturaServicio",
      facturaServicio: {
        cliente: null,
        mecanico: null,
        vehiculo: null,
        revision_tecnica: null,
        fecha_emision: dayjs().format("YYYY-MM-DD"),
        fecha_proxima_revision: dayjs().format("YYYY-MM-DD"),
        kilometraje_actual: 0,
        costo_revision: 0,
        detalle_servicio: []
      },
      revisionSeleccionada: {}
    };
  },
  computed: {
    precioRepuestos() {
      return this.facturaServicio.detalle_servicio.reduce(
        (acumulador, elem) =>
          (acumulador += parseFloat(elem.precio) * parseFloat(elem.cantidad)),
        0
      );
    },
    precioRevision() {
      return this.revisionSeleccionada.costo_revision || 0;
    },
    precioTotal() {
      return this.precioRevision + this.precioRepuestos;
    },
    fecha_emision: {
      get() {
        return dayjs(this.facturaServicio.fecha_emision || new Date()).toDate();
      },
      set(value) {
        this.facturaServicio.fecha_emision = dayjs(value).format("YYYY-MM-DD");
      }
    }
  },
  methods: {
    // @Override
    despuesObtener(entidad) {
      entidad.numero_revision = this.agregarCeros(entidad.id, 10);
      this.$refs.SeleccionarCliente.establecerCampoVisible(
        entidad.nombre_cliente
      );
      if (entidad.revision_tecnica)
        this.$refs.SeleccionarRevision.recuperarEntidad(
          entidad.revision_tecnica
        );
    },
    seleccionarEquipamiento(repuesto) {
      if (
        !this.facturaServicio.detalle_servicio.some(
          (elem) => elem.descripcion === repuesto.nombre
        )
      ) {
        this.facturaServicio.detalle_servicio.push(this.crearDetalle(repuesto));
      } else {
        this.notificar("El repuesto ya esta agregado!", "is-warning");
      }
    },
    crearDetalle(repuesto) {
      return {
        repuesto: repuesto.id,
        descripcion: repuesto.nombre,
        precio: repuesto.precio,
        cantidad: 1,
        max: repuesto.cantidad
      };
    }
  }
};
</script>
