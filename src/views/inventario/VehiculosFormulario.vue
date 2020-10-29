<template>
  <header-view titulo="Vehiculos" :stack-ruta="['SARC', 'Vehiculos']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de Vehiculos" :icon="icon">
          <form @submit.prevent="submit">                        
                        
            <b-field label="Cliente" horizontal>
              <b-input
                v-model="form.cliente"
                placeholder="Cliente..."
              />
            </b-field>            

            <b-field label="Chasis" horizontal>
              <b-input
                v-model="form.chasis"
                placeholder="Chasis del vehículo..."
              />
            </b-field>

            <b-field label="Matricula" horizontal>
              <b-input
                v-model="form.matricula"
                placeholder="Matricula del vehículo..."
              />
            </b-field>
            
            <hr />
            <b-field horizontal>
              <b-field grouped>
                <div class="control">
                  <b-button native-type="submit" type="is-primary"
                    >Guardar</b-button>
                </div>
                <div class="control">
                  <b-button type="is-primary is-outlined" @click="reset"
                    >Cancelar</b-button>
                </div>
              </b-field>
            </b-field>
          </form>
        </card-component>
      </section>
    </template>
  </header-view>
</template>

<script>

import baseVista from "@/components/shared/bases/baseVista";

import mapValues from "lodash/mapValues";
import CardComponent from "@/components/application/CardComponent";

export default {
  name: "Vehiculos",
  mixins: [baseVista],
  props: {
    icon: String
  },
  components: {
    CardComponent
  },
  data() {
    return {
      isLoading: false,
      form: {
        cliente: null,
        chasis: null,
        matricula: null
      },
      customElementsForm: {
        checkbox: [],
        radio: null,
        switch: true,
        file: null
      },
      departments: ["Business Development", "Marketing", "Sales"]
    };
  },
  computed: {},
  methods: {
    submit() {},
    reset() {
      this.form = mapValues(this.form, (item) => {
        if (item && typeof item === "object") {
          return [];
        }
        return null;
      });

      this.$buefy.snackbar.open({
        message: "Reset successfully",
        queue: false
      });
    }
  }
};
</script>