<template >
  <div id="app">
    <v-app id="inspire" >
      <v-app id="inspire">
        <v-main>
          <v-container
            class="fill-height"
            fluid
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                cols="12"
                sm="8"
                md="4"
              >
                <v-card class="elevation-12">
                  <v-toolbar
                    color="primary"
                    dark
                    flat
                  >
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          :href="source"
                          icon
                          large
                          target="_blank"
                          v-on="on"
                        >
                          
                        </v-btn>
                      </template>
                      <span>Source</span>
                    </v-tooltip>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        label="Login"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="login"
                      ></v-text-field>
    
                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="password"
                      ></v-text-field>

                      <v-card-actions>
  
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="submit">Login</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                  
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
</div>
  
</template>

<script>
import api from "./api"

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    login: '',
    password: ''
  }),

  methods: {
    submit() {
      api.post("api/auth/login", {
        login: this.login, 
        pass: this.password
      })
      // .then(res => {
      //   //
      // }).catch(err => {
      //   //
      // })
    }
  }
};
</script>
