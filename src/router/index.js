import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aufgabe1 from '../views/Pages/Aufgabe1.vue'
import Aufgabe12_2 from '../views/Pages/Aufgabe12_2.vue'
import RwD from '../views/Pages/RwD.vue'
import Formular from '../views/Pages/Formular.vue'
import Kasse from '../views/Pages/Kasse.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aufgabe1',
      name: 'Aufgabe 1',
      component: Aufgabe1,
    },
    {
      path: '/aufgabe12_2',
      name: 'Aufgabe 12.2',
      component: Aufgabe12_2,
    },
    {
      path: '/RwD',
      name: 'RwD',
      component: RwD,
    },
    {
      path: '/Formular',
      name: 'Formular',
      component: Formular,
    },
    {
      path: '/Kasse',
      name: 'Kasse',
      component: Kasse,
    }
  ]
})

export default router
