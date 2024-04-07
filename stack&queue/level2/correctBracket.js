function solution(s){
  let total = 0;
  for (const string of s) {
    if (string === ')') total -= 1
    if (string === '(') total += 1
    if (total < 0) return false
  }
  return total === 0 
}

let s = ""
console.log(solution(s))