<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Vehiculo"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="revision_tecnica.vehiculo"
                placeholder="Seleccione el vehiculo..."
                expanded
              >
                <option
                  v-for="vehiculo in vehiculosListado"
                  :value="vehiculo.id"
                  :key="vehiculo.id"
                >
                  {{ vehiculo.nombre }}
                </option>
              </b-select>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Mecánico"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="revision_tecnica.mecanico"
                placeholder="Seleccione el mecánico..."
                expanded
              >
                <option
                  v-for="mecanico in mecanicosListadon"
                  :value="mecanico.id"
                  :key="mecanico.id"
                >
                  {{ mecanico.nombre }}
                </option>
              </b-select>
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
                v-model="revision_tecnica.kilometraje_actual"
                placeholder="Kilometraje Actual..."
              ></numeric>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Fecha Revisión"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-datepicker
                v-model="revision_tecnica.fecha_revision"                
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
              </b-datepicker>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Fecha Proxima Revisión"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-datepicker
                v-model="revision_tecnica.fecha_prox_revision"                
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
              </b-datepicker>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

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
import baseFormulario from "@/components/shared/bases/baseFormulario";

export default {
  name: "Revision_tecnica",
  mixins: [baseFormulario],
  data() {
    return {
      entidad: "revision_tecnica",
      url: "revision_tecnica",
      revision_tecnica: {
        vehiculo: null,
        mecanico: null,
        kilometraje_actual: 0,
        fecha_revision: "",
        fecha_prox_revision:""
      },
      //listados
      vehiculosListado:[],
      mecanicosListado:[]
    };
  }, 
  created() {
    this.peticion({ method: "get", url: "vehiculo" }, ({ data }) => {
      this.modelosListado = data.results;
    });
    this.peticion({ method: "get", url: "mecanico" }, ({ data }) => {
      this.consesionarioListado = data.results;
    });
    
  },
  computed: {},
  methods: {}
};
</script>
