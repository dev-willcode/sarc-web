<template>
  <header-view titulo="Clientes" :stack-ruta="['SARC', 'Cliente']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de cliente" :icon="icon">
          <form @submit.prevent="submit">
            <b-field label="DNI" horizontal>
              <b-input
                v-model="form.nombre"
                placeholder="cedula de identidad..."
              />
            </b-field>
            <b-field label="Nombre" horizontal>
              <b-input
                v-model="form.nombre"
                placeholder="Nombre del cliente..."
              />
            </b-field>
            <b-field label="Dirección" horizontal>
              <b-input
                v-model="form.nombre"
                placeholder="Dirección o domicilio..."
              />
            </b-field>
            <b-field label="Teléfono" horizontal>
              <b-field>
                <p class="control">
                  <a class="button is-static">
                    +593
                  </a>
                </p>
                <b-input
                  placeholder="Teléfono de contacto..."
                  v-model="form.phone"
                  type="tel"
                  name="phone"
                  expanded
                />
              </b-field>
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
  name: "Clientes",
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
        name: null,
        email: null,
        phone: null,
        department: null,
        nombre: null,
        question: null
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
