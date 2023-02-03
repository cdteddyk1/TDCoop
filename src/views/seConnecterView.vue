<script setup>

const router = inject('router')
const session = inject('session')
const user = inject('user')

let memberSign = reactive ({
  email: '',
  password: ''
})

function validationFormulaireSign(){
  console.log(memberSign.email, memberSign.password);
  user.setConnected();

  api.post('members/signin', {
    body : memberSign
  }).then(response =>{
    if(response.message){
      alert(response.message);
    }else{
      session.setSession(response.member, response.token);
      router.push('/')
    }
  })
}


</script>



<template>
  
  <form @submit.prevent="validationFormulaireSign">
    <div class="column is-4 is-offset-4">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" v-model="memberSign.email" type="text" placeholder="Nom complet ou speudonyme">
      </div>
    </div>

    <div class="column is-4 is-offset-4">
      <label class="label">Mot de passe</label>
      <div class="control">
        <input class="input" v-model="memberSign.password" type="text" placeholder="Mot de passe ">
      </div>
    </div>
    <div class="column is-4 is-offset-4">
      <p class="control">
        <button class="button is-success" type="submit">
          Se connecter
        </button>
      </p>
    </div>

  </form>
</template>

