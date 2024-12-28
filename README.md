<h1 align="center">Gratero</h1>

<p align="center">
<a href="https://www.npmjs.com/package/gratero"><img alt="Version" src="https://img.shields.io/badge/npm-v1.0.1-blue"/></a>
<a href="https://www.npmjs.com/package/gratero"><img alt="Package" src="https://img.shields.io/badge/npm-gratero-orange"/><a>
<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"/>
</p>

<p align="center">
  <b>The official Gratero SDK for Node.js backend.</b>
</p>

<p align="center">Documentation of Gratero's API is available at <a href="https://docs.gratero.com">website</a></p>
<br>

<h2>Installation</h2>
<p>Make sure you have already installed Node in your system. Run the following command in your command prompt window.</p>

```
npm i gratero
```

<h2>Basic Usage: </h2>

<h4>1. Initialize Gratero Instance</h4>

<p>Create an instance of the Gratero class by passing your <code>api_key</code>, <code>secret_key</code>, and the desired <code>environment</code>.</p>

```
import { Instance } from "gratero";

const gratero = new Instance({
  api_key: "your_api_key",
  secret_key: "your_secret_key",
  environment: "test" | "live"
})
```

<h4>2. Check Wallet Balance</h4>

<p>To check the wallet balance, use the <code>gratero.wallet()</code> method:</p>

```
gratero.wallet()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  });
```

<p>Feel free to submit issues or pull requests. Any improvements or bug fixes are welcome!</p>

<p>Happy shipping! 🚚💚</p>