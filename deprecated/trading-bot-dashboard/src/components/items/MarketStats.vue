<template>
    <h1>Market Stats</h1>               
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
            await this.fetchData();
        },
        methods: {
            async fetchData() {
                try {
                    let response = await getCoinGeckoCoinList();
                    this.items = response;
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>