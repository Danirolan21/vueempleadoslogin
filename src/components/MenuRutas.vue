<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fs-5">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img width="70px" src="https://cdn-icons-png.flaticon.com/512/6823/6823086.png" alt="logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/perfil">Perfil</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/subordinados">Subordinados</router-link>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
    export default {
        name: "MenuRutas"
    }
</script>

<style>

</style>