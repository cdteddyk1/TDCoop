<script setup>

const router = inject('router')


let member = reactive({
  fullname: '',
  email: '',
  password: ''
})

function validationFormulaire() {


  api.post('members', {
    body: member
  }).then(response => {

    if (response.message) {
      alert(response.message);
    } else {
      console.log(response)

      if (confirm("votre compte a été crée. Voulez-vous vous connecter")) {
        router.push('/seConnecter')
      }
    }
  })
}


</script>



<template>

  <form @submit.prevent="validationFormulaire">
    <div class="column is-4 is-offset-4">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" v-model="member.fullname" type="text" placeholder="Nom complet ou speudonyme">
      </div>
    </div>

    <div class="column is-4 is-offset-4">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" v-model="member.email" type="text" placeholder="Email" required>
      </div>
    </div>

    <div class="column is-4 is-offset-4">
      <label class="label">Mot de passe</label>
      <div class="control">
        <input input class="input" v-model="member.password" type="password" placeholder="mot de passe">
      </div>
    </div>
    <div class="column is-4 is-offset-4">
      <p class="control">
        <button class="button is-success">
          Créer votre compte
        </button>
      </p>
    </div>
  </form>

</template>