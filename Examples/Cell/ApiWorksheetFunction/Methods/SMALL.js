
const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

// method params
let range = worksheet.GetRange("A1:A16");
let position = 8;

let func = Api.GetWorksheetFunction();
let ans = func.SMALL(range, position);

worksheet.GetRange("C1").SetValue(ans);
