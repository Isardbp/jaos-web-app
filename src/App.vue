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
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <menu>
  </menu>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
          { icon: 'person', title: 'Sturtup', link: '/profile' },
          { icon: 'person', title: 'Proyectos Propios', link: '/signup' },
          { icon: 'person', title: 'Bines Raices', link: '/signin' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]
    }
  }
}
</script>
