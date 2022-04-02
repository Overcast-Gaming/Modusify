module.exports = function modusify(string = 'The quick brown fox jumps over the lazy dog') {
    if (typeof string !== "string") throw new TypeError("String required! Received: " + typeof string);
    string = string.split(' ');
    const times = Math.round((Math.random() * (Math.ceil(string.length/5) - 1) + 1));
    for (i=0;i<times;i++) {
        const j = Math.floor(Math.random() * string.length);
        string.splice(j, 0, '...');
    }
    const re =  / \.\.\./g
    return string.join(' ').toString().replaceAll(re,'...')
};
