import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "@/views/QuizesView.vue";
import QuizviewVue from "@/views/Quizview.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizviewVue
        }
    ]
})

export default router