<template>
  <card-component class="has-table has-mobile-sort-spaced" :title="label">
    <template slot="card-header">
      <seleccionar-entidad
        label="Añadir repuesto"
        type="button"
        icon="plus"
        argumentos="?cantidad__gt=0"
        @modelo="seleccionar"
        :configuracion="configuraciones.repuesto"
      />
    </template>
    <tabla-editable
      :url="configuraciones.repuesto.urlListado"
      :configuracion="configuracionTabla"
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
  name: "TablaRepuestos",
  mixins: [baseComponente],
  components: { CardComponent, TablaEditable, SeleccionarEntidad },
  props: {
    accion: String,
    value: Array,
    label: String,
    configuracion: Array
  },
  data() {
    return {};
  },
  computed: {
    configuracionTabla() {
      return [
        { label: "descripcion", field: "descripcion" },
        { label: "precio", field: "precio", editable: true, type: "decimal" },
        {
          label: "cantidad",
          field: "cantidad",
          editable: this.accion === "NUEVO",
          type: "integer",
          rules: (data) => {
            return {
              required: true,
              max_value: data.max || 999999999
            };
          }
        }
      ];
    }
  },
  created() {},
  methods: {
    seleccionar(repuesto) {
      this.$emit("seleccionar", repuesto);
    }
  }
};
</script>
