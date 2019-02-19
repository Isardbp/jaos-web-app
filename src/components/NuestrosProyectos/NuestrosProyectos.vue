<template>
    <v-container grid-list-lg >
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Bienes Raices</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card >
                    <v-card-title><h2>Project Name</h2></v-card-title>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-layout>
                                <v-flex xs6><h4>135</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">135</h4></v-flex>
                            </v-layout>
                                <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
                            <v-layout>
                                <v-flex xs6><h4>135</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">135</h4></v-flex>
                            </v-layout>
                            
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <h3 class="headline mb-0">Keto</h3>
                            <div>The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn outline block color="green" @click="showRecipes('keto')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            cards: [
                {title: 'Proyecto 1', info: 'Esta es info del proyecto1 que bla bla bla bla', img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'},
                {title: 'Proyecto 2', info: 'Esta es info del proyecto2 que bla bla bla bla', img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'},
                {title: 'Proyecto 3', info: 'Esta es info del proyecto3 que bla bla bla bla', img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'},
                {title: 'Proyecto 4', info: 'Esta es info del proyecto4 que bla bla bla bla', img: 'https://picsum.photos/510/300?random'}
            ],
            valueDeterminate: 50
        }
    }  
}
</script>