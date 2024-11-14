import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import PerfilEmpleado from "./components/PerfilEmpleado.vue"
import SubordinadosComponent from "./components/SubordinadosComponent.vue"


const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/perfil", component: PerfilEmpleado
    },
    {
        path: "/subordinados", component: SubordinadosComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;