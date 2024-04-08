function solution(bridge_length, weight, truck_weights) {
  let second = 0;
  let bridgeTruckWeight = 0;
  let bridgeTruck = [{ weight: 0, finishTime: 0 }];

  while (bridgeTruck.length > 0 || truck_weights.length > 0) {
    // 트럭 나가기
    if (bridgeTruck[0].finishTime === second)
      bridgeTruckWeight -= bridgeTruck.shift().weight;

    // 트럭 들어오기
    if (truck_weights[0] + bridgeTruckWeight <= weight) {
      bridgeTruckWeight += truck_weights[0];
      bridgeTruck.push({
        weight: truck_weights.shift(),
        finishTime: second + bridge_length,
      });
    }

    // 트럭 대기하기
    else if (bridgeTruck[0]) second = bridgeTruck[0].finishTime - 1;
    second++;
  }

  return second;
}

let a = 100;
let b = 100;
let c = [7];
console.log(solution(a, b, c));
