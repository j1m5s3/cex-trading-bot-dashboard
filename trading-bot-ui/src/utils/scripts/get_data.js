const axios = require('axios');
const Chart = require('chart.js');
const config = require('dotenv').config();

const base_url = process.env.VUE_APP_COINGECKO_API_URL;

async function getCoinGeckoOHLCData(coin_id, currency, days) {
    let url = base_url + '/coins/' + coin_id + '/ohlc';
    let cg_res;
    let params = {
        vs_currency: currency,
        days: days
    };


    console.log('Making request to: ' + url)
    cg_res = await axios.get(url, { params: params }).then(response => {
        if (response.status != 200) {
            throw new Error('Error fetching coin OHLC data');
        }
        return response.data;
    }).catch(error => {
        console.error('ERROR: ', error);
    });

    console.log('Got response from: ' + url);
    console.log(cg_res);
    return cg_res;
}

async function chartData() {
    let data = await getCoinGeckoOHLCData('bitcoin', 'usd', 1);

    let time_labels = [];
    let price_close = [];

    for (let i = 0; i < data.length; i++) {
        time_labels.push(data[i][0]);
        price_close.push(data[i][4]);
    }

    var chart_data = {
        labels: time_labels,
        datasets: [{
          label: 'Sample Data',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: price_close,
        }],
      };

    
    // Create a bar chart
    var myChart = new Chart.Chart(ctx, {
        type: 'line',
        data: chart_data,
        options: {},
    });
    myChart.show()

    console.log(data);
    return data;
}

//let data = getCoinGeckoOHLCData('bitcoin', 'usd', 1);
chartData();

//console.log(data);