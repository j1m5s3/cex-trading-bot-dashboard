<template>
  <div>
    <div class="container">
      <b-row class="row" v-for="(value, key) in active_bots_status" :key="key">
        <!-- Your content for each row goes here -->
        <b-col>{{ key }}</b-col>
        <b-col>{{ value.created_at }}</b-col>
        <b-col>{{ value.status }}</b-col>
        <b-col> <BotStopButton :botId="key" /> </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { getDeployedBotsStatus } from '../../utils/apis/BotApi';
import BotStopButton from './BotStopButton.vue';

export default {
  components: {
    BotStopButton,
  },
  data() {
    return {
      active_bots_status: {},
    };
  },
  computed: {},
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      // Fetch data from API
      const response = await getDeployedBotsStatus();
      this.active_bots_status = response.data.active;
    },
  },
};
</script>

