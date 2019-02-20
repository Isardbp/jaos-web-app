<template>
    <v-container grid-list-lg >
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Bienes Raices</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4
            v-for="item in bienesRaices"
            :key="item.houseName">
                <v-card >
                    <v-card-title><h2>{{item.houseName}}</h2></v-card-title>
                    <v-responsive>
                        <v-img :src="item.img" height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-layout>
                                <v-flex xs6><h4>{{item.dinInvertido}}€</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">{{item.dinFalta}}€</h4></v-flex>
                            </v-layout>
                                <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
                            <v-layout>
                                <v-flex xs6><h4>{{item.numInversores}} inversores</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">{{item.diasRestantes}} dias restantes</h4></v-flex>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-spacer></v-spacer>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs6 class="text-md-center">
                                    <h2>{{item.porcentajeAnual}}%</h2>
                                    <p>Anual</p>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs6 class="text-md-center">
                                    <h2>{{item.porcentajeTotal}}%</h2>
                                    <p>Total</p>
                                </v-flex>
                            </v-layout>
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
            bienesRaices: [
                {houseName: 'Nombre 1', img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Revised_Baca_House%2C_Trinidad%2C_CO_IMG_5081.JPG', dinInvertido: 4000, dinFalta: 10000, numInversores: 2, diasRestantes: 80, porcentajeAnual: 4.2, porcentajeTotal: 20.6},
                {houseName: 'Nombre 2', img: 'https://cdn.pixabay.com/photo/2017/10/07/07/41/old-house-2825712_960_720.jpg', dinInvertido: 100000, dinFalta: 100, numInversores: 12, diasRestantes: 10, porcentajeAnual: 5.0, porcentajeTotal: 28.0},
                {houseName: 'Nombre 3', img: 'https://c1.staticflickr.com/6/5256/5432595903_eaf7686253_b.jpg',  dinInvertido: 50010, dinFalta: 2233, numInversores: 7, diasRestantes: 50, porcentajeAnual: 6.4, porcentajeTotal: 30.0},
                {houseName: 'Nombre 4', img: 'https://cdn.pixabay.com/photo/2016/08/15/17/32/prato-1595972_960_720.jpg', dinInvertido: 10550, dinFalta: 1000, numInversores: 2, diasRestantes: 60, porcentajeAnual: 4, porcentajeTotal: 20.0}
            ],
            valueDeterminate: 50
        }
    }  
}
</script>