<template>
  <div class="container">
    <h1>Login Component</h1>
    <form v-on:submit.prevent="logIn()" class="">
        <label class="form-label">Username: </label>
        <input type="text" class="form-control" v-model="user.userName"/>
        <label class="form-label">Password: </label>
        <input type="text" class="form-control" v-model="user.password"/>
        <button class="btn btn-success mt-3">
            Log In
        </button>
    </form>
  </div>
</template>

<script>
import service from './../services/ServiceEmpleados'

    export default {
        name: "LoginComponent",
        data() {
            return {
                user: {
                    userName: "",
                    password: ""
                }
            }
        },
        methods: {
            logIn() {
                service.getToken(this.user).then(result => {
                    console.log(result);
                    this.$router.push('/');
                    console.log(service.token);
                    
                })
            }
        }
    }
</script>

<style>

</style>