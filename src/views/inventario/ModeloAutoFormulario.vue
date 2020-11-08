<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Marca"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="modeloAuto.marca"
                placeholder="Elija la marca..."
                expanded
              >
                <option
                  v-for="marca in marcaListado"
                  :value="marca.id"
                  :key="marca.id"
                >
                  {{ marca.descripcion }}
                </option>
              </b-select>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Nombre"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input
                v-model="modeloAuto.nombre_modelo"
                placeholder="nombre..."
              />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Potencia"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <numeric
                class="input"
                :class="valid ? 'is-success' : 'is-danger'"
                v-model="modeloAuto.potencia"
                placeholder="potencia..."
              ></numeric>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Cilindraje"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <numeric
                class="input"
                :class="valid ? 'is-success' : 'is-danger'"
                :options="'integer'"
                v-model="modeloAuto.cilindraje"
                placeholder="cilindraje..."
              ></numeric>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Precio"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <numeric
                class="input"
                :class="valid ? 'is-success' : 'is-danger'"
                :options="'dollar'"
                v-model="modeloAuto.precio"
                placeholder="precio..."
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

export default {
  name: "Marcas",
  mixins: [baseFormulario],
  data() {
    return {
      entidad: "modeloAuto",
      url: "modelo_auto",
      modeloAuto: {
        marca: null,
        nombre_modelo: "",
        potencia: 0,
        cilindraje: 0,
        precio: 0
      },
      //listados
      marcaListado: []
    };
  },
  created() {
    this.peticion({ method: "get", url: "marca" }, ({ data }) => {
      this.marcaListado = data.results;
    });
  },
  computed: {},
  methods: {}
};
</script>
