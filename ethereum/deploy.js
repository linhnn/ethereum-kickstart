const HdWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HdWalletProvider(
  'work recall saddle outdoor win laugh huge neither bright stock lawsuit unhappy',
  'https://rinkeby.infura.io/bFuYocR1veLMp2UWGuNr'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const inbox = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '2000000' });

  console.log('Contract deployed to ', inbox.options.address);
};
deploy();
