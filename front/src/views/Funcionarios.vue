<template>
<div>


  <div class="campos">
    <h4>CADASTRAR FUNCIONARIO</h4>

           <p> Id: <input type="text" v-model="id" /><br /></p> 
           <p> Nome: <input type="text" v-model="nome" /><br /></p> 
           <p> Cargo: <input type="text" v-model="cargo" /><br /></p>
           <p> Data de Nascimento: <input type="text" v-mask="'##/##/####'" v-model="dt_nascimento" /><br /></p>
           <p> Data de Entrada: <input type="text" v-mask="'##/##/####'" v-model="dt_entrada" /><br /><br></p>
   </div>

  <div class="butaos">
    <button @click="PostFunc">Post Funcionário</button><br /><br />
    <button @click="PutFunc">Put Funcionário</button><br /><br />
    <button @click="DeleteFunc">Delete Funcionário</button><br /><br /> 
  </div>


</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        id: 0,
        nome: "",
        cargo: "",
        dt_nascimento: "",
        dt_entrada: "",
        funcionarios: [],
        baseURI: "http://localhost:3000" 
    }
  },
  
  methods: {
    PostFunc(){
      let obj ={
        nome: this.nome,
        cargo: this.cargo,
        dt_nascimento: this.dt_nascimento,
        dt_entrada: this.dt_entrada,
      };

      axios.post(this.baseURI, obj).then((resul) =>{
        this.funcionarios = resul.data
      })
    },

    PutFunc(){
      let obj ={
        nome: this.nome,
        cargo: this.cargo,
        dt_nascimento: this.dt_nascimento,
        dt_entrada: this.dt_entrada,
      };

      axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
        console.log(result)
      })
    },

    DeleteFunc(){
      axios.delete(this.baseURI +"/"+this.id,).then((result) =>{})
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