<template>
  <header-view titulo="Equipamientos" :stack-ruta="['SARC', 'Equipamientos']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de Equipamientos" :icon="icon">
          <form @submit.prevent="submit">                        
                        
            <b-field label="Nombre" horizontal>
              <b-input
                v-model="form.nombre"
                placeholder="Nombre del equipamiento..."
              />
            </b-field>            

            <b-field label="Precio" horizontal>
              <b-input
                v-model="form.precio"
                placeholder="Precio del equipamiento..."
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
  name: "Equipamientos",
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
        nombre: null,
        precio: null
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