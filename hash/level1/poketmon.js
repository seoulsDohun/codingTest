function solution(nums) {
  const numLength = Math.floor(nums.length / 2);
  const newSet = new Set(nums);

  return newSet.size > numLength ? numLength : newSet.size
}

console.log(solution([1,2,3,4,4]))