<template>
    <div id="market-dropdown">
        <v-select 
        label="coinId" 
        :options="cryptos" 
        v-model="selectedCrypto" 
        @input="setSelected" 
        :menu-props="{ style: { fontSize: '36px' } }" 
        />
    </div>
</template>

<script>
import coin_id_data from '../../utils/constants/api_coin_ids.json';
export default {
    data() {
        return {
            cryptos: [],
            selectedCrypto: 'bitcoin'
        }
    },
    mounted() {
        this.loadCryptos();
    },
    methods: {
        setSelected(value) {
            this.selectedCrypto = value;
            this.$emit('cryptoSelected', this.selectedCrypto);
        },
        loadCryptos() {
            try {
                coin_id_data['coingecko'].forEach(element => {
                    this.cryptos.push(element);
                });
                console.log("cryptos --> ", this.cryptos);
            } catch (error) {
                console.error('Error loading cryptos:', error);
            }
        }
    }
}
</script>