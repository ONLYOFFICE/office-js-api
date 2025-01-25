
const worksheet = Api.GetActiveSheet();

let valueArr = [7,6,5,5];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let number = worksheet.GetRange("A3");
let range = worksheet.GetRange("A1:A4");
let order = 0;

let func = Api.GetWorksheetFunction();
let ans = func.RANK(number,range,order); 

worksheet.GetRange("C1").SetValue(ans);
