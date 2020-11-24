<template>
  <section>
    <b-field>
      <b-upload
        v-model="dropFiles"
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
    <b-carousel-list :data="renderFiles" :items-to-show="4">
      <template v-slot:item="{ list }">
        <div class="card">
          <figure class="image">
            <img :src="list.img" />
          </figure>
          <b-button
            icon-pack="fas"
            icon-left="times"
            type="is-danger"
            size="is-small"
            style="position: absolute; top: 5px; right: 5px"
            @click="borrarImagen(list.img)"
          />
        </div>
      </template>
    </b-carousel-list>
  </section>
</template>

<script>
import axios from "axios";
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
      dropFiles: [],
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
        this.renderFiles.push({ img: await this.devolverImagen(elemento) });
      });
    },
    borrarImagen(imagen) {
      let index = this.renderFiles.findIndex((elem) => elem.img === imagen);
      if (index >= 0) {
        this.renderFiles.splice(index, 1);
        this.value.splice(index, 1);
      }
    },
    establecerImagenes(listado) {
      this.renderFiles = [];
      listado.forEach((elem) => {
        axios({
          url: elem.imagen,
          method: "GET",
          responseType: "blob"
        }).then(async (response) => {
          let doc = new Blob([response.data], { type: "image/jpg" });
          doc.lastModifiedDate = new Date();
          doc.name = "img.jpg";
          this.value.push({ imagen: doc });
          this.renderFiles.push({ img: await this.devolverImagen(doc) });
        });
      });
    }
  }
};
</script>
