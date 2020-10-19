<template>
  <section class="section">
    <div class="container">
      <div class="column">
        <h3 class="title is-2 has-text-centered">
          Nuestra mejor selección de automóviles
        </h3>
        <p class="subtitle is-4 has-text-centered">
          ¿Qué esperas para probarlos?
        </p>
      </div>
      <br />
      <div class="columns is-centered">
        <div
          class="column is-4"
          v-for="vehiculo in vehiculosListado"
          :key="vehiculo.id"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="vehiculo.imagen" :alt="vehiculo.nombre" />
              </figure>
            </div>
            <div class="card-content">
              <p>{{ vehiculo.modelo }}</p>
              <p>{{ vehiculo.precio }}</p>
              <div class="container has-text-centered">
                <button class="button is-primary is-outlined is-rounded">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseComponente from "@/components/shared/bases/baseComponente";

export default {
  name: "VehiculosLanding",
  mixins: [BaseComponente],
  props: {},
  components: {},
  data() {
    return {
      vehiculosListado: [],
    };
  },
  created() {
    this.peticion.get("auto/").then(response => {
      this.vehiculosListado = response.data.results;
    });
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
#hero {
  background-image: url(https://images.unsplash.com/photo-1485575397155-c9b47f81f645?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
</style>
