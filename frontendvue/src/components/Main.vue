<template>
    <div class="main">
<div class="container">
    <div class="column">
        <Card class="card">
            <CardBody class="card-body">
                <form @submit.prevent="handleSubmit()">
        <label>Meu Email : </label>
        <input type="email" required v-model="send.user" class="form-control" placeholder="Digite o seu email"/>
        <br/>
        <label>Senha :</label>
        <input type="password" required v-model="send.pass" class="form-control" placeholder="Digite a sua senha"/>
        <br/>
        <label>Assunto :</label>
        <input type="text" required v-model="send.subject" class="form-control" placeholder="Digite o assunto"/>
        <br/>
        <label>Texto :</label>
        <textarea id="textarea" required v-model="send.text" class="form-control" placeholder="Digite o texto"/>
        <br/>
        <label>Email do destinatário :</label>
        <input type="email" required v-model="send.to" class="form-control" placeholder="Email do destinatário"/>
        <br/>
        <button type="submit" class="btn btn-primary">Enviar</button>
      
                </form>
                <br/>

                  <div v-if="loading == true" class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </CardBody>
        </Card>
    </div>
</div>
    </div>
</template>

<script>
import {Card, CardBody} from './styled'

import Axios from 'axios'

import Swal from 'sweetalert2'

export default {

data() {
    return {
        send: {
        to: '',
        subject: '',
        text: '',
        user: '',
        pass: '',
        },
        loading: false
    }
},

methods: {
    async handleSubmit() {
        try {

            this.loading = true
        let response = await Axios.post(`http://localhost:7677/send`,this.send)
        
        console.log(response)

        this.send = ''
        this.loading = false

        Swal.fire({
        title: 'Sucesso!',
        text: 'Email enviado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
        })


        }
        catch(err) {
            this.loading = false

        console.log(err)

        Swal.fire({
        title: 'Erro!',
        text: `${err.response.data.errBackend}`,
        icon: 'error',
        confirmButtonText: 'Ok'
        })

        }

    }
},

    name: 'Main',
    components: {
        Card,
        CardBody
    }
}
</script>

<style scoped>
#textarea {
    resize: none;
}
</style>