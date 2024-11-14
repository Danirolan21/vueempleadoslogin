<template>
  <div class="container">
    <h1>Perfil</h1>
    <ul v-if="empleado" class="list-group">
        <li class="list-group-item active">{{empleado.idEmpleado}}</li>
        <li class="list-group-item">{{empleado.apellido}}</li>
        <li class="list-group-item">{{empleado.oficio}}</li>
        <li class="list-group-item">{{empleado.salario}}</li>
        <li class="list-group-item">{{empleado.director}}</li>
    </ul>
  </div>
</template>

<script>
import service from './../services/ServiceEmpleados'

    export default {
        name: "PerfilEmpleado",
        data() {
            return {
                empleado: null
            }
        },
        mounted() {
            if (service.token == null) {
                this.$router.push('/login')
            } else {
                service.getPerfilEmpleado().then(response => {
                    this.empleado = response;
                })
            }
        }
    }
</script>

<style>

</style>