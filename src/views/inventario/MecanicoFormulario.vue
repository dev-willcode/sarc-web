<template>
  <header-view titulo="Mecanico" :stack-ruta="['SARC', 'Mecanicos']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component title="Formulario de mecanico" :icon="icon">
          <form @submit.prevent="submit">
            <b-field label="DNI" horizontal>
              <b-input
                v-model="mecanico.nombre"
                placeholder="cedula de identidad..."
              />
            </b-field>
            <b-field label="Nombre" horizontal>
              <b-input
                v-model="mecanico.nombre"
                placeholder="Nombre del cliente..."
              />
            </b-field>
            <b-field label="Dirección" horizontal>
              <b-input
                v-model="mecanico.nombre"
                placeholder="Dirección o domicilio..."
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
import CardComponent from "@/components/application/CardComponent";

export default {
  name: "Clientes",
  mixins: [baseVista],
  props: {
    icon: String,
  },
  components: {
    CardComponent,
  },
  data() {
    return {
      mecanico: {
        dni: "",
        nombre: "",
        direccion: "",
        servicio: null,
      },
    };
  },
  computed: {},
  methods: {
    submit() {},
    reset() {},
  },
};
</script>
