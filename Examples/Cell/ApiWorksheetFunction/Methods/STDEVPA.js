
const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.GetWorksheetFunction();
let ans = func.STDEVPA(1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12); //includes logical values

worksheet.GetRange("C1").SetValue(ans);
