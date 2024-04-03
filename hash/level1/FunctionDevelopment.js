function solution(participants, completions) {
  var answer = '';

  const newMap = new Map();
  
  participants.forEach(participant => {
    newMap.set(participant, newMap.get(participant) ? newMap.get(participant) + 1 : 1)
  })

  completions.forEach(completion => {
    newMap.set(completion, newMap.get(completion) - 1)
  })

  participants.some(participant => {
    if (newMap.get(participant) === 1) {
      answer = participant
      return true
    }
  })

  return answer
}
