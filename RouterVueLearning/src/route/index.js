// Define our routing rules //

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CarView from "@/views/CarView.vue";
import Contactview from "@/views/Contactview.vue";
// import Tview from "@/views/404view.vue"
import Tview from "@/views/404view.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
           path:"/cars/:id",
           name:"car",
           component: CarView ,
           children: [
            {
                path: "contact",
                component: Contactview
            }
           ]
        },
        {
            path:"/:catchall(.*)*",
            name: "not found",
            component: Tview,
        }
    ]
})

export default router