<script setup>
import { reactive } from 'vue';

const session = inject('session')
const router = inject('router')



const Home = reactive({
  channels : []
}) 
if (session.isValid()) {
  onMounted(async () => {
    
    api.get(`channels?token=${session.data.token}`).then(response => {
      Home.channels  = response
    })

    console.log("ça marche");


  })
}


</script>

<template>
  <main>
    <div class="box is-four-fifth column is-half is-offset-one-quarter is-four-fifth espace" ></div>
    <section class="section">
    <div class="columns is-centered">
      <h1 class="title">Liste de Conversations</h1>
    </div>
    </section>
    <div class="box is-four-fifth column is-half is-offset-one-quarter is-four-fifth espace" ></div>
    
    <div class="box is-four-fifth column is-half is-offset-one-quarter is-four-fifth" v-for="channel in Home.channels">
      <router-link :to="{ name: 'Conversation', params: { id: channel.id } }">
        <h2 class="title is-3">{{ channel.topic }}</h2>
        <p class="subtitle">{{ channel.label }}</p>
      </router-link>
    </div>
    


  </main>
</template>
<style scoped>
.espace{
    box-shadow: none;
}
</style>