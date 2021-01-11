# Tezos starter kit
<img src="https://stove-labs.com/logo_transparent.png" width="100px"/>

![npm test workflow](https://github.com/stove-labs/tezos-starter-kit/workflows/Delphi/badge.svg?branch=dev)

## What is the tezos-starter-kit?

The Tezos starter kit provides a *truffle box* with reasonable defaults to kick start your smart contract development experience. It includes a ready to use archive sandbox node with RPC & CORS configured.

## Dependencies

- **Docker** - used to run a local Tezos node together with the LIGO compiler (If you're on linux, follow the post-installation steps as well)
- **Node.js v12** - Javascript runtime environment that we'll use for testing and deployment
- **LIGO** - High level programming language for the Tezos blockchain
- **truffle@tezos** - Testing framework, originally built for Ethereum that now includes support for Tezos.
- **ganache-cli@tezos** - Part of the Truffle suite of blockchain development tools. It creates isolated sandboxes using Flextesa to automate reproducible tests with faster networks.


## Getting started

> Make sure to use node `v12`.

**Unbox the starter kit & install the dependencies**
```shell
$ git clone https://github.com/stove-labs/tezos-starter-kit
$ cd tezos-starter-kit
$ npm i
```

**Compile the example contract**
```shell
$ npm run compile
```

**Start the local sandbox node**
```shell
$ npm run sandbox:start
```

**Migrate the compiled contracts**
```shell
$ npm run migrate
```

**Run the contract tests**
```shell
$ npm run test
```

**Watch project files and recompile/remigrate/retest**
```shell
$ npm run compile:watch
$ npm run migrate:watch
$ npm run test:watch
```

## Sandbox management

Archive mode sandbox Tezos node is provided within this box with RPC exposed at port `8732` and with ten accounts that are generously funded. You can find all account details in the terminal at the startup of the sandbox.


#### Commands

```shell
$ npm run sandbox:start
```

#### Available accounts
|alias  |pkh  |pk  |sk   |
|---|---|---|---|
|alice   |tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb   |edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn   |edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq   |
|bob   |tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6   |edpkurPsQ8eUApnLUJ9ZPDvu98E8VNj4KtJa1aZr16Cr5ow5VHKnz4   |edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt   |
|baker |  tz1W15VdfAc1ePgrGMyimCz1skJvY6hvMyiu | edpkuqBgimykYEEfcDAVrwguoUoQku2amoeGQoZLv4qVsWCzTWcM1u | edsk3TRzqPksMdn9YSgr5kBPEgj6WmKYA1QgzqjRVdFTzy9gi9vbzE |


## Usage with public testnets (Carthagenet, Delphinet ...)

In order to use your migration scripts with a different network than your local sandbox, you can specify an optional `--network` argument.

Make sure to [claim a new account at the faucet](https://faucet.tzalpha.net), and replace the `faucet.json` file with the new one downloaded previously.
```shell
$ npm run migrate -- --network delphinet
```
