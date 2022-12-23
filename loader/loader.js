const fetch = require('node-fetch');
const { createClient } = require('redis');
const amqp = require('amqplib/callback_api');

const {
    user,
    pass,
    WEB_BASE_URL,
    REDIS_NAME,
} = process.env;

const getStatusFromRedis = async (client, link) => {
    return await client.get(link);
}

const client = createClient({
    url: `redis://${REDIS_NAME}:6379`
});

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

amqp.connect(`amqp://${user}:${pass}@rmq:5672/%2F`, function (error0, connection) {

    if (error0) throw error0;

    connection.createChannel(function (error1, channel) {

        if (error1) throw error1;

        // todo в переменные окружения
        const queue = 'twits';

        channel.assertQueue(queue, {
            durable: false,
        });

        channel.consume(queue, async function (msg) {
            const content = JSON.parse(msg.content.toString());
            console.log('content: ', content);

            fetch(`http://nginx/twits/get-subscribers?authorId=${content.author_id}`)
                .then((res) => res.json())
                .then((res) => {
                    const userIds = res.result;
                    console.log('userIds: ', userIds);
                    userIds.forEach((userId) => {
                        client.lPush(userId.toString(), JSON.stringify(content))
                    });

                })
                .catch((fetchError) => {
                    console.log('fetchError: ', fetchError);
                });
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});
