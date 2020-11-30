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
            label="Taller"
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="citas.taller"
                placeholder="Elija el taller"
                expanded
              >
                <option
                  v-for="taller in tallerListado"
                  :value="taller.id"
                  :key="taller.id"
                >
                  {{ taller.nombre }} -
                  {{ taller.domicilio }}
                </option>
              </b-select>
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
        taller: null,
        fecha: dayjs().format("YYYY-MM-DD"),
        hora: null
      },
      //listados
      tallerListado: []
    };
  },
  computed: {
    ...mapState(["usuario"]),
    horarioListado() {
      let horario = [];
      let dia = dayjs(new Date())
        .add(1, "hour")
        .set("second", 0)
        .set("minute", 0);
      if (dia.format("YYYY-MM-DD") !== this.citas.fecha) {
        dia = dia.set("hour", 7);
      }
      while (dia.hour() <= 17) {
        horario.push({
          descripcion: dia.format("hh:mm A"),
          valor: dia.format("HH:mm:ss")
        });
        dia = dia.set("hour", dia.hour() + 1);
      }
      return horario;
    },
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
    this.peticion(
      { method: "get", url: "servicio/?tipo=Taller" },
      ({ data }) => {
        this.tallerListado = data.results;
      }
    );
  },
  mounted() {
    let diaSemana = dayjs(this.citas.fecha).day();
    // si es domingo
    if (diaSemana == 0) {
      this.citas.fecha = dayjs()
        .add(1, "day")
        .format("YYYY-MM-DD");
      //si es sabado
    } else if (diaSemana === 6) {
      this.citas.fecha = dayjs()
        .add(2, "day")
        .format("YYYY-MM-DD");
    }
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
