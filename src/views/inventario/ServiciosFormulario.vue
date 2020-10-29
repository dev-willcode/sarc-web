<template>
  <header-view titulo="Servicios" :stack-ruta="['SARC', 'Servicios']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de servicios" :icon="icon">
          <form @submit.prevent="submit">
            <b-field label="DNI" horizontal>
              <b-input
                v-model="form.dni"
                placeholder="Identificador..."
              />
            </b-field>
            <b-field label="Nombre" horizontal>
              <b-input
                v-model="form.nombre"
                placeholder="Nombre del servicio..."
              />
            </b-field>
            <b-field label="Dirección" horizontal>
              <b-input
                v-model="form.domicilio"
                placeholder="Dirección o domicilio..."
              />
            </b-field>
           <b-field label="Tipo" horizontal>
            <b-select placeholder="Elija...">
                <!--for para recorrer las opciones (modelos)--> 
                <option value="1">Consesionario</option>
                <option value="2">Taller</option>
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
  name: "Servicios",
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
        dni: null,
        nombre: null,
        domicilio: null,
        tipo: null
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