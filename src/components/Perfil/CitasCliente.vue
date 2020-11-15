<template>
  <card-component
    class="has-table has-mobile-sort-spaced"
    title="Reservar una nueva cita"
  >
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Fecha"
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-datepicker
                icon="calendar-today"
                locale="es-ES"
                editable
                v-model="fecha"
                :min-date="new Date()"
              >
              </b-datepicker>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <br />
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Horario"
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="citas.hora"
                placeholder="Elija el horario"
                expanded
              >
                <option
                  v-for="horario in horarioListado"
                  :value="horario.valor"
                  :key="horario.valor"
                >
                  {{ horario.descripcion }}
                </option>
              </b-select>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <br />

        <section class="columns is-centered">
          <b-button
            type="is-primary"
            :class="{ 'is-loading': cargando }"
            @click="handleSubmit(reservar)"
            >Reservar cita</b-button
          >
        </section>
      </ValidationObserver>
    </div>
  </card-component>
</template>
<script>
import { mapState } from "vuex";
import dayjs from "dayjs";
import baseComponente from "@/components/shared/bases/baseComponente";
import CardComponent from "@/components/application/CardComponent";

export default {
  name: "TablaCitas",
  mixins: [baseComponente],
  components: { CardComponent },
  props: {
    label: String
  },
  data() {
    return {
      citas: {
        cliente: null,
        mecanico: null,
        fecha: dayjs().format("YYYY-MM-DD"),
        hora: "07:00:00"
      },
      // listados
      horarioListado: [
        { descripcion: "7:00 AM", valor: "07:00:00" },
        { descripcion: "8:00 AM", valor: "08:00:00" },
        { descripcion: "9:00 AM", valor: "09:00:00" },
        { descripcion: "10:00 AM", valor: "10:00:00" },
        { descripcion: "11:00 AM", valor: "11:00:00" },
        { descripcion: "12:00 AM", valor: "12:00:00" },
        { descripcion: "2:00 AM", valor: "14:00:00" },
        { descripcion: "3:00 AM", valor: "15:00:00" },
        { descripcion: "4:00 AM", valor: "16:00:00" },
        { descripcion: "5:00 AM", valor: "17:00:00" }
      ]
    };
  },
  computed: {
    ...mapState(["usuario"]),
    fecha: {
      get() {
        return dayjs(this.citas.fecha || new Date()).toDate();
      },
      set(value) {
        this.citas.fecha = dayjs(value).format("YYYY-MM-DD");
      }
    }
  },
  created() {
    this.citas.cliente = this.usuario.id;
  },
  methods: {
    reservar() {
      this.peticion(
        { method: "post", url: `citas`, payload: this.citas },
        (response) => {
          if (response.status == 201) {
            this.$emit("reservado", response.data);
            this.emitirMensaje(
              "Reservación realizada con éxito!",
              "is-success"
            );
          } else this.notificarErrores(response);
        }
      );
    }
  }
};
</script>
