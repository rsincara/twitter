const { createClient } = require('redis');

const {
    REDIS_NAME,
} = process.env;

const client = createClient({
    url: `redis://${REDIS_NAME}:6379`
});

const connectClient = () => {
    client.connect();
}

const getFeedByUserId = async (userId) => {
    console.log('client: ', client);
    let result;
    result = await client.sendCommand(['lrange', userId.toString(), '0', '-1']);

    return result;
};

module.exports = {
    getFeedByUserId,
    connectClient,
};
