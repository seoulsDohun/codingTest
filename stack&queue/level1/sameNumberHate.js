function solution(arr) {
  var answer = [];

  let number = 0
  arr.forEach((item, index) => { 
    if (index === 0) {
      answer.push(item)
      number = item
      return
    }
    if (number !== item) {
      answer.push(item)
      number = item
    }
  })
    return answer;
}

let param = [1,1,1,1,1,1,2,2,2,2,3,3,3,1,1,2,3,2,,1,2,3,5,5,4,3,5,6,7,2,3,4,5,4,7,1,3,2,1,3,1,2]
console.log(solution(param))