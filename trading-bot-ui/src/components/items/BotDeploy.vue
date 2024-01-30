<template>
    <div>
        <form @submit.prevent="submitForm" class="bot-form">
            <b-row class="mb-3 mx-3">
                <label for="coinbase_api_key">Coinbase API Key:</label>
                <input type="text" id="coinbase_api_key" v-model="formData.coinbase_api_key"
                    placeholder="Enter Coinbase API Key" required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="coinbase_api_secret">Coinbase API Secret:</label>
                <input type="text" id="coinbase_api_secret" v-model="formData.coinbase_api_secret"
                    placeholder="Enter Coinbase API Secret" required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="discord_webhook">Discord Webhook:</label>
                <input type="text" id="discord_webhook" v-model="formData.discord_webhook"
                    placeholder="Enter Discord Webhook URL" required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="fixed_order_size">Fixed Order Size:</label>
                <input type="number" id="fixed_order_size" v-model="formData.fixed_order_size"
                    placeholder="Enter Fixed Order Size" step="any" required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="buy_order_cash">Buy Order Cash:</label>
                <input type="number" id="buy_order_cash" v-model="formData.buy_order_cash"
                    placeholder="Enter Buy Order Cash" required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="percent_profit_min">Percent Profit Min:</label>
                <input type="number" id="percent_profit_min" v-model="formData.percent_profit_min"
                    placeholder="Enter Percent Profit Min" required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="asset_id">Trade:</label>
                <select id="asset_id" v-model="formData.asset_id" required>
                    <option value="ETH">ETH</option>
                    <option value="XLM">XLM</option>
                    <option value="BTC">BTC</option>
                    <option value="ARB">ARB</option>
                    <option value="OP">OP</option>
                </select>
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="run_seed">Run Seed:</label>
                <input type="checkbox" id="run_seed" v-model="formData.run_seed" />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="buy_only">Buy Only:</label>
                <input type="checkbox" id="buy_only" v-model="formData.buy_only" />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="sell_only">Sell Only:</label>
                <input type="checkbox" id="sell_only" v-model="formData.sell_only" />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="accumulate_asset">Accumulate Asset:</label>
                <input type="checkbox" id="accumulate_asset" v-model="formData.accumulate_asset" />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="accumulate_cash">Accumulate Cash:</label>
                <input type="checkbox" id="accumulate_cash" v-model="formData.accumulate_cash" />
            </b-row>

            <VueLoadingButton 
            aria-label="Deploy Bot" 
            class="button" 
            @click.native="submitForm" 
            :loading="isLoading">
            Deploy Bot
            </VueLoadingButton>
        </form>
    </div>
</template>
<style scoped>
.button {
    background-color: #000000;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 50%;
    padding: 1rem;
    border: 5px solid #ccc;
    border-radius: 5px;
}

form label {
    font-weight: bold;
    display: block;
    margin-right: 15px;
}

input[type="text"],
input[type="number"],
select,
input[type="checkbox"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-top: 5px;
}

input[type="checkbox"] {
  width: auto;
  margin-top: 10px;
}
</style>
<script>
import { postDeployBot } from '../../utils/apis/BotApi';
import VueLoadingButton from 'vue-loading-button';
export default {
    components: {
        VueLoadingButton
    },
    data() {
        return {
            formData: {
                coinbase_api_key: '',
                coinbase_api_secret: '',
                asset_id: '',
                discord_webhook: '',
                fixed_order_size: 0.0,
                buy_order_cash: 0.0,
                run_seed: true,
                percent_profit_min: 2.0,
                buy_only: false,
                sell_only: false,
                accumulate_asset: false,
                accumulate_cash: true,
            },
            isLoading: false,
        };
    },
    methods: {
        async submitForm() {
            try {
                this.isLoading = true;
                setTimeout(async () => {
                    const response = await postDeployBot(this.formData);
                    console.log('API response:', response);
                    this.isLoading = false;
                    window.location.reload();
                }, 3000);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
        resetForm() {
            // Reset the form data
            this.formData = {
                coinbase_api_key: '',
                coinbase_api_secret: '',
                asset_id: '',
                discord_webhook: '',
                fixed_order_size: 0.0,
                buy_order_cash: 0.0,
                run_seed: true,
                percent_profit_min: 2.0,
                buy_only: false,
                sell_only: false,
                accumulate_asset: false,
                accumulate_cash: true,
            };
        },
    },
};
</script>