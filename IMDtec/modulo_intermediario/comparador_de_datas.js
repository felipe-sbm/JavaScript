let data1 = new Date("2023-04-21");
let data2 = new Date("2022-04-21");

function compararDatas(data1, data2) {
  if (data1 > data2) {
    return true;
  } else {
    return false;
  }
}

console.log(compararDatas(data1, data2));
