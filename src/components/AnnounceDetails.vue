<template>
    <v-card class="ma-2">
        <v-card-title>{{cardTitle}}</v-card-title>
        <v-card-text>
            <v-label v-for="(detail, index) in details" : key="index"> {{detail}} </v-label>
        </v-card-text>
    </v-card>
</template>

<script>
import {ref} from "vue";
export default {
    name: "AnnounceDetails",
    setup(props) {
        let details = ref(props.detailsList);
        let cardTitle ref(props.listTitle);
        return {
            details,
            cardTitle
        };
    },
    props: ["listTitle","detailsList"]
}
</script>
