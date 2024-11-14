<template>
  <div class="container">
    <h1>Subordinados</h1>
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>idEmpleado</th>
                <th>apellido</th>
                <th>oficio</th>
                <th>salario</th>
                <th>director</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="emp in empleados" :key="emp">
                <td>{{emp.idEmpleado}}</td>
                <td>{{emp.apellido}}</td>
                <td>{{emp.oficio}}</td>
                <td>{{emp.salario}}</td>
                <td>{{emp.director}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import service from './../services/ServiceEmpleados'

    export default {
        name: "SubordinadosComponent",
        data() {
            return {
                empleados: []
            }
        },
        mounted() {
            if (service.token == null) {
                this.$router.push('/login')
            } else {
                service.getSubordinados().then(response => {
                    this.empleados = response;
                })
            }
        }
    }
</script>

<style>

</style>