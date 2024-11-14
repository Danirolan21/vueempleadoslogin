import Global from "@/Global"
import axios from "axios";

class ServiceEmpleados {

    constructor() {
        this.token = null;
    }

    getToken(user) {
        return new Promise((resolve) => {
            let request = "Auth/Login"
            let url = Global.urlApiEmpleados + request;
            axios.post(url, user).then(response => {
                this.token = response.data.response;
                resolve("Usuario logueado con exito... - El token es: " + response.data.response);
            })
        })
    }

    //SE NECESITA TOKEN
    getEmpleados() {
        return new Promise((resolve) => {
            let empleados = [];
            let request = "api/Empleados";
            let url = Global.urlApiEmpleados + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(response => {
                empleados = response.data;
                resolve(empleados);
            })
        })
    }

    //SE NECESITA TOKEN
    getPerfilEmpleado() {
        return new Promise((resolve) => {
            let empleado = null;
            let request = "/api/Empleados/PerfilEmpleado";
            let url = Global.urlApiEmpleados + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(response => {
                empleado = response.data;
                resolve(empleado);
            })
        })
    }

    //SE NECESITA TOKEN
    getSubordinados() {
        return new Promise((resolve) => {
            let empleados = [];
            let request = "/api/Empleados/Subordinados";
            let url = Global.urlApiEmpleados + request;
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(response => {
                empleados = response.data;
                resolve(empleados);
            })
        })
    }
}

export default new ServiceEmpleados;