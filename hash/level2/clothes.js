function solution(clothes) {
  var answer = 1;

  const newMap = clothes.reduce((map, array) => {
    map.set(array[1], (map.get(array[1]) ?? 0 ) + 1)
    return map
  }, new Map())

  // 의상 종류를 전부 곱한다(의상 종류 + 안입는 경우(1))
  newMap.forEach(value => {
    answer *= (value + 1)
  })

  return answer-1; // 전부 안입는 경우는 뺀다.
}

const param = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

solution(param)