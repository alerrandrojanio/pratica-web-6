<template>
  <div>
    Usuário: <input type="text" v-model="login"> <br/>
    Senha:  <input type="password" v-model="password"> <br/>
    <button type="submit" @click="logar">Login</button>
  </div>                
</template>
<script>
import axios from "axios";

export default {
   
data() {
    return {
            login: "",
            password: "",
            baseURI:"http://localhost:3000/users/login"    
    }
},
    methods:{
        logar: function() {
      axios
        .post(
          this.baseLogin,
          {
            login: this.login,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((result) => {
          let userId = this.getCookie("userId");
          if (userId) {
            localStorage.setItem("user", JSON.stringify(result.data));
          }
          this.$router.go();
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
  },

    created: function(){
        this.$nextTick()
    }
}
</script>

<style>

</style>