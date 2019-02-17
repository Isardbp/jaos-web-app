<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Jaos</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          style="cursor: pointer"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          small
          >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-menu 
       offset-y
        >
          <v-btn
          flat
          slot="activator"
          >
            <v-icon>reorder</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
            v-for="(item, i) in signMenuItems"
            :key="i"
            :to="item.link"
            style="cursor: pointer"
            active-class="highlighted"
            >
              <v-icon left> {{ item.icon }} </v-icon>
              <v-list-tile-title> {{ item.title }} </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
          { icon: 'work', title: 'Nuestros Proyectos', link: '/nuestrosProyectos' },
          { icon: 'attach_money', title: 'Bienes Raices', link: '/bieneRaices' },
          { icon: 'computer', title: 'Startups', link: '/startups' },
          { icon: 'business', title: 'Creacion / Expansion Empresa', link: '/creacionExpansionEmpresas' },
          //{ icon: 'person', title: 'Profile', link: '/profile' },
          
        ],
      signMenuItems: [
          { icon: 'face', title: 'Sign up', link: '/signUp' },
          { icon: 'lock_open', title: 'Sign in', link: '/signIn' }
      ]
    }
  }
}
</script>
