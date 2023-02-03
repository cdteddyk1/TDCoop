<script setup>

const router = inject('router')
const session = inject('session')

const user = inject('user')

if (session.isValid()){}

let channel = reactive({
    label: '',
    topic: '',
    token: `${session.data.token}`,
    
})



function validationFormulaireChannel() {

    api.post('channels', {
    body: channel
    }).then(response => {

        if (response.message) {
            alert(response.message);
        } else {
            console.log(response.id)
            
        }
    })
    
}



</script>



<template>

    <form @submit.prevent="validationFormulaireChannel">
        <div class="column is-4 is-offset-4">
            <label class="label">Titre</label>
            <div class="control">
                <input class="input" v-model="channel.label" type="text" placeholder="Nom complet ou speudonyme">
            </div>
        </div>

        <div class="column is-4 is-offset-4">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" v-model="channel.topic" placeholder="Textarea"></textarea>
            </div>
        </div>


        <div class="column is-4 is-offset-4">
            <p class="control">
                <button class="button is-success" type="submit">
                    Créer une conversation
                </button>
            </p>
        </div>

    </form>
</template>

