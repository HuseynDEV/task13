import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoPage from './components/TodoPage'
import AddPage from './components/AddPage'
import DonePage from './components/DonePage'


Vue.use(VueRouter)



export const routes=[
    {path:'/', component:TodoPage},
    {path:'/add', component:AddPage},
    {path:'/done', component:DonePage}
]


export const router= new VueRouter({
    routes,
    mode:'history'
})