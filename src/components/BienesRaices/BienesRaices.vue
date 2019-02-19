<template>
    <v-container grid-list-lg >
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Bienes Raices</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card >
                    <v-card-title><h2>House Name</h2></v-card-title>
                    <v-responsive>
                        <v-img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Revised_Baca_House%2C_Trinidad%2C_CO_IMG_5081.JPG" height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-layout>
                                <v-flex xs6><h4>1234€</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">1112€</h4></v-flex>
                            </v-layout>
                                <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
                            <v-layout>
                                <v-flex xs6><h4>13 inversores</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">40 dias restantes</h4></v-flex>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-spacer></v-spacer>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs6 class="text-md-center">
                                    <h2>4.50%</h2>
                                    <p>Anual</p>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs6 class="text-md-center">
                                    <h2>22.50%</h2>
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
            <v-flex xs12 sm12 md4>
                <v-card >
                    <v-card-title><h2>House Name</h2></v-card-title>
                    <v-responsive>
                        <v-img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Revised_Baca_House%2C_Trinidad%2C_CO_IMG_5081.JPG" height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-layout>
                                <v-flex xs6><h4>1234€</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">1112€</h4></v-flex>
                            </v-layout>
                                <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
                            <v-layout>
                                <v-flex xs6><h4>13 inversores</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">40 dias restantes</h4></v-flex>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-spacer></v-spacer>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs6 class="text-md-center">
                                    <h2>4.50%</h2>
                                    <p>Anual</p>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs6 class="text-md-center">
                                    <h2>22.50%</h2>
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
            <v-flex xs12 sm12 md4>
                <v-card >
                    <v-card-title><h2>House Name</h2></v-card-title>
                    <v-responsive>
                        <v-img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Revised_Baca_House%2C_Trinidad%2C_CO_IMG_5081.JPG" height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-layout>
                                <v-flex xs6><h4>1234€</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">1112€</h4></v-flex>
                            </v-layout>
                                <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
                            <v-layout>
                                <v-flex xs6><h4>13 inversores</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">40 dias restantes</h4></v-flex>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-spacer></v-spacer>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs6 class="text-md-center">
                                    <h2>4.50%</h2>
                                    <p>Anual</p>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs6 class="text-md-center">
                                    <h2>22.50%</h2>
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
            <v-flex xs12 sm12 md4>
                <v-card >
                    <v-card-title><h2>House Name</h2></v-card-title>
                    <v-responsive>
                        <v-img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Revised_Baca_House%2C_Trinidad%2C_CO_IMG_5081.JPG" height="300px">
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <v-layout>
                                <v-flex xs6><h4>1234€</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">1112€</h4></v-flex>
                            </v-layout>
                                <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
                            <v-layout>
                                <v-flex xs6><h4>13 inversores</h4></v-flex>
                                <v-flex xs6><h4 class="text-xs-right">40 dias restantes</h4></v-flex>
                            </v-layout>
                            <v-spacer></v-spacer>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-spacer></v-spacer>
                            <v-layout align-center justify-space-around row fill-height>
                                <v-flex xs6 class="text-md-center">
                                    <h2>4.50%</h2>
                                    <p>Anual</p>
                                </v-flex>
                                <v-divider vertical></v-divider>
                                <v-flex xs6 class="text-md-center">
                                    <h2>22.50%</h2>
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
            valueDeterminate: 50
        }
    }  
}
</script>