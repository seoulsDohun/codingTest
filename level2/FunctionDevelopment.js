function solution(participants, completions) {
    var answer = '';
    
    participants.sort();
    completions.sort();
    
    participants.some((participant, index) => {
        if(participant !== completions[index]) {
            answer = participant
            return true;
        }
    });
  return answer;

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.32ms, 33.5MB)
// 테스트 4 〉	통과 (1.00ms, 33.7MB)
// 테스트 5 〉	통과 (0.60ms, 33.7MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.6MB)
  
// 테스트 1 〉	통과 (42.26ms, 46.8MB)
// 테스트 2 〉	통과 (87.51ms, 51.9MB)
// 테스트 3 〉	통과 (102.53ms, 56.7MB)
// 테스트 4 〉	통과 (108.38ms, 58.8MB)
// 테스트 5 〉	통과 (90.09ms, 56.8MB)
}