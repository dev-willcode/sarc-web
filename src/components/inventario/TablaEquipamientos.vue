<template>
  <card-component class="has-table has-mobile-sort-spaced" :title="label">
    <template slot="card-header">
      <seleccionar-entidad
        label="Añadir"
        type="button"
        icon="plus"
        @modelo="seleccionar"
        :configuracion="configuraciones.equipamiento"
      />
    </template>
    <tabla-editable
      :url="configuraciones.equipamiento.urlListado"
      :configuracion="configuracionTabla"
      disabled-item="es_serie"
      v-model="value"
    />
  </card-component>
</template>
<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import CardComponent from "@/components/application/CardComponent";
import TablaEditable from "@/components/application/TablaEditable";
import SeleccionarEntidad from "@/components/application/SeleccionarEntidad";

export default {
  name: "TablaEquipamientos",
  mixins: [baseComponente],
  components: { CardComponent, TablaEditable, SeleccionarEntidad },
  props: {
    value: Array,
    label: String,
    configuracion: Array
  },
  data() {
    return {};
  },
  computed: {
    configuracionTabla() {
      return this.configuracion || this.configuraciones.equipamiento.listado;
    }
  },
  created() {},
  methods: {
    seleccionar(equipamiento) {
      this.$emit("seleccionar", equipamiento);
    }
  }
};
</script>
