function solution(progresses, speeds) {
  var answer = [0];
  
  let cnt = 0
  let maxDay = 0

  progresses.forEach((progress, index) => {
    const workDay = Math.ceil((100 - progress) / speeds[index])
    if(maxDay === 0) maxDay = workDay
    if (workDay <= maxDay) {
      answer[cnt] += 1
    } else {
      maxDay = workDay
      answer[++cnt] = 1
    }
  })
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))