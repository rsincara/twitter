const amqp = require('amqplib/callback_api');

const {
    rabbitUser,
    rabbitPass,
    TWITS_QUEUE,
} = process.env;

let rmqChannel;

amqp.connect(`amqp://${rabbitUser}:${rabbitPass}@rmq:5672/%2F`, (err, connect) => {
    if (err) throw err;
    connect.createChannel((err1, chanel) => {
        if (err1) throw err1;

        rmqChannel = chanel;
    });
});

const sendTwitToQueue = (sendObj) => {
    rmqChannel.sendToQueue(TWITS_QUEUE, Buffer.from(JSON.stringify(sendObj)));
}

module.exports = {
    sendTwitToQueue: sendTwitToQueue,
};