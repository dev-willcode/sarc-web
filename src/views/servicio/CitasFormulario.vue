<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <seleccionar-entidad
          ref="SeleccionarCliente"
          label="Cliente"
          field-visible="nombre"
          v-model="citas.cliente"
          :configuracion="configuraciones.cliente"
        />
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Taller"
            horizontal
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

        <seleccionar-entidad
          ref="SeleccionarMecanico"
          label="Mecánico"
          field-visible="nombre"
          :argumentos="`?taller=${citas.taller}`"
          v-model="citas.mecanico"
          :configuracion="configuraciones.mecanico"
          :disabled="!citas.taller"
        />

        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Fecha"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-datepicker
                icon="calendar-today"
                locale="fr-CA"
                editable
                v-model="fecha"
                :min-date="new Date()"
              >
              </b-datepicker>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Horario"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="citas.hora"
                placeholder="Elija el horario"
                expanded
              >
                <option v-if="horarioListado.length === 0" :value="citas.hora"
                  >{{ fechaDesabilitada }}
                </option>
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
        <b-field horizontal>
          <div class="row">
            <b-switch v-if="accion !== 'NUEVO'" v-model="citas.estado">
              {{ citas.estado ? "Activo" : "Cancelado" }}
            </b-switch>
          </div>
        </b-field>
        <br />
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <b-button
                v-if="accion === 'NUEVO'"
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(guardar)"
                >Guardar</b-button
              >
              <b-button
                v-else
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(editar)"
                >Editar</b-button
              >
            </div>
            <div class="control">
              <b-button type="is-primary is-outlined" @click="cancelar"
                >Cancelar</b-button
              >
            </div>
          </b-field>
        </b-field>
      </ValidationObserver>
    </div>
  </card-component>
</template>

<script>
import baseFormulario from "@/components/shared/bases/baseFormulario";
import SeleccionarEntidad from "@/components/application/SeleccionarEntidad";
import dayjs from "dayjs";

export default {
  name: "CitasFormulario",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad },
  data() {
    return {
      dayjs: dayjs,
      entidad: "citas",
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
  created() {
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
  computed: {
    fechaDesabilitada() {
      if (this.citas.hora) {
        return dayjs(
          dayjs().format("YYYY-MM-DD") + " " + this.citas.hora,
          "YYYY-MM-DD HH:mm:ss"
        ).format("hh:mm A");
      }
      return null;
    },
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
  methods: {
    // @Override
    despuesObtener(entidad) {
      this.$refs.SeleccionarCliente.establecerCampoVisible(
        entidad.nombre_cliente
      );
      this.$refs.SeleccionarMecanico.establecerCampoVisible(
        entidad.nombre_mecanico
      );
    }
  }
};
</script>
