function solution(nums) {
  const newMap = new Map();

  nums.forEach(num => {
    newMap.set(num, newMap.get(num) ? newMap.get(num) + 1 : 1)
  })

  if (newMap.size > nums.length / 2) {
    return  Math.floor(nums.length /2 )
  } 

  return newMap.size
}

console.log(solution([1,2,3,4,4]))