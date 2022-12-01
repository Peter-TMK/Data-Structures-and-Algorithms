prices = [10,3,4,7,11]
buy, sell, maxProfit = 0, 1, 0

while sell < len(prices):
    if prices[sell] > prices[buy]:
        profit = prices[sell] - prices[buy]
        maxProfit = max(maxProfit, profit)
    else:
        buy = sell
    sell += 1

print(maxProfit)

