<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Bastidor"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input v-model="auto.bastidor" placeholder="Bastidor..." />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Modelo del auto"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="auto.modelo_auto"
                placeholder="Elija el modelo del auto..."
                expanded
              >
                <option
                  v-for="modelo_auto in modelosListado"
                  :value="modelo_auto.id"
                  :key="modelo_auto.id"
                >
                  {{ modelo_auto.nombre_modelo }}
                </option>
              </b-select>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Consesionario"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="auto.concesionario"
                placeholder="Elija el concesionario..."
                expanded
              >
                <option
                  v-for="servicio in consesionarioListado"
                  :value="servicio.id"
                  :key="servicio.id"
                >
                  {{ servicio.nombre }}
                </option>
              </b-select>
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
  name: "Autos",
  mixins: [baseFormulario],
  components: {},
  data() {
    return {
      entidad: "auto",
      url: "auto",
      auto: {
        bastidor: "",
        modelo_auto: null,
        concesionario: null
      },
      //listados
      modelosListado: [],
      consesionarioListado: []
    };
  },
  created() {
    this.peticion({ method: "get", url: "modelo_auto" }, ({ data }) => {
      this.modelosListado = data.results;
    });
    this.peticion({ method: "get", url: "servicio" }, ({ data }) => {
      this.consesionarioListado = data.results;
    });
  },
  computed: {},
  methods: {}
};
</script>
