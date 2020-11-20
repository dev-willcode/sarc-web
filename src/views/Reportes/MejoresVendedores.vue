<template>
  <div>
    <hero-bar>
      Reportes de mejores vendedores
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Filtros del reporte"
      >
        <div class="p-5">
          <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Fecha inicio consulta"
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-datepicker
                    icon="calendar-today"
                    locale="es-ES"
                    editable
                    v-model="fecha_inicio"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
            <br />
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Fecha fin de consulta"
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-datepicker
                    icon="calendar-today"
                    locale="es-ES"
                    editable
                    v-model="fecha_fin"
                  >
                  </b-datepicker>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
            <br />
            <validation-provider rules="required" v-slot="{ errors, valid }">
              <b-field
                label="Cantidad de resultados"
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <b-select
                    v-model="reporte.numero_resultados"
                    placeholder="Elija el horario"
                    expanded
                  >
                    <option
                      v-for="numero in resultadosListado"
                      :value="numero"
                      :key="numero"
                    >
                      {{ numero }}
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
                @click="handleSubmit(reportar)"
                >Generar reporte</b-button
              >
            </section>
          </ValidationObserver>
        </div>
      </card-component>
    </section>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { imprimirDocumento } from "@/views/shared/print";
import baseComponente from "@/components/shared/bases/baseComponente";
import HeroBar from "@/components/application/HeroBar";
import CardComponent from "@/components/application/CardComponent";

export default {
  name: "MejoresVendedores",
  props: {},
  mixins: [baseComponente],
  components: {
    HeroBar,
    CardComponent
  },
  data() {
    return {
      cargando: false,
      reporte: {
        numero_resultados: 5,
        fecha_inicio: dayjs().format("YYYY-MM-DD"),
        fecha_fin: dayjs().format("YYYY-MM-DD")
      },
      // listados
      resultadosListado: [5, 10, 15, 20, 50, 100]
    };
  },
  computed: {
    fecha_inicio: {
      get() {
        return dayjs(this.reporte.fecha_inicio || new Date()).toDate();
      },
      set(value) {
        this.reporte.fecha_inicio = dayjs(value).format("YYYY-MM-DD");
      }
    },
    fecha_fin: {
      get() {
        return dayjs(this.reporte.fecha_fin || new Date()).toDate();
      },
      set(value) {
        this.reporte.fecha_fin = dayjs(value).format("YYYY-MM-DD");
      }
    }
  },
  methods: {
    reportar() {
      imprimirDocumento("mejores_vendedores/", this.reporte);
    }
  }
};
</script>
