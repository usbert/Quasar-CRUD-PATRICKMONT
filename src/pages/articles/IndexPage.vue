<template>
  <q-page class="padding">

    <div class="q-pa-md">

      <q-table
        title="Artigos"
        :rows="posts"
        :columns="columns"
        row-key="name"
      >
      <!-- VERIFICAR ESSE LOAD NO TABLE loading="loading" -->
      <template v-slot:body-cell-actions="props">
          <q-td :props="props">
              <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePost(props.row.id)"></q-btn>
          </q-td>
      </template>
    </q-table>


    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

// import { api } from 'boot/axios'
import postsServices from 'src/services/posts'
import  { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',

  setup() {

    const posts = ref();
    const { list, remove } = postsServices()
    const columns = [
      { name: 'id', field: 'id', label: 'ID', sortable: true, align: 'left', },
      { name: 'title', field: 'title', label: 'Title', sortable: true, align: 'left', },
      { name: 'completed', field: 'completed', label: 'Completed', sortable: true, align: 'left', },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'center', },
    ]
    const $q = useQuasar()

    onMounted(() => {
      getPosts();
    });

    const getPosts = async () => {
      try {
        // const { data } = await api.get('https://jsonplaceholder.typicode.com/todos/');
        const data = await list()
        posts.value = data;
        console.log(data);

      } catch (error) {
        console.log('erro aqui');
      }
    };


    const handleDeletePost = async (id) => {
      try {

        $q.dialog({
            title: 'Excluir',
            message: 'Tem certeza que deseja excluir?',
            cancel: true,
            persistent: true
        }).onOk(async () => {
            await remove(id)
            $q.notify( { message: 'Excluído com sucesso!', icon: 'check', color: 'positive' })
            await getPosts()
        })

      } catch (error) {
        $q.notify( { message: 'Erro ao apagar!', icon: 'times', color: 'negative' })

      }
    }


    return {
        posts,
        columns,
        handleDeletePost,

      };
  },
});
</script>
