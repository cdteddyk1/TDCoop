<script setup>
import { computed, provide, onMounted, reactive, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { useSessionStore } from '@/stores/sessions'
import { useRouter } from "vue-router"
import { useMembresStore } from '@/stores/membres'
import mitt from 'mitt'

const state = reactive({ appReady: false})

provide('user', useUserStore())


provide('session', useSessionStore())
const session = useSessionStore();

provide('router', useRouter())

const membresStore = useMembresStore();


const bus = mitt();
provide('bus', bus)

onMounted(() => {
  demarrer();
});

function demarrer() {
  if (session.isValid()) {
    membresStore.chargerMembres().then(() => {
      state.appReady = true;

    });
  } else {
    state.appReady = true;
  }
}


</script>

<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <div class="buttons">
        <a class="button is-light">
          <RouterLink to="/">HOME</RouterLink>
        </a>
        <a class="button is-light">
          <RouterLink to="/Membres">Membres</RouterLink>
        </a>

        <a class="button is-primary">
          <strong>
            <RouterLink to="/CreerConversation">Créer une conversation</RouterLink>
        </strong>
          
        </a>
      </div>
    </div>


    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>
              <RouterLink to="/creeCompte">creeCompte</RouterLink>
            </strong>
          </a>
          <a class="button is-light">
            <RouterLink to="/seConnecter">se Connecter</RouterLink>
          </a>
          <a class="button is-light">
            <RouterLink to="/logout">deconnection</RouterLink>
          </a>
        </div>
      </div>



    </div>
  </nav>


  <RouterView />


</template>

<style scoped>

</style>
