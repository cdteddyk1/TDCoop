<script setup>
import { reactive } from 'vue';

const session = inject('session')
const router = inject('router')



const listeMembre = reactive({
  membres : []
}) 
if (session.isValid()) {
  onMounted(async () => {
    
    api.get(`members?token=${session.data.token}`).then(response => {
      listeMembre.membres = response
    })

    console.log(listeMembre);


  })
}


</script>

<template>
  <main>
    <div class="box is-four-fifth column is-half is-offset-one-quarter is-four-fifth espace" ></div>
    <section class="section">
    <div class="columns is-centered">
      <h1 class="title">Liste des membres </h1>
    </div>
    </section>
    <div class="box is-four-fifth column is-half is-offset-one-quarter is-four-fifth espace" >

    </div>
    <div class="box is-four-fifth column is-half is-offset-one-quarter is-four-fifth" v-for="membre in listeMembre.membres">
        <h2 class="title is-3">{{ membre.fullname }}</h2>
        <p class="subtitle">{{ membre.email }}</p>
    </div>

  </main>
</template>

<style scoped>
.espace{
    box-shadow: none;
}
</style>