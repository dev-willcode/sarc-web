<template>
  <div>
    <hero-bar>
      Mi citas
    </hero-bar>
    <section class="p-5">
      <b-notification v-if="citaActual.estado" type="is-success" has-icon>
        Usted ya tiene una cita separada, porfavor acerquese al taller
        <b>{{ citaActual.nombre_taller }}</b> en la dirección
        <b>{{ citaActual.direccion_taller }}</b> el dia
        <b>{{ citaActual.fecha }}</b> en el horario de
        <b>{{ citaActual.hora }}</b
        >, para que nuestro grupo de tecnicos calificados, atiendan su
        requerimiento.
      </b-notification>
    </section>
    <section class="section is-main-section columns">
      <section class="column" v-if="!citaActual.estado">
        <citas-cliente @reservado="reservarCita" />
      </section>
      <section class="column" :class="{ 'is-two-thirds': !citaActual.estado }">
        <tabla-citas ref="tabla" @ultimaCita="citaActual = $event || {}" />
      </section>
    </section>
  </div>
</template>

<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import HeroBar from "@/components/application/HeroBar";
import CitasCliente from "@/components/Perfil/CitasCliente";
import TablaCitas from "@/components/Perfil/TablaCitas";
export default {
  name: "Profile",
  props: {},
  mixins: [baseComponente],
  components: {
    CitasCliente,
    TablaCitas,
    HeroBar
  },
  data() {
    return {
      citaPendiente: true,
      cargando: false,
      citaActual: {}
    };
  },
  methods: {
    reservarCita(cita) {
      this.citaActual = cita;
      this.$refs.tabla.listar();
    }
  }
};
</script>
