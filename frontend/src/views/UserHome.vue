<template >
  
    <div id="UserHome">
  <v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link>

            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >

            <v-col class="shrink">
              <v-simple-table>

                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Title</th>
                        <th class="text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="post in posts" :key="post.date">
                        <td>{{ post.date }}</td>
                        <td>{{ post.message }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>

            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</div>
  
</template>

<script>
import api from "../api"

export default {
  name: 'UserHome',

  components: {
    
  },

  data: () =>  {
    return {posts : []}
  },

  mounted() {
    api.get('api/auth/feed')
    .then(res => {
      this.posts = res.data;
      console.log(this.posts)
    })

    
  }
};
</script>
