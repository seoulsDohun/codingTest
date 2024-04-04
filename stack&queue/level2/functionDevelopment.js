function solution(progresses, speeds) {
  var answer = [];
  
  let cnt = 0
  let workDay = 0

  progresses.forEach((progress, index) => {
    if (workDay * speeds[index] + progress < 100) {
      if (cnt !== 0) {
        answer.push(cnt)
      }
    
      if (index === progresses.length - 1) answer.push(1)
      
      workDay = Math.ceil((100 - progress) / speeds[index])
      cnt = 1
    } else {
      cnt += 1
      if(index === progresses.length - 1) answer.push(cnt)
    }
  })
    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))