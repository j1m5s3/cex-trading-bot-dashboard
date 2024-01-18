<script>
import MarketStats from './items/MarketStats.vue';
import BotsStats from './items/BotsStats.vue';
import CryptoDropdown from './items/CryptoDropdown.vue';
import BotDeploy from './items/BotDeploy.vue';

export default {
    components: {
        MarketStats,
        BotsStats,
        CryptoDropdown,
        BotDeploy
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
        <b-row class="dashboard-row" cols="2">
            <b-col class="mb-3 mx-3" :md="4">
                <b-card title="Market Stats" class="rounded" bg-variant="dark">
                    <CryptoDropdown @cryptoSelected="handleCryptoSelected" />
                    <MarketStats :selectedCrypto="selectedCrypto"/>
                </b-card>
            </b-col>
            <b-col class="mb-3 mx-3" :md="4">
                <b-card title="Deploy Configuration" class="rounded" bg-variant="dark">
                    <BotDeploy />
                </b-card>
            </b-col>
        </b-row>
        <b-row class="bot-status-row">
            <b-col class="mb-3 mx-3" cols="12" md="8">
                <b-card title="Active Bots" class="rounded" bg-variant="dark">
                   <BotsStats />
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
#dashboard {
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.dashboard-row {
  justify-content: center;
  align-items: center;
}

.bot-status-row {
  justify-content: center;
  align-items: center;
}

.card {
  border: 2px solid #000; /* Black border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Drop shadow */
  font-weight: bold; /* Bold text */
}

.card:hover {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>


