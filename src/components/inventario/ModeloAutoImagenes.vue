<template>
  <section>
    <b-carousel-list :data="renderFiles" :items-to-show="4">
      <template v-slot:item="{ list }">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="list.imagen" />
            </figure>
          </div>
          <div class="card-content">
            <div class="field is-grouped">
              <b-button
                icon-pack="fas"
                icon-left="times"
                type="is-danger"
                size="is-small"
                expanded
                @click="borrarImagen(list.imagen)"
              >
                Eliminar
              </b-button>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-list>
    <b-field>
      <b-upload
        multiple
        drag-drop
        expanded
        accept="image/*"
        @input="seleccionarImagenes"
      >
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>Arrastra o haz click para agregar imágenes</p>
          </div>
        </section>
      </b-upload>
    </b-field>
  </section>
</template>

<script>
import baseComponente from "@/components/shared/bases/baseComponente";

export default {
  name: "ModeloAutoImagenes",
  mixins: [baseComponente],
  components: {},
  props: {
    value: Array
  },
  data() {
    return {
      renderFiles: []
    };
  },
  computed: {},
  created() {},
  methods: {
    renderizarImagen(archivo) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async devolverImagen(imagen) {
      if (typeof imagen === "string") return imagen;
      let img = await this.renderizarImagen(imagen);
      return img;
    },
    async seleccionarImagenes(listado) {
      listado.forEach(async (elemento) => {
        this.value.push({ imagen: elemento });
        this.renderFiles.push({ imagen: await this.devolverImagen(elemento) });
      });
    },
    borrarImagen(imagen) {
      let index = this.renderFiles.findIndex((elem) => elem.imagen === imagen);
      if (index >= 0) {
        let value = this.renderFiles.splice(index, 1);
        if (typeof imagen !== "string") this.value.splice(index, 1);
        else this.$emit("eliminar", value[0].id);
      }
    },
    establecerImagenes(listado) {
      this.renderFiles = [...listado];
    }
  }
};
</script>
