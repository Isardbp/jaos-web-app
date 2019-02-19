<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex
            xs4
            v-for="item in cards"
            :key="item.title"
            >
                <v-card height="350" width="350">
                    <v-img
                    :src="item.img"
                    aspect-ratio="2.75"
                    ></v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{item.title}}</h3>
                        <div>{{item.info}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
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
            ]
        }
    }  
}
</script>
