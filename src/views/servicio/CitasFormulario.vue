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
        <seleccionar-entidad
          ref="SeleccionarMecanico"
          label="Mecánico"
          field-visible="nombre"
          v-model="citas.mecanico"
          :configuracion="configuraciones.mecanico"
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
      entidad: "citas",
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
