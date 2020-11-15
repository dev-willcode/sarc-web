<template>
  <div>
    <hero-bar>
      Mi perfil
    </hero-bar>
    <section class="section is-main-section">
      <section class="columns is-8">
        <section class="column is-half">
          <datos-personales />
        </section>
        <section class="column is-half">
          <actualizar-contrasena />
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import HeroBar from "@/components/application/HeroBar";
import ActualizarContrasena from "@/components/Perfil/ActualizarContrasena";
import DatosPersonales from "@/components/Perfil/DatosPersonales";

export default {
  name: "Profile",
  props: {},
  mixins: [baseComponente],
  components: {
    DatosPersonales,
    ActualizarContrasena,
    HeroBar
  },
  data() {
    return {
      cargando: false,
      perfil: {
        dni: "",
        nombre: "",
        correo: "",
        domicilio: ""
      },
      contrasena: {
        actual: "",
        nueva: "",
        confirmada: ""
      }
    };
  },
  methods: {}
};
</script>
