<template>
  <div>
    Usuário: <input type="text" v-model="usuario"> <br/>
    Senha:  <input type="password" v-model="senha"> <br/>
    <button type="submit" @click="login">Login</button>
  </div>                
</template>
<script>
import axios from "axios";

export default {
   
data() {
    return {
            usuario: "",
            senha: "",
            usuarios: [],
            baseURI:"http://localhost:3000/usuarios"   
    }
},
    methods:{

        methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.usuarios = result.data
                })
        },

        login() {
            for(var i = 0; i < this.usuarios.length; i++){
                if(this.usuario == this.usuarios[i].usuario){
                    if(this.senha == this.usuarios[i].senha){
                        this.$router.replace('/postar'); continue;
                    } else {
                        alert("SENHA INCORRETA!");
                    }
                }  
            }
            
            i = 0; 
            while(i < this.usuarios.length){
                if(this.usuario != this.usuarios[i].usuario){
                    i++;
                }
                else{
                    break;
                }
                if(i == this.usuarios.length){
                    alert("USUARIO INEXISTENTE!");
                }
            }
        }
    },
    
    created: function(){
        this.$nextTick(this.getAll)
    }
        
  },

   
}
</script>

<style>

</style>