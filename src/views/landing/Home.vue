<template>
  <div>
    <section id="hero" class="hero is-link is-fullheight-with-navbar">
      <Header />
      <div class="hero-body">
        <div class="container">
          <p class="title has-text-white is-1">
            El auto de tus sueños
          </p>
          <p class="subtitle has-text-white is-3">
            a tu alcance.
          </p>
          <div class="buttons">
            <b-button class="b-button is-primary ">Ver catalogo</b-button>
            <b-button class="b-button is-primary is-inverted is-outlined ">
              Sobre nosotros
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <Vehiculos-landing />
    <section id="section-1" class="section">
      <div class="container">
        <div class="column">
          <h4 class="subtitle is-4 has-text-centered has-text-white">
            Concesionarios & talleres mecánicos
          </h4>
          <h3 class="title is-2 has-text-centered has-text-white">
            Hay un auto para cada personalidad, Ya encontraste el tuyo?
          </h3>
          <p class="has-text-centered has-text-white">
            Nuestro selecto equipo de ventas esta esperando por ti, para elegir
            el modelo de tus sueños, que se adapte a tus necesidades y puedas
            disfrutar de todos los beneficios que brindamos.
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h4 class="subtitle is-4 has-text-centered">
          Nuevas ofertas todos los dias, aprovecha nuestras promociones!
        </h4>
        <br />
        <div class="columns">
          <div class="column card">
            <div class="card-image">
              <figure class="image">
                <img src="@/assets/images/announcement-1.jpg" alt="anuncio 1" />
              </figure>
            </div>
          </div>
          <div class="column card">
            <div class="card-image">
              <figure class="image">
                <img src="@/assets/images/announcement-2.jpg" alt="anuncio 1" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="column">
          <h4 class="subtitle is-4">
            Nuestros servicios
          </h4>
          <h3 class="title">
            Servicio técnico de calidad inmejorable
          </h3>
          <br />
          <div class="columns">
            <p class="column">
              Conozca al equipo calificado de mecánicos con más de 5 años de
              experiencia inmaculada en la industria de reparación de
              automóviles! Utilizamos solo piezas de la mejor calidad y estamos
              empeñados en hacer que sus viajes por carretera sean seguros y
              cómodos.
            </p>
            <ul class="column">
              <li>
                > Servicio de revision tecnica
              </li>
              <li>
                > Venta de repuestos originales
              </li>
              <li>
                >Reparación y mantenimiento general de automóviles
              </li>
              <li>
                > Talleres equipados con tecnologia a la vanguardia
              </li>
            </ul>
          </div>
          <div class="buttons">
            <b-button class="b-button is-primary ">
              Reservar una cita
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Proyecto <strong>SARC</strong> creado con ❤ <br />
          codigo licenciado bajo
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/landing/Header";
import VehiculosLanding from "@/components/landing/VehiculosLanding";

export default {
  name: "Home",
  components: {
    Header,
    VehiculosLanding
  }
};
</script>

<style scoped>
#hero {
  background-image: url("./.././../assets/images/hero-background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
#section-1 {
  background-image: url("./.././../assets/images/hero-section-1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
#section-1 > div > div > p {
  padding-top: 15rem;
}
</style>
