<template>
  <div>
    <apexchart v-if="items.length > 0" type="candlestick" :options="chartConfig" :series="chartSeries" />
    <div v-else>Loading...</div>
  </div>
</template>
  
<script>
import VueApexCharts from 'vue-apexcharts';
import { getCoinGeckoOHLCData } from '../../utils/apis/CoinGeckoApi';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    selectedCrypto: String
  },
  data() {
    return {
      items: [],
      chartHeight: '100%',
      chartOptions: {
        chart: {
          type: 'candlestick',
          background: '#A9A9A9',
          height: this.chartHeight,
        },
        title: {
          text: this.selectedCrypto.toUpperCase(),  // Set initial title,
          align: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
      },
    };
  },
  computed: {
    chartSeries() {
      // Convert the fetched OHLC data into the format required by ApexCharts
      return [
        {
          data: this.items.map(item => ({
            x: new Date(item[0]),
            y: [item[1], item[2], item[3], item[4]],
          })),
        },
      ];
    },
    chartConfig() {
      return {
        chart: {
          type: 'candlestick',
          background: '#A9A9A9',
          height: this.chartHeight,
        },
        title: {
          text: this.selectedCrypto.toUpperCase(),  // Set initial title,
          align: 'left',
        },
        xaxis: {
          type: 'datetime',
        },
      };
    },
  },
  async mounted() {
    await this.fetchData(this.selectedCrypto);

    setTimeout(() => {
      this.chartHeight = '100%';
    }, 1000);
  },
  watch: {
    selectedCrypto(newCrypto) {
      //this.chartOptions.title.text = newCrypto.toUpperCase();
      console.log("chart name: ", this.chartOptions.title.text)
      this.chartOptions.title.text = newCrypto.toUpperCase();  // Update title
      console.log("chart name updated: ", this.chartOptions.title.text)
      this.fetchData(newCrypto);
    },
  },
  methods: {
    async fetchData(coin_id) {
      try {
        console.log("fetching data for market stats");
        const response = await getCoinGeckoOHLCData(coin_id, 'usd', 1);
        console.log("fetch res --> ", response);
        this.items = response;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>