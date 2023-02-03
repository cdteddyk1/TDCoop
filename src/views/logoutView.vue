<script setup>
const session = inject('session')
const router = inject('router')

onMounted(async () => {

    if (confirm("voulez vous vraiment vous déconnecter ?")) {

    api.delete('members/signout', {
        body: session.data.token
    }).then(response => {
        alert('Vous êtes déconnecté');
        session.data.member = {};
        session.data.token = {};
        router.push('/seConnecter')
    })
    }else{
    router.push('/')
    }
})
</script>
