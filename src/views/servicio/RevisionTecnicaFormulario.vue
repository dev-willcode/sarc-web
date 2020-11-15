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
                    v-model="fecha_revision"
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
                    v-model="fecha_proxima_revision"
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

export default {
  name: "RevisionTecnicaFormulario",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad },
  data() {
    return {
      entidad: "revisionTecnica",
      revisionTecnica: {
        cliente: null,
        mecanico: null,
        vehiculo: null,
        fecha_revision: dayjs().format("YYYY-MM-DD"),
        fecha_proxima_revision: dayjs().format("YYYY-MM-DD"),
        kilometraje_actual: 0,
        costo_revision: 0,
        total: 0
      }
    };
  },
  computed: {
    fecha_revision: {
      get() {
        return dayjs(
          this.revisionTecnica.fecha_revision || new Date()
        ).toDate();
      },
      set(value) {
        this.revisionTecnica.fecha_revision = dayjs(value).format("YYYY-MM-DD");
      }
    },
    fecha_proxima_revision: {
      get() {
        return dayjs(
          this.revisionTecnica.fecha_proxima_revision || new Date()
        ).toDate();
      },
      set(value) {
        this.revisionTecnica.fecha_proxima_revision = dayjs(value).format(
          "YYYY-MM-DD"
        );
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
      this.$refs.SeleccionarMecanico.establecerCampoVisible(
        entidad.nombre_mecanico
      );
      this.$refs.SeleccionarVehiculo.establecerCampoVisible(entidad.matricula);
    }
  }
};
</script>
