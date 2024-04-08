function solution(prices) {
  const pricesMap = prices.map((item) => {
    return { price: item, second: 0 };
  });

  for (let i = 0; i < pricesMap.length; i++) {
    for (let j = i + 1; j < pricesMap.length; j++) {
      pricesMap[i].second++;
      if (pricesMap[i].price > pricesMap[j].price) {
        break;
      }
    }
  }

  return pricesMap.map((item) => item.second);
}

let a = [1, 2, 5, 3, 2, 1, 6, 3];
console.log(solution(a));
