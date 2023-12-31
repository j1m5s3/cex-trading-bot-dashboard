<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Market Stats</h1>
                <li v-for="item in items" :key="item.id">
                    {{ item.name }}
                </li>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1>Bot Stats</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1>Bot Deploy</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1>Bot Settings</h1>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getCoinGeckoCoinList
} from '@/utils/apis/CoinGeckoApi.js';

export default {
    data() {
        return {
            items: []
        };
    },
    async mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            try {
                let response = getCoinGeckoCoinList();
                this.items = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>