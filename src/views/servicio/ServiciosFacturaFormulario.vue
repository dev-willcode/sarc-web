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
                    v-model="facturaServicio.fecha_emision"
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
        </div>
        <tabla-repuestos
          ref="TablaRepuestos"
          label="Repuestos del vehiculo"
          v-model="facturaServicio.detalle_servicio"
          :configuracion="detalleConfiguracion"
          @seleccionar="seleccionarEquipamiento"
        />
        <section class="level box">
          <div class="level-item has-text-centered" />
          <div class="level-item has-text-centered" />
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Repuestos</p>
              <p class="title">{{ precioRepuestos }}</p>
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
              <p class="title">{{ precioTotal }}</p>
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
        fecha_emision: new Date(),
        fecha_proxima_revision: new Date(),
        kilometraje_actual: 0,
        costo_revision: 0,
        total: 0,
        detalle_servicio: []
      },
      // configuraciones
      detalleConfiguracion: [
        { label: "descripcion", field: "descripcion" },
        { label: "precio", field: "precio" }
      ]
    };
  },
  computed: {
    precioRepuestos() {
      return this.facturaServicio.detalle_servicio.reduce(
        (acumulador, elem) => (acumulador += parseFloat(elem.precio)),
        0
      );
    },
    precioTotal() {
      return this.precioRepuestos;
    }
  },
  methods: {
    // @Override
    antesGuardar(entidad) {
      entidad.fecha_emision = dayjs(entidad.fecha_emision).format("YYYY-MM-DD");
    },
    // @Override
    despuesObtener(entidad) {
      entidad.fecha_emision = dayjs(entidad.fecha_emision).toDate();
      entidad.numero_revision = this.agregarCeros(entidad.id, 10);
      this.$refs.SeleccionarCliente.establecerCampoVisible(
        entidad.nombre_cliente
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
    crearDetalle(repuesto, defecto = false) {
      return {
        descripcion: repuesto.nombre,
        precio: defecto ? 0 : repuesto.precio,
        es_serie: defecto
      };
    }
  }
};
</script>
