<template>
  <header-view titulo="Revision tecnica" :stack-ruta="['SARC', 'Revision tecnica']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de Revision tecnica" :icon="icon">
          <form @submit.prevent="submit">                   

            <b-field label="Vehículo" horizontal>
              <b-input
                v-model="form.vehiculo"
                placeholder="Vehículo de Revision tecnica..."
              />
            </b-field>
            <b-field label="Mecanico" horizontal>
              <b-input
                v-model="form.mecanico"
                placeholder="Nombre del Mecanico encargado..."
              />
            </b-field>

            <b-field label="Kilometraje Actual" horizontal>
              <b-input
                v-model="form.kilometraje_actual"
                placeholder="Kilometraje Actual..."
              />
            </b-field>            
            
            <hr />
            <b-field horizontal>
              <b-field grouped>
                <div class="control">
                  <b-button native-type="submit" type="is-primary"
                    >Guardar</b-button
                  >
                </div>
                <div class="control">
                  <b-button type="is-primary is-outlined" @click="reset"
                    >Cancelar</b-button
                  >
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
  name: "Revision tecnica",
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
        vehiculo: null,
        mecanico: null,
        kilometraje_actual: null,        
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
