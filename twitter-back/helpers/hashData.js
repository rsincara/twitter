const crypto = require("crypto");

function md5native(data) {
    const hash = crypto.createHash('md5');
    hash.update(data);
    return hash.digest('hex');
}

const hashData = (data) => {
    return md5native(data);
};

module.exports = {
    hashData,
}