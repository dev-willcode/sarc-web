<template>
  <b-modal :active.sync="modalActivo" has-modal-card>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"><b>Eliminar</b></p>
      </header>
      <section class="modal-card-body">
        <p>Esta acción no se puede deshacer</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="cancel">Cancelar</button>
        <button class="button is-danger" @click="confirm">Borrar</button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ModalBorrar",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { modalActivo: false };
  },
  watch: {
    isActive(newValue) {
      this.modalActivo = newValue;
    },
    modalActivo(newValue) {
      if (!newValue) {
        this.cancel();
      }
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    }
  }
};
</script>
