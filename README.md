# Tezos starter kit
<img src="https://stove-labs.com/logo_transparent.png" width="100px"/>

## What is the tezos-starter-kit?

The Tezos starter kit provides a *truffle box* with reasonable defaults to kick start your smart contract development experience. It includes a ready to use archive sandbox node with RPC & CORS configured.

## Dependencies

- **Docker** - used to run a local Tezos node together with the LIGO compiler (If you're on linux, follow the post-installation steps as well)
- **Node.js** - Javascript runtime environment that we'll use for testing and deployment
- **truffle@tezos** - Testing framework, originally built for Ethereum that now includes support for Tezos. It can be installed by running:
```
npm i -g truffle@tezos
```

## Getting started

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
$ npm run start-sandbox -- carthage
```

**Migrate the compiled contracts**
```shell
$ npm run migrate
```

**Run the contract tests**
```shell
$ npm run test
```

## Sandbox management

Archive mode sandbox Tezos node is provided within this box with RPC exposed at port `8732` and with two accounts that are generously funded.

> You can start a sandbox with a specific protocol by passing an additional argument to the sandbox commands, e.g. `babylon` or `carthage`

#### Commands

```shell
$ npm run start-sandbox -- carthage
$ npm run kill-sandbox -- carthage
$ npm run restart-sandbox -- carthage
```

#### Available accounts
|alias  |pkh  |pk  |sk   |
|---|---|---|---|
|alice   |tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb   |edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn   |edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq   |
|bob   |tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6   |edpkurPsQ8eUApnLUJ9ZPDvu98E8VNj4KtJa1aZr16Cr5ow5VHKnz4   |edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt   |

## Usage with public testnets (Babylonnet, Carthagenet, ...)

In order to use your migration scripts with a different network than your local sandbox, you can specify an optional `--network` argument.

Make sure to [claim a new account at the faucet](https://faucet.tzalpha.net), and replace the `faucet.json` file with the new one downloaded previously.
```shell
$ truffle migrate --network carthagenet
```
