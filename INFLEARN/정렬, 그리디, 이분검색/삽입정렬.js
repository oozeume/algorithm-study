const solution = (arr) => {
  let answer = arr; // 얕은복사

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]; // arr[i]를 임시적으로 저장해놓는 변수 
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = temp;
  }
  return answer;

}

const arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));