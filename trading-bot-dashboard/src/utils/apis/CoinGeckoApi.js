import axios from "axios";

const base_url = process.env.VUE_APP_COINGECKO_API_URL;

export const getCoinGeckoCoinList = async () => {
  console.log('Making request to: ' + base_url + '/coins/list')

  let url = base_url + '/coins/list';
  let cg_res;

  cg_res = await axios.get(url, {}).then((response) => {
    if (response.status != 200) {
      throw new Error('Error fetching coin list');
    }
    return response;
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.error('ERROR: ', error);
  });

  console.log('Got response from: ' + base_url + '/coins/list');
  return cg_res;
}

export const getCoinGeckoOHLCData = async (coin_id, currency, days) => {
  let url = base_url + '/coins/' + coin_id + '/ohlc';
  let cg_res;
  let params = {
    vs_currency: currency,
    days: days
  };


  cg_res = await axios.get(url,{}, {params: params}).then((response) => {
    if (response.status != 200) {
      throw new Error('Error fetching coin list');
    }
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.error('ERROR: ', error);
  });

  return cg_res;
}