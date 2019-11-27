module.exports = {
    convertTo62: function (num) {
        let encodeTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        do {
            result = encodeTable[num % encodeTable.length] + result;
            num = Math.floor(num / encodeTable.length);
        } while (num);
        return result;
    },
};