<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header"> Crear Cliente </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="processLogInUser">
                            <div class="mb-3">
                                <label for="name" class="form-label">Nombre del cliente</label>
                                <input type="text" class="form-control" v-model="client.name" name="name" id="name"
                                    placeholder="Nombre">
                            </div>
                            <div class="mb-3">
                                <label for="document" class="form-label">Documento</label>
                                <input type="text" class="form-control" v-model="client.document" name="document" id="document"
                                    placeholder="Documento">
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Telefono</label>
                                <input type="text" class="form-control" v-model="client.phone" name="phone" id="phone"
                                    placeholder="Telefono">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" v-model="client.email" name="email" id="email"
                                    placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Direccion</label>
                                <input type="text" class="form-control" v-model="client.address" name="address" id="address"
                                    placeholder="Direccion">
                            </div>
                            <br>
                            <button type="submit" class="btn btn-success">Agregar Cliente</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Clients",
    data: function () {
        return {
            client: {
                name: "",
                document: "",
                phone: "",
                email: "",
                address: ""
            }
        }

    },
    methods: {
        processLogInUser: async function () {
            console.log('jajajja')
            try {
                console.log(this.product)
                await axios.post("https://app-zarcos.herokuapp.com/client/", {
                    name: this.client.name,
                    document: this.client.document,
                    phone: this.client.phone,
                    email: this.client.email,
                    address: this.client.address,
                })
                alert('Se creo con exito')
            } catch (error) {
                alert('Hay error')
            }
            // axios.post(
            //     "https://mision-tic-g67-backend.herokuapp.com/inicioSesion/",
            //     this.product,
            //     { headers: {} }
            // )
            //     .then((result) => {
            //         let dataLogIn = {
            //             username: this.product.username,
            //             token_access: result.data.access,
            //             token_refresh: result.data.refresh
            //         }
            //         this.$emit('completedLogIn', dataLogIn)
            //     })
            //     .catch((error) => {
            //         if (error.response.status == "401")
            //             alert("Credenciales incorrectas")
            //     })
        }
    }
}
</script>

<style>
.logIn_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.container_logIn_user {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logIn_user h2 {
    color: #283747;
}

.logIn_user form {
    width: 70%;

}

.logIn_user input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}

.logIn_user button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
}

.logIn_user button:hover {
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>