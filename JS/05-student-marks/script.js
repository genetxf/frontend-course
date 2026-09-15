
/*
    input: std mark: number
    array: 10,2,3
*/

const markInput = document.getElementById("markInput");
const addButton = document.getElementById("addButton");
const totalOutput = document.getElementById("totalOutput");
const averageOutput = document.getElementById("averageOutput");
const markList = document.getElementById("markList");

 
const marks = [];

const sumTotalMark = (arr) => { 
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];;
    }
    return total;
}
const avgMark = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

function handleMark() { 
    const value = markInput.value;
    const mark = Number(value)
    marks.push(mark);
    const total = sumTotalMark(marks)
    const avg  = avgMark(marks);
    averageOutput.innerHTML = avg;
    totalOutput.innerText = total;
    console.log(markList.innerHTML);
    
    markList.innerHTML = markList.innerHTML + ` <li>${value}</li>`
}

addButton.addEventListener("click", handleMark);
