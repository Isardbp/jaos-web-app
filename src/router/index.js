import Vue from 'vue'
import Router from 'vue-router'
import Startups from '@/components/Startups/Startups'
import BienesRaices from '@/components/BienesRaices/BienesRaices'
import CreacionExpansionEmpresas from '@/components/Creacion_Expansion_Empresas/CreacionExpansionEmpresas'
import NuestrosProyectos from '@/components/NuestrosProyectos/NuestrosProyectos'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'NuestrosProyectose',
            component: NuestrosProyectos
        },
        {
            path: '/startups',
            name: 'Startups',
            component: Startups
        },
        {
            path: '/bieneRaices',
            name: 'BienesRaices',
            component: BienesRaices
        },
        {
            path: '/creacionExpansionEmpresas',
            name: 'CreacionExpansionEmpresas',
            component: CreacionExpansionEmpresas
        },
        {
            path: '/nuestrosProyectos',
            name: 'NuestrosProyectose',
            component: NuestrosProyectos
        }
    ],
    mode: 'history'
})