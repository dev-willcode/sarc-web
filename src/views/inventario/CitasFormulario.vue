<template>
  <header-view titulo="Citas" :stack-ruta="['SARC', 'Citas']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de Citas sobre Revision tecnica" :icon="icon">
          <form @submit.prevent="submit">
            
            <b-field label="Revision Tecnica" horizontal>
              <b-input
                v-model="form.revision_tecnica"
                placeholder="Revisión tecnica..."
              />
            </b-field>

            <b-field label="Fecha Actual" horizontal>
                <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                </b-datepicker>
            </b-field>
            
            <b-field label="Fecha Proxima de Revision" horizontal>
                <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                </b-datepicker>
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
  name: "Citas",
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
        revision_tecnica: null,        
        fecha_revision: null,
        fecha_proxima_revision: null
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
