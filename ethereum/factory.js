import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF9698A3e082e7110cabFb9F77C36742aa4be9a67'
);

export default instance;
