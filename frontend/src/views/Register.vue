<template>
  <div class="home">
    <div id="app">
  <v-app id="inspire">
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
                  <v-toolbar-title>Sign Up</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom >
                    <template v-slot:activator="{ on }" >
                      <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                      >
                      </v-btn> 
                    </template>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  
                </v-card-text>
                <v-card-actions>
                  <v-form>
                  <v-text-field
                        label="Name"
                        name="name"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="name"
                      ></v-text-field>

                      <v-text-field
                        label="Login"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="login"
                      ></v-text-field>

                      <v-text-field
                        label="Pass"
                        name="pass"
                        prepend-icon="mdi-account"
                        type="password"
                        v-model="pass"
                      ></v-text-field>

                      <v-text-field
                        label="Pass2"
                        name="pass2"
                        prepend-icon="mdi-account"
                        type="password"
                        v-model="pass2"
                      ></v-text-field>
    
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="submit">Send</v-btn>
                  </v-form>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-app>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import api from '../api'

export default {
  name: 'Register',
  components: {
    
  },

  data: () => ({
    name: '',
    login: '',
    pass: '',
    pass2: ''
  }),

  methods: {
    submit() {
      const { name, login, pass, pass2 } = this;

      api.post('/api/auth/register', {login, pass, pass2, name})
      .then(() => {
        alert('Usuario Registrado com Sucesso!');

      })
      .catch(() => {
        alert('Fail')
      })
    }
  }
}
</script>
