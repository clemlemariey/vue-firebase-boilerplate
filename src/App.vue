<template>
  <v-app>
    <v-app-bar clipped-right dense flat collapse-on-scroll app>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetifyd</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" right app>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click.stop="drawer = !drawer"><v-icon>mdi-close</v-icon></v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <CustomDrawer :drawer="drawer" />

    <v-bottom-navigation v-model="bottomNav" grow>
      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn @click.stop="drawer = !drawer" value="menu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
import CustomDrawer from './components/CustomDrawer'
export default {
  name: 'App',
  components: {
    CustomDrawer
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>
