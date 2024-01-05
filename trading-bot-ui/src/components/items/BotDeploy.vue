<template>
    <div>
        <form @submit.prevent="submitForm">
            <b-row class="mb-3 mx-3">
                <label for="coinbase_api_key">Coinbase API Key:</label>
                <input 
                type="text" 
                id="coinbase_api_key" 
                v-model="formData.coinbase_api_key" 
                placeholder="Enter Coinbase API Key"
                required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="coinbase_api_secret">Coinbase API Secret:</label>
                <input 
                type="text" 
                id="coinbase_api_secret" 
                v-model="formData.coinbase_api_secret"
                placeholder="Enter Coinbase API Secret" 
                required />
            </b-row>

            <b-row class="mb-3 mx-3">
                <label for="coin_id">Trade:</label>
                <select id="coin_id" v-model="formData.coin_id" required>
                    <option value="ETH">ETH</option>
                    <option value="XLM">XLM</option>
                    <option value="BTC">BTC</option>
                </select>
            </b-row>


            <b-row class="mb-3 mx-3">
                <label for="discord_channel_webhook">Discord Webhook:</label>
                <input 
                type="text" 
                id="discord_channel_webhook" 
                v-model="formData.discord_channel_webhook" 
                placeholder="Enter Discord Webhook URL"
                required />
            </b-row>

            <button type="submit">Deploy Bot</button>
        </form>
    </div>
</template>
<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        width: 75%;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    form label {
        font-weight: bold; 
        display: block; 
        margin-bottom: 5px;
        margin-top: 10px;
        margin-right: 15px;
    }
</style>
<script>
export default {
    data() {
        return {
            formData: {
                coinbase_api_key: '',
                coinbase_api_secret: '',
                coin_id: '',
                discord_channel_webhook: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                // Assuming you have an API endpoint to send data to
                const response = await this.$axios.post('your/api/endpoint', this.formData);
                console.log('API response:', response);
                // Optionally, reset the form after successful submission
                this.resetForm();
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
        resetForm() {
            // Reset the form data
            this.formData = {
                coinbase_api_key: '',
                coinbase_api_secret: '',
                discord_channel_webhook: ''
            };
        },
    },
};
</script>