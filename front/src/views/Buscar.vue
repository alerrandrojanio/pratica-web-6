<template>
 <div class="campos">
        
        <div>
          <h4>Mostrar todos os Funcionários</h4>
            <button @click="TodosFunc">Todos os Funcionários</button><br /><br />
                <ul>
                    <li v-for="funcionario in todosFuncionarios " :key="funcionario.id">
                        <div class="infor">
                            <p> Id: {{ funcionario.id }}</p>
                            <p>Nome: {{ funcionario.nome }}</p>
                            <p>Cargo: {{ funcionario.cargo }}</p>
                            <p>Data de Nascimento: {{ funcionario.dt_nascimento }}</p>
                            <p>Data de entrada na empresa: {{ funcionario.dt_entrada }}</p>
                        </div>
                    </li>
                </ul>
        </div>

        <div>
        <h4>Filtrar Funcionários por Id</h4>
        <p>Id: <input type="text" v-model="id"></p>
          <button @click="BuscarFuncId">Funcionários por Id</button><br /><br />

          <ul>
            <li v-for="funcionario in funcionarioId" :key="funcionario.id">
                <div class="infor">
                    <p> Id: {{ funcionario.id }}</p>
                    <p>Nome: {{ funcionario.nome }}</p>
                    <p>Cargo: {{ funcionario.cargo }}</p>
                    <p>Data de Nascimento: {{ funcionario.dt_nascimento }}</p>
                    <p>Data de entrada na empresa: {{ funcionario.dt_entrada }}</p>
                </div>
            </li>
        </ul>
        </div>


        <div>
        <h4>Filtrar pelo cargo do Funcionário</h4>
             <p> Cargo: <input type="text" v-model="cargo" /><br /></p>
             <button @click="BuscarFuncCargo">Buscar funcionário pelo cargo</button><br /><br />

                <ul>  
                    <li v-for="funcionario in funCargo" :key="funcionario.id">
                        <div class="infor">
                            <p> Id: {{ funcionario.id }}</p>
                            <p>Nome: {{ funcionario.nome }}</p>
                            <p>Cargo: {{ funcionario.cargo }}</p>
                            <p>Data de Nascimento: {{ funcionario.dt_nascimento }}</p>
                            <p>Data de entrada na empresa {{ funcionario.dt_entrada }}</p>
                        </div>
                    </li>
                </ul>
        </div>

        <div>
        <h4>Filtrar por quantidade de Funcionários</h4>
            Quantidade: <input type="text" v-model="qtd" /><br /><br /><br>
             <button @click="BuscarFuncQuant">Buscar por qtd de funcionários</button><br /><br />

              <ul>
                     <li v-for="funcionario in funcQtd" :key="funcionario.id">
                        <div class="infor">
                            <p> Id: {{ funcionario.id }}</p>
                            <p>Nome: {{ funcionario.nome }}</p>
                            <p>Cargo: {{ funcionario.cargo }}</p>
                            <p>Data de Nascimento: {{ funcionario.dt_nascimento }}</p>
                            <p>Data de entrada na empresa: {{ funcionario.dt_entrada }}</p>
                        </div>
                    </li>
               </ul>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: "",
            nome: "",
            cargo: "",
            dt_nascimento: "",
            dt_entrada: "",
            qtd: "",
            todosFuncionarios: [],
            funcionarioId: [],
            funCargo: [],
            funcQtd: [],
            baseURI: "http://localhost:3000"  
        }
    },

    methods: {
        TodosFunc(){
            axios.get(this.baseURI).then((result) =>{
                this.todosFuncionarios = result.data
            })
        },

        BuscarFuncId(){
            axios.get(this.baseURI + "/id?id=" + this.id).then((result) =>{
                this.funcionarioId = result.data
            }).catch(function(error) {
                console.log(error);
            })
        },

        BuscarFuncCargo(){
            axios.get(this.baseURI + "/cargo?cargo=" + this.cargo).then((result) =>{
                this.funCargo = result.data
            }).catch(function(error) {
                console.log(error);
            })
        },

        BuscarFuncQuant(){
            axios.get(this.baseURI + "/qtd?qtd=" + this.qtd).then((result) =>{
                this.funcQtd = result.data
            }).catch(function(error) {
                console.log(error);
            })
        }
    },
}
</script>

<style>
.Campos {
    margin: auto;
    width: 80%;
        
}
button{
    background-color: rgb(23, 91, 192);
    color: white;
    margin: 0 20px;
    height: 30px;
    cursor: pointer;
}
.infor {
    display: flex;
   
}
.infor p {
    margin: 10px 10px;
    
    
}
</style>