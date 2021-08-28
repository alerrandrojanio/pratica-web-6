<template>
<div>


  <div class="campos">
    <h4>Criar Post</h4>

           <p> Id: <input type="text" v-model="id" /><br /></p> 
           <p> Corpo: <input type="text" v-model="corpo" /><br /></p> 
           <p> Data: <input type="text" v-model="data" /><br /></p>
           <p> Hora: <input type="text" v-model="hora" /><br /></p>
           
   </div>

  <div class="butaos">
    <button @click="post">Publicar</button><br /><br />
    <button @click="put">Editar</button><br /><br />
    <button @click="delet">Deletar</button><br /><br /> 
  </div>


</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: 0,
      corpo: "",
      data: "",
      hora:"",
      posts: [],
      baseURI: "http://localhost:3000/posts"
    }
  },
  
  methods: {
    post(){
      let post ={
        corpo: this.corpo,
        data: this.data,
        hora: this.hora
      };

      axios.post(this.baseURI, post).then((resul) =>{
        this.posts = resul.data
      })
    },

    put(){
      let post ={
        corpo: this.corpo,
        data: this.data,
        hora: this.hora
      };

      axios.put(this.baseURI + "/" + this.id, post).then((result) =>{
        console.log(result)
      })
    },

    delet(){
      axios.delete(this.baseURI + "/" + this.id).then((result) =>{})
    }
  },
}
</script>

<style>

.Campos {
    margin: auto;
    font-weight: 600;
    width: 40%;
        
}
.butaos{
    display: flex;
    width: 70%;
    justify-content: center;
    margin: 10px auto;
  
}
.butaos button{
    background-color: rgb(23, 91, 192);
    color: white;
    margin: 0 20px;
    cursor: pointer;
}
.infor {
    display: flex;
}
.infor p {
    margin: 10px 10px;
    
}


</style>