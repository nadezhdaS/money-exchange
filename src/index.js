// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    let money = {1: 'P', 50: 'H', 25: 'Q', 10: 'D', 5: 'N'};
    let result = {};

    Object.keys(money).sort(function (a, b) {return b - a}).forEach(item => {
        if (currency >= item) {
            const num = Math.floor(currency / item);
            currency = currency % item;
            result[money[item]] = num;
        }
    });

    return result;
}
