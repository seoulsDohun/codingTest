function solution(priorities, location) {
  let answer = 0;

  const list = priorities.map((item, index) => {
    return { value: item, location: index === location };
  });

  while (true) {
    const firstValue = list.shift();

    const higherFlag = list.some((item) => item.value > firstValue.value);

    if (higherFlag) list.push(firstValue);
    else {
      answer++;
      if (firstValue.location) return answer;
    }
  }
}
let a = [2, 1, 3, 2];
let b = 2;
console.log(solution(a, b));
