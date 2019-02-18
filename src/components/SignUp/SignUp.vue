<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
               <v-stepper v-model="e1">
                    <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1" color="blue">Tipo de Usuario</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2" color="blue">Información personal</v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3" color="blue">Información Bancaria</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card
                        class="mb-3"
                        height="200px"
                        >
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs5>
                                    <v-select
                                    :items="userTypeItems"
                                    label="Tipo de Usuario"
                                    v-on:change="changeText"
                                    outline
                                    color="blue"
                                    required
                                    >
                                    </v-select>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs5>                                     
                                    <h2 id="userType" class="text-md-center"> Tenemos dos estilos de Usuario <br> Inversor y Emprendedor</h2>
                                    <br>
                                    <p id="userDescription" class="text-md-center">Selecciona cualquier de los dos para 
                                        tener mas información al respecto</p>
                                </v-flex>
                            </v-layout>
                        </v-card>

                        <v-btn
                        flat
                        @click="e1 = 2"
                        >
                        Continue
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                        <v-card
                        class="mb-3"
                        height="300px"
                        >
                            <v-layout justify-space-around row fill-height>
                                <v-flex xs5>
                                    <v-form>
                                        <v-container grid-list-xl fluid>
                                            <v-layout wrap>
                                                <v-flex xs12 sm6 >
                                                    <v-text-field
                                                    v-model="name"
                                                    :counter="15"
                                                    :rules="nameRules"
                                                    label="Nombre Usuario"
                                                    required
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6>
                                                    <v-text-field
                                                    v-model="name"
                                                    :counter="30"
                                                    :rules="nameRules"
                                                    label="Nombe"
                                                    required
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field
                                                    v-model="name"
                                                    :counter="50"
                                                    :rules="nameRules"
                                                    label="Apellidos"
                                                    required
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-form>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs5>
                                    <v-form>
                                        <v-container grid-list-xl fluid>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field
                                                    v-model="email"
                                                    :rules="emailRules"
                                                    label="E-mail"
                                                    required
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field
                                                    v-model="name"
                                                    :counter="30"
                                                    :rules="nameRules"
                                                    label="Móvil"
                                                    required
                                                    ></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-form>
                                </v-flex>
                            </v-layout>
                        
                        </v-card>

                        <v-btn
                        flat
                        @click="e1 = 3"
                        >
                        Continue
                        </v-btn>

                        <v-btn flat @click="e1 = 1">Atrás</v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                        <v-card
                        class="mb-5"
                        height="200px"
                        ></v-card>

                        <v-btn
                        flat
                        >
                        Finalizar
                        </v-btn>

                        <v-btn flat @click="e1 = 2">Atrás</v-btn>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        changeText,
        e1: 0,
        userTypeItems: ['Inversor', 'Emprendedor'],
        nameRules: [
            v => !!v || 'Nombre es campo obligatorio',
            v => v.length <= 30 || 'El nombre no puede tener mas de 30 caracteres'
        ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
      }
    }
  }
  function changeText(value) {
      if(!value.localeCompare('Emprendedor')){
            document.getElementById("userType").innerHTML = "Emprendedor"
            document.getElementById("userDescription").innerHTML = "Un Emprendedor puede crear startups, los cuales gracias a nosotros"+
            "pueden evolucionar y bla bla bla bla "
      }
      else if (!value.localeCompare('Inversor')){
            document.getElementById("userType").innerHTML = "Inversor"
            document.getElementById("userDescription").innerHTML = "Un Inversor puede invertir en proyectos, startups... Y mas texto que"+
            "tendremos que pensar"
      }
  }
</script>

<style>
#userDescription{
    font-size: 15px;
}
</style>
