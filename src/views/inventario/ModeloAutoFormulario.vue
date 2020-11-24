<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <div class="columns">
          <section class="column">
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
                    :options="{
                      emptyInputBehavior: 'zero'
                    }"
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
                    :options="{
                      decimalPlaces: 0,
                      emptyInputBehavior: 'zero',
                      minimumValue: 0
                    }"
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
                    :options="{
                      currencySymbol: '$',
                      emptyInputBehavior: 'zero',
                      minimumValue: 0
                    }"
                    v-model="modeloAuto.precio"
                    placeholder="precio..."
                  ></numeric>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
            <validation-provider
              :rules="{
                required: true,
                max_value: modeloAuto.precio
              }"
              v-slot="{ errors, valid }"
            >
              <b-field
                label="Descuento"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <numeric
                    class="input"
                    :class="valid ? 'is-success' : 'is-danger'"
                    :options="{
                      currencySymbol: '$',
                      emptyInputBehavior: 'zero'
                    }"
                    v-model="modeloAuto.descuento"
                    placeholder="descuento..."
                  ></numeric>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
          </section>
          <section class="column">
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Tipo de freno"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-select
                    v-model="modeloAuto.tipos_freno"
                    placeholder="Elija el tipo de freno..."
                    expanded
                  >
                    <option
                      v-for="tipoFreno in tipoFrenoListado"
                      :value="tipoFreno"
                      :key="tipoFreno"
                    >
                      {{ tipoFreno }}
                    </option>
                  </b-select>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Transmisión"
                horizontal
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-select
                    v-model="modeloAuto.transmision"
                    placeholder="Elija la transmisión..."
                    expanded
                  >
                    <option
                      v-for="transmision in transmisionListado"
                      :value="transmision"
                      :key="transmision"
                    >
                      {{ transmision }}
                    </option>
                  </b-select>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
            <b-field label="Observaciones">
              <b-input
                maxlength="255"
                type="textarea"
                v-model="modeloAuto.observaciones"
                placeholder="observaciones adicionales..."
              />
            </b-field>
          </section>
        </div>
        <tabla-equipamientos
          ref="TablaEquipamientos"
          label="Equipamientos del auto por defecto"
          v-model="listados.equipamientos"
          :configuracion="equipamientoConfiguracion"
          @seleccionar="seleccionarEquipamiento"
        />
        <Modelo-auto-imagenes
          ref="modeloImagenes"
          v-model="listados.modelo_imagenes"
        />
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
import axios from "axios";
import baseFormulario from "@/components/shared/bases/baseFormulario";
import TablaEquipamientos from "@/components/inventario/TablaEquipamientos";
import ModeloAutoImagenes from "@/components/inventario/ModeloAutoImagenes";

export default {
  name: "ModeloAutoFormulario",
  mixins: [baseFormulario],
  components: { TablaEquipamientos, ModeloAutoImagenes },
  data() {
    return {
      entidad: "modeloAuto",
      modeloAuto: {
        marca: null,
        nombre_modelo: "",
        potencia: 0,
        cilindraje: 0,
        precio: 0,
        descuento: 0,
        equipamientos: [],
        modelo_imagenes: [],
        transmision: "Manual",
        tipos_freno: "Disco",
        observaciones: ""
      },
      //listados
      tipoFrenoListado: ["Disco", "Tambor", "ABS"],
      transmisionListado: ["Manual", "Automática"],
      listados: {
        equipamientos: [],
        modelo_imagenes: []
      },
      marcaListado: [],
      // configuraciones
      equipamientoConfiguracion: [{ label: "nombre", field: "nombre" }]
    };
  },
  created() {
    this.peticion({ method: "get", url: "marca" }, ({ data }) => {
      this.marcaListado = data.results;
    });
  },
  computed: {},
  methods: {
    // @Override
    antesGuardar(entidad) {
      entidad.equipamientos = this.listados.equipamientos.map(
        (elem) => elem.id
      );
    },
    // @Override
    despuesGuardar(response) {
      this.listados.modelo_imagenes.forEach((elem) => {
        let data = {
          imagen: elem.imagen,
          modelo_auto: response.data.id
        };
        axios({
          method: "post",
          url: "modelo_auto_imagen/",
          data: this.construirFormData(data),
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((response) => {
          console.log(response);
        });
      });
    },
    // @Override
    despuesObtener(entidad) {
      this.listados.equipamientos = entidad.equipamientos_auto;
      this.listados.modelo_imagenes = entidad.modelo_imagenes;
      this.$refs.modeloImagenes.establecerImagenes(entidad.modelo_imagenes);
    },
    seleccionarEquipamiento(equipamiento) {
      let duplicado = !this.listados.equipamientos.some(
        (equip) => equip.id == equipamiento.id
      );
      if (duplicado) {
        this.listados.equipamientos.push(equipamiento);
      } else {
        this.notificar("El equipamiento ya esta agregado!", "is-warning");
      }
    }
  }
};
</script>
