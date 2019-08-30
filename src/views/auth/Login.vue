<template>
  <v-app id="inspire">
    <v-content>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs12 sm8 md4>
            <!-- <img src="@/assets/logo_spendash.png" style="display:block; width:75%; margin:0 auto 30px;"/> -->
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="email" name="login" label="Email" :rules="emailRules" type="text"></v-text-field>
              <v-text-field v-model="password" id="password" name="password" label="Mot de passe" :rules="passwordRules" type="password"></v-text-field>
              <v-btn class="gradientBack" color="primary" :disabled="!valid" @click="submit" block>
                Se connecter
              </v-btn>
            </v-form>
            <v-btn to="/signup" block flat>S'inscrire</v-btn>
          </v-flex>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      valid: true,
      email: 't@t.fr',
      password: 'azerty',
      emailRules: [
        v => !!v || 'E-mail requis',
        v => /.+@.+/.test(v) || 'E-mail non valide'
      ],
      passwordRules: [
        v => !!v || 'Mot de passe requis'
        // v => /.+@.+/.test(v) || 'E-mail non valide'
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit () {
      if (this.$refs.form.validate()) {
        this.login({ email: this.email, password: this.password })
      }
    }
  }
}
</script>

<style>
.gradientBack{
  color:white!important;
  background: -moz-linear-gradient(45deg, rgba(221,91,44,1) 0%, rgba(249,162,47,1) 100%);
  background: -webkit-linear-gradient(45deg, rgba(221,91,44,1) 0%,rgba(249,162,47,1) 100%);
  background: linear-gradient(45deg, rgba(221,91,44,1) 0%,rgba(249,162,47,1) 100%);
}

.v-input input::placeholder {
  color:red !important;
}
</style>
