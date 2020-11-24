<template>
  <card-component class="has-table has-mobile-sort-spaced" :title="label">
    <template slot="card-header">
      <b-button
        type="is-primary"
        icon-pack="fas"
        icon-left="plus"
        @click="abrirModal('modalDetalle')"
      >
        {{ label }}
      </b-button>
    </template>
    <tabla-editable :configuracion="configuracionTabla" v-model="value" />
    <b-modal v-model="modalDetalle">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Ingrese el detalle ...</p>
        </header>
        <section class="modal-card-body">
          <card-component
            class="has-table has-mobile-sort-spaced"
            title="Detalle de revisión"
          >
            <card-component title="Formulario">
              <div class="p-5">
                <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                  <validation-provider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <b-field
                      label="Descripción"
                      horizontal
                      :type="
                        errors[0] ? 'is-danger' : valid ? 'is-success' : ''
                      "
                    >
                      <div class="row">
                        <b-input
                          v-model="detalle.descripcion"
                          placeholder="Descripción del detalle..."
                        />
                        <span class="has-text-danger">{{ errors[0] }}</span>
                      </div>
                    </b-field>
                  </validation-provider>
                  <validation-provider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <b-field
                      label="Precio"
                      horizontal
                      :type="
                        errors[0] ? 'is-danger' : valid ? 'is-success' : ''
                      "
                    >
                      <div class="row">
                        <numeric
                          class="input"
                          :class="valid ? 'is-success' : 'is-danger'"
                          :options="{
                            currencySymbol: '$',
                            emptyInputBehavior: 'zero'
                          }"
                          v-model="detalle.precio"
                          placeholder="Precio del detalle..."
                        ></numeric>
                        <span class="has-text-danger">{{ errors[0] }}</span>
                      </div>
                    </b-field>
                  </validation-provider>
                  <validation-provider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <b-field
                      label="Cantidad"
                      horizontal
                      :type="
                        errors[0] ? 'is-danger' : valid ? 'is-success' : ''
                      "
                    >
                      <div class="row">
                        <numeric
                          class="input"
                          :class="valid ? 'is-success' : 'is-danger'"
                          :options="{
                            decimalPalces: 0,
                            emptyInputBehavior: 'zero'
                          }"
                          v-model="detalle.cantidad"
                          placeholder="Cantidad del detalle..."
                        ></numeric>
                        <span class="has-text-danger">{{ errors[0] }}</span>
                      </div>
                    </b-field>
                  </validation-provider>

                  <br />
                  <b-field horizontal>
                    <b-field grouped>
                      <div class="control">
                        <b-button
                          type="is-primary"
                          @click="handleSubmit(crearDetalle)"
                          >Guardar</b-button
                        >
                      </div>
                      <div class="control">
                        <b-button
                          type="is-primary is-outlined"
                          @click="cerrarModal('modalDetalle')"
                          >Cancelar</b-button
                        >
                      </div>
                    </b-field>
                  </b-field>
                </ValidationObserver>
              </div>
            </card-component>
          </card-component>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <b-button type="is-danger" @click="cerrarModal('modalDetalle')"
            >Cancelar</b-button
          >
        </footer>
      </div>
    </b-modal>
  </card-component>
</template>
<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import CardComponent from "@/components/application/CardComponent";
import TablaEditable from "@/components/application/TablaEditable";

export default {
  name: "TablaRepuestos",
  mixins: [baseComponente],
  components: { CardComponent, TablaEditable },
  props: {
    accion: String,
    value: Array,
    label: String,
    configuracion: Array
  },
  data() {
    return {
      modalDetalle: false,
      detalle: {
        cantidad: 1,
        precio: 0,
        descripcion: ""
      }
    };
  },
  computed: {
    configuracionTabla() {
      return [
        {
          label: "descripcion",
          field: "descripcion"
        },
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
        },

        { label: "precio", field: "precio", editable: true, type: "decimal" }
      ];
    }
  },
  created() {},
  methods: {
    crearDetalle() {
      this.cerrarModal("modalDetalle");
      this.value.push(this.detalle);
      this.detalle = {
        cantidad: 1,
        precio: 0,
        descripcion: ""
      };
    },
    abrirModal(modal) {
      this[modal] = true;
    },
    cerrarModal(modal) {
      this[modal] = false;
    }
  }
};
</script>
