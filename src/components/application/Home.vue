<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Inicio
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="account-multiple"
          :number="512"
          label="Clients"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="cart-outline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="chart-timeline-variant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </tiles>

      <card-component title="Clients" class="has-table has-mobile-sort-spaced">
        <clients-table-sample
          :data-url="`${$router.options.base}data-sources/clients.json`"
        />
      </card-component>
    </section>
  </div>
</template>

<script>
import TitleBar from "@/components/application/TitleBar";
import HeroBar from "@/components/application/HeroBar";
import Tiles from "@/components/application/Tiles";
import CardWidget from "@/components/application/CardWidget";
import CardComponent from "@/components/application/CardComponent";
import ClientsTableSample from "@/components/application/ClientsTableSample";
export default {
  name: "Home",
  components: {
    ClientsTableSample,
    CardComponent,
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar
  },
  data() {
    return {};
  },
  computed: {
    titleStack() {
      return ["Admin", "Inicio"];
    }
  },
  mounted() {
    this.$buefy.snackbar.open({
      message: "Welcome back",
      queue: false
    });
  }
};
</script>
