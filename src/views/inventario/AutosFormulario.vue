<template>
  <header-view titulo="Autos" :stack-ruta="['SARC', 'Auto']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de cliente" :icon="icon">
          <form @submit.prevent="submit">
            <b-field label="Bastidor" horizontal>
              <b-input
                v-model="form.bastidor"
                placeholder="bastidor del auto..."
              />
            </b-field>            
            <b-field label="Modelo del auto" horizontal>
            <b-select placeholder="Elija modelo">
                <!--for para recorrer las opciones (modelos)--> 
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
            </b-field>  

            <b-field label="Consesionario" horizontal>
            <b-select placeholder="Elija consesionario">
                <!--for para recorrer las opciones (modelos)--> 
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
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
  name: "Autos",
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
        bastidor: null,
        modelo_auto: null,
        consesionario: null
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
