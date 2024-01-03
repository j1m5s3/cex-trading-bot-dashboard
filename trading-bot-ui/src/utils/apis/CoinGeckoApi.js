import axios from "axios";

const base_url = process.env.VUE_APP_COINGECKO_API_URL;

export const getCoinGeckoCoinList = async () => {
  

  let url = base_url + '/coins/list';
  let cg_res;

  console.log('Making request to: ' + url)
  cg_res = await axios.get(url, {}).then(response => {
    if (response.status != 200) {
      throw new Error('Error fetching coin list');
    }
    return response.data;
  }).catch(error => {
    console.error('ERROR: ', error);
  });

  console.log('Got response from: ' + url);
  console.log(cg_res);

  return cg_res;
}

export const getCoinGeckoOHLCData = async (coin_id, currency, days) => {
  let url = base_url + '/coins/' + coin_id + '/ohlc';
  let cg_res;
  let params = {
    vs_currency: currency,
    days: days
  };

  console.log('Making request to: ' + url)
  cg_res = await axios.get(url, {params: params}).then(response => {
    if (response.status != 200) {
      throw new Error('Error fetching coin list');
    }
    return response.data;
  }).catch(error => {
    console.error('ERROR: ', error);
  });

  console.log('Got response from: ' + url);
  console.log("cg_res --> ", cg_res);
  return cg_res;
}