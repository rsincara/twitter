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

const deleteUserPostsFromFeed = async (userId, authorId) => {
    const posts = await client.sendCommand(['lrange', userId.toString(), '0', '-1']);
    const parsedPosts = posts.map((post) => JSON.parse(post));
    const filteredPosts = parsedPosts.filter((post) => post.author_id !== authorId);

    await client.sendCommand(['del', userId.toString()]);

    filteredPosts.forEach((post) => {
        client.lPush(userId.toString(), JSON.stringify(post));
    });
};

module.exports = {
    getFeedByUserId,
    connectClient,
    deleteUserPostsFromFeed,
};
