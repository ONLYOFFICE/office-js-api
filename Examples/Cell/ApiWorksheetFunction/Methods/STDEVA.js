// Estimate the standard deviation of a sample including logical values and text.

// The STDEVA function treats text as 0 and logical values as 0 (false) or 1 (true) in calculations.

// Get the standard deviation including logical and text values, and place it in cell C1.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, "text", 1, 0, 0, 2, 3, true, false, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.STDEVA(
  1,
  0,
  0,
  0,
  "text",
  1,
  0,
  0,
  2,
  3,
  true,
  false,
  6,
  8,
  10,
  12
); //includes logical values

worksheet.GetRange("C1").SetValue(ans);