
const addExtraZero = (n) => (n < 10 ? `0${n}` : n);
const convetTime = (time) => {
  const formet = time[time.length - 2];
  const timeWithOutFormet = time.replace(formet === "A" ? "AM" : "PM", "");
  const timeArr = timeWithOutFormet.split(":");
  const h = parseInt(timeArr[0]);
  const m = parseInt(timeArr[1]);
  const s = parseInt(timeArr[2]);
  if (formet == "A" && h <= 11) return timeWithOutFormet;
  if (formet == "P" && h === 12)   return timeWithOutFormet;
  if (formet == "P" && h >= 1)    return `${12 + h}:${addExtraZero(m)}:${addExtraZero(s)}`;
  if (formet == "P" && h >= 1)     return `${12 + h}:${addExtraZero(m)}:${addExtraZero(s)}`;
  if (formet == "A" && 12 === h)   return `00:${addExtraZero(m)}:${addExtraZero(s)}`;
};


const arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];

const diagonal = (arr) => { 
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length-i-1];
  }
  return (sum1-sum2) * -1;
}

// console.log(diagonal(arr));


const birthCake = (arr) => { 
  const maxNum = Math.max(...arr);;
  return arr.filter((item) => item === maxNum).length;
}


const minMax = (arr) => { 
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+= arr[i];
  }
  console.log(sum - max, sum - min);
}

console.log(minMax([1,3,5,7,9]))