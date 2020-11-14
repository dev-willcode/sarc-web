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
                v-model="revisionTecnica.numero_revision"
              />
            </b-field>

            <seleccionar-entidad
              ref="SeleccionarMecanico"
              label="Mecánico"
              field-visible="nombre"
              v-model="revisionTecnica.mecanico"
              :configuracion="configuraciones.mecanico"
            />

            <seleccionar-entidad
              ref="SeleccionarCliente"
              label="Cliente"
              field-visible="nombre"
              v-model="revisionTecnica.cliente"
              :configuracion="configuraciones.cliente"
              :disabled="accion !== 'NUEVO'"
            />

            <seleccionar-entidad
              ref="SeleccionarVehiculo"
              label="Vehículo"
              field-visible="matricula"
              v-model="revisionTecnica.vehiculo"
              :argumentos="`?cliente=${revisionTecnica.cliente}`"
              :configuracion="configuraciones.vehiculo"
              :disabled="accion !== 'NUEVO' || !revisionTecnica.cliente"
            />
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Costo revisión"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <numeric
                    class="input"
                    :class="valid ? 'is-success' : 'is-danger'"
                    v-model="revisionTecnica.costo_revision"
                    placeholder="Costo revisión..."
                  ></numeric>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
          </section>

          <section class="column is-half">
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Revisión"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-datepicker
                    icon="calendar-today"
                    locale="fr-CA"
                    editable
                    v-model="revisionTecnica.fecha_revision"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>

            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Próxima revisión"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-datepicker
                    icon="calendar-today"
                    locale="fr-CA"
                    editable
                    v-model="revisionTecnica.fecha_proxima_revision"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>

            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Kilometraje Actual"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <numeric
                    class="input"
                    :class="valid ? 'is-success' : 'is-danger'"
                    v-model="revisionTecnica.kilometraje_actual"
                    placeholder="Kilometraje Actual..."
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
          v-model="revisionTecnica.detalle_factura"
          :configuracion="detalleConfiguracion"
          @seleccionar="seleccionarEquipamiento"
          v-if="revisionTecnica.vehiculo"
        />
        <section class="level box" v-if="revisionTecnica.vehiculo">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Costo de la revisión</p>
              <p class="title">{{ revisionTecnica.costo_revision }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title is-1">+</p>
            </div>
          </div>
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
  name: "RevisionTecnicaFormulario",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad, TablaRepuestos },
  data() {
    return {
      entidad: "revisionTecnica",
      revisionTecnica: {
        cliente: null,
        mecanico: null,
        vehiculo: null,
        fecha_revision: new Date(),
        fecha_proxima_revision: new Date(),
        kilometraje_actual: 0,
        costo_revision: 0,
        total: 0,
        detalle_revision: []
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
      return this.revisionTecnica.detalle_revision.reduce(
        (acumulador, elem) => (acumulador += parseFloat(elem.precio)),
        0
      );
    },
    precioTotal() {
      return this.revisionTecnica.costo_revision + this.precioRepuestos;
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
      this.$refs.SeleccionarMecanico.establecerCampoVisible(
        entidad.nombre_mecanico
      );
      this.$refs.SeleccionarVehiculo.establecerCampoVisible(entidad.matricula);
    },
    seleccionarEquipamiento(repuesto) {
      if (
        !this.revisionTecnica.detalle_factura.some(
          (elem) => elem.descripcion === repuesto.nombre
        )
      ) {
        this.revisionTecnica.detalle_factura.push(this.crearDetalle(repuesto));
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
