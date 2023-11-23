<template>
  <q-dialog v-model="show">
    <q-card>
      <q-card-section>
        <div class="text-h6">Cadastro</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="submit">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input outlined v-model="person.name" label="Nome" filled />
            </div>
            <div class="col-12 col-md-6">
              <q-input outlined v-model="person.email" label="E-mail" filled />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                outlined
                icon="done"
                v-model="person.phone"
                label="Celular"
                filled
              />
            </div>

            <div class="col-6">
              <q-btn round color="red-5" @click="close" icon="close" />
            </div>
            <div class="col-6 text-right">
              <q-btn label="Salvar" icon="done" type="submit" color="primary" />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  emits: ['submit'],
  setup(props, context) {
    const show = ref(false);
    const person = ref({
      name: 'Marcelo',
      email: 'usbert@gmail.com',
      phone: null,
    });

    function open() {
      show.value = true;
    }

    function close() {
      show.value = false;
    }

    function submit() {
      context.emit('submit', person.value);
    }

    context.expose({ open, close });

    return { show, person, open, close, submit };
  },
});
</script>
