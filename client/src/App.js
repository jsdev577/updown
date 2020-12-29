import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import UpDownContract from './contracts/UpDown.json'
import getWeb3 from "./getWeb3";

import "./App.css";
import Home from "./components/Home";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const upDownDeployedNetwork = UpDownContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const upDownInstance = new web3.eth.Contract(
        UpDownContract.abi,
        upDownDeployedNetwork && upDownDeployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, upDownInstance: upDownInstance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  startGame = async (gameTime) => {
    const { accounts, upDownInstance } = this.state;
    console.log("calling contract")
    // Stores a given value, 5 by default.
    let response = await upDownInstance.methods.startGame(gameTime).send({ from: accounts[0] });

    console.log(response)
  };

  setBonus = async (bonus) => {
    const { accounts, upDownInstance } = this.state;
    console.log("calling contract")
    // Stores a given value, 5 by default.
    let response = await upDownInstance.methods.setBonus(bonus).send({ from: accounts[0] });

    console.log(response)
  };

  reportResult = async (winner, loser) => {
    const { accounts, upDownInstance } = this.state;
    console.log("calling contract")
    // Stores a given value, 5 by default.
    let response = await upDownInstance.methods.reportResult(winner, loser).send({ from: accounts[0] });

    console.log(response)
  };

  placeBet = async (bet, amount) => {
    const { accounts, upDownInstance } = this.state;
    console.log("calling contract")
    // Stores a given value, 5 by default.
    let response = await upDownInstance.methods.placeBet(bet).send({ from: accounts[0], value: this.state.web3.utils.toWei(amount.toString(), 'ether') });

    console.log(response)
  };

  withdrawGain = async () => {
    const { accounts, upDownInstance } = this.state;
    console.log("calling contract")
    // Stores a given value, 5 by default.
    let response = await upDownInstance.methods.withdrawGain().send({ from: accounts[0] });

    console.log(response)
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App" style={{ background: 'dimgray' }}>
        <Home
          startGame={this.startGame}
          reportResult={this.reportResult}
          placeBet={this.placeBet}
          withdrawGain={this.withdrawGain}
          setBonus={this.setBonus}
        />
      </div>
    );
  }
}

export default App;
