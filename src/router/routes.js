import TasksPage from "@/pages/TasksPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import NotFourndErrorPage from "@/pages/errors/NotFourndErrorPage.vue";

const routes = [
    {
        path: "/tasks",
        component: TasksPage,
        name: "tasks",
        meta: {
            auth: true
        }
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login",
        meta: {
            guest: true
        }
    },
    {
        path: "/register",
        component: RegisterPage,
        name: "register",
        meta: {
            guest: true
        }
    },
    {
        path: "/summary",
        component: SummaryPage,
        name: "summary",
    },
    {
        path: "/:notFound(.*)",
        name: "error.404",
        component: NotFourndErrorPage
    }
]

export default routes