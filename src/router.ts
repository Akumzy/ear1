import { createWebHistory, createRouter } from "vue-router"
import Home from "./pages/Home.vue"
const history = createWebHistory()
const routes = [
  { path: "/", component: Home },
]
const router = createRouter({ history, routes })
export default router
