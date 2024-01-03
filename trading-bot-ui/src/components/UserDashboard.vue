<script>
import MarketStats from './items/MarketStats.vue'
import CryptoDropdown from './items/CryptoDropdown.vue'
export default {
    components: {
        MarketStats,
        CryptoDropdown
    },
    data() {
        return {
            selectedCrypto: 'bitcoin'
        };
    },
    methods: {
        handleCryptoSelected(value) {
            // Update the selectedCrypto in the parent component
            console.log("selected crypto --> ", value);
            this.selectedCrypto = value;
        }
    }
}
</script>

<template>
    <div id="dashboard">
        <b-row>
            <b-col class="mb-3 mx-3">
                <b-card title="Market Stats" class="rounded">
                    <CryptoDropdown @cryptoSelected="handleCryptoSelected" />
                    <MarketStats :selectedCrypto="selectedCrypto"/>
                </b-card>
            </b-col>
            <b-col class="mb-3 mx-3">
                <b-card title="Deploy Configuration" class="rounded">
                    <p>Strategy Configuration</p>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mb-3 mx-3">
                <b-card title="Active Bots" class="rounded">
                    <p>Bots Running...</p>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>


