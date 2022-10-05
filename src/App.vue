<template>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <div class="nav navbar-nav">
            <a class="navbar-brand" href="#"><img src="./assets/logo.png" alt="" width="300" height="100"></a>
            <a class="nav-item nav-link" v-on:click="loadHome">Inicio</a>
            <a class="nav-item nav-link" v-on:click="loadClient">Crear Cliente</a>
            <a class="nav-item nav-link" v-on:click="loadProduct">Crear Producto</a>
            <a class="nav-item nav-link" v-on:click="loadService">Crear Servicio</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="main-component">
      <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut">
      </router-view>
    </div>
    <footer>
      <!-- place footer here -->
    </footer>
  </body>
</template>
<script>
export default {
  name: 'App',
  methods: {
    loadHome: function () {
      this.$router.push({ name: 'home' })
    },
    loadClient: function () {
      this.$router.push({ name: 'client' })
    },
    loadProduct: function () {
      this.$router.push({ name: 'product' })
    },
    loadService: function () {
      this.$router.push({ name: 'service' })
    },
  },
  created: function () {
    this.$router.push({ name: 'home' })
  }
}
</script>
<style>

</style>