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
                v-model="citas.fecha"
              >
              </b-datepicker>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

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
              <b-button type="is-primary is-outlined" @click="$router.back()"
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
        fecha: new Date()
      }
    };
  },
  computed: {},
  methods: {
    // @Override
    antesGuardar(entidad) {
      entidad.fecha = dayjs(entidad.fecha).format("YYYY-MM-DD");
    },
    // @Override
    despuesObtener(entidad) {
      entidad.fecha = dayjs(entidad.fecha).toDate();
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
