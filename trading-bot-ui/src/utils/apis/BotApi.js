import axios from "axios";

const base_url = process.env.VUE_APP_BOT_API_URL;

export const postDeployBot = async (payload) => {
    let url = base_url + '/bot/deploy';
    let res;
    console.log('Making request to: ' + url)
    res = await axios.post(url, payload).then(response => {
        if (response.status != 200) {
        throw new Error('Error deploying bot');
        }
        return response.data;
    }).catch(error => {
        console.error('ERROR: ', error);
    });
    console.log('Got response from: ' + url);
    console.log(res);
    return res;
}

export const getDeployedBotsStatus = async () => {
    let url = base_url + '/bot/deploy';
    let res;
    console.log('Making request to: ' + url)
    res = await axios.get(url).then(response => {
        if (response.status != 200) {
        throw new Error('Error getting bot status');
        }
        return response.data;
    }).catch(error => {
        console.error('ERROR: ', error);
    });
    console.log('Got response from: ' + url);
    console.log(res);
    return res;
}   