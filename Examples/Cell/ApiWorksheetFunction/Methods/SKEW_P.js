// Return the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean in a spreadsheet.

// How to calaculate the skewness of a distribution based on a population in a spreadsheet.

// Use a function to get a characterization of the degree of asymmetry of a distribution around its mean in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

let func = Api.WorksheetFunction;
let ans = func.SKEW_P(1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12);

worksheet.GetRange("C1").SetValue(ans);