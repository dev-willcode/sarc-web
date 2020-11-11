<template>
  <card-component class="has-table has-mobile-sort-spaced" :title="label">
    <template slot="card-header">
      <seleccionar-entidad
        label="Añadir"
        type="button"
        icon="plus"
        @modelo="seleccionarEquipamiento"
        :configuracion="configuraciones.equipamiento"
      />
    </template>
    <tabla-editable
      :url="configuraciones.equipamiento.urlListado"
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
    seleccionarEquipamiento(equipamiento) {
      let duplicado = !this.value.some((equip) => equip.id == equipamiento.id);
      if (duplicado) {
        this.value.push(equipamiento);
      } else {
        this.notificar("El equipamiento ya esta agregado!", "is-warning");
      }
    }
  }
};
</script>
