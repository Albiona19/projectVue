<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" style="margin-bottom:60px;">
      <img src="../assets/icon.png" alt="Fortesa" style="width:50" height="50">
      <b-navbar-brand href="#">JobPortal</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="nav-link" to="/" >
              <a>Home</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/about" >
              <a>About</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="nav-link" to="/contact" >
              <a>Contact us</a>
            </router-link>
          </b-nav-item>
          <!-- <b-nav-item>
            <router-link class="nav-link" to="/user" >
              <a>User</a>
            </router-link>
          </b-nav-item>
           <b-nav-item>
            <router-link class="nav-link" to="/job" >
              <a>Jobs</a>
            </router-link>
          </b-nav-item> -->
          <b-nav-item>
            <router-link class="nav-link" to="/addjobs" >
              <a>Add Jobs</a>
            </router-link>
          </b-nav-item>
            <b-nav-item-dropdown text="List" style="margin-top:8px">
              <b-dropdown-item id="mode" to="/user">User</b-dropdown-item>
              <b-dropdown-item id="mode" to="/job">Job</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="user.loggedIn">
            <b-nav-item>
              <a class="nav-link">{{ user.data.displayName }}</a>
            </b-nav-item>
            <b-nav-item>
              <a class="nav-link" @click.prevent="signOut">Log out</a>
            </b-nav-item>
          </template>
          <template v-else>
            <b-nav-item >
              <router-link class="nav-link" to="login">Login</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="register">Register</router-link>
            </b-nav-item>
          </template>
          <!-- <b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0" @click="darkThemeSwitch">DarkMode</b-button>
          </b-nav-form> -->
          <b-nav-item-dropdown text="Settings" right style="margin-top:8px">
            <b-dropdown-item id="mode" @click="darkThemeSwitch">DarkMode</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import themeChanger from "../theme.js";
import { mapGetters } from 'vuex' // per shkak se nuk e din ka pe na vjen qajo loggedIn
import firebase from 'firebase'
export default {
  data(){
    return{
      themeChanger: null,
    }
  },
  computed:{
    ...mapGetters({
      user:'user'
    }),
  },
  methods:{
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    },
    signOut(){
      firebase
      .auth()
      .signOut()
      .then(()=>{
        this.$router.replace({
          name: 'home'
        });
      });
    } 
  },created() {
    this.themeChanger = new themeChanger();
  },

  
}

</script>