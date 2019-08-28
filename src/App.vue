<template>
  <v-app>
    <v-app-bar class="d-none d-sm-block" clipped-right dense flat collapse-on-scroll app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetifyd</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer v-model="drawer" class="pa-2" temporary right app>
      <div class="vfb-center">
        <span>VUETIFYD</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </div>
      <v-list nav class="py-0">
        <v-list-item v-for="item in items" :key="item.title" active-class="vfb-active" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-btn block @click.stop="drawer = !drawer"><v-icon>mdi-close</v-icon></v-btn>
      </template>
    </v-navigation-drawer>

    <v-bottom-navigation v-model="bottomNav" grow>
      <v-btn value="home">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn @click.stop="drawer = !drawer" value="menu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      bottomNav: 'recent',
      items: [
        { title: 'Login', icon: 'mdi-login', to: '/login' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.vfb-center {
  display: table;
  margin: 0 auto;
}
.vfb-active::before {
  background-color: #fff;
}
</style>
