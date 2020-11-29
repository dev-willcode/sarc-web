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
        <b-carousel-list :data="vehiculosListado" :items-to-show="3">
          <template v-slot:item="{ list }">
            <div class="card">
              <div class="card-image">
                <b-carousel
                  v-if="list.modelo_imagenes[0]"
                  :progress="true"
                  :repeat="true"
                  :interval="2000"
                >
                  <b-carousel-item
                    v-for="(item, i) in list.modelo_imagenes"
                    :key="i"
                  >
                    <figure class="image is-4by3">
                      <img :src="item.imagen" :alt="list.nombre_modelo" />
                    </figure>
                  </b-carousel-item>
                </b-carousel>
                <figure v-else class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/640x480.png"
                    :alt="list.nombre_modelo"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="container has-text-centered">
                  <span class="subtitle is-5">
                    <b>Modelo </b>{{ list.nombre_modelo }}</span
                  >
                </div>
                <hr />
                <div class="container">
                  <p><b>Precios desde : </b>${{ list.precio }}</p>
                  <p><b>Potencia: </b>{{ list.potencia }} HP</p>
                  <p><b>Cilindraje: </b>{{ list.cilindraje }} Cilindros</p>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
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
      vehiculosListado: []
    };
  },
  created() {
    this.peticion(
      { method: "get", url: "modelo_auto/?limit=3&ordering=-id" },
      ({ data }) => {
        this.vehiculosListado = data.results;
      },
      "No se consiguió listar los vehiculos"
    );
  },
  computed: {},
  methods: {}
};
</script>
<style>
.carousel-slides {
  justify-content: center;
}
</style>
