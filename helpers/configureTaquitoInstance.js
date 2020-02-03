module.exports = tezos => {
    tezos.setProvider({
        config: {
            /**
             * This setting needs to be tweaked together with the block baking speed in mini-babylon-archive.sh
             * in order to achieve optimal testing speed
             */
            confirmationPollingIntervalSecond: 1
        }
    });
}