prices = [10,3,4,7,11]
let buy = 0
let sell = 1
let maxProfit = 0;

while (sell < prices.length){
    if(prices[sell] > prices[buy]){
        profit = prices[sell] - prices[buy]
        maxProfit = Math.max(maxProfit, profit)
    } else {
       buy = sell;
    }
    sell++;
}
console.log(maxProfit)
