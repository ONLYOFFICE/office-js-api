// Calculate the kurtosis of a set of numbers in a spreadsheet.

// How do I measure the shape of a data distribution in a spreadsheet?

// Find the kurtosis value that describes the peakedness of a dataset in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let kurtosis = func.KURT(3, 89, 34, 2, 45, 4, 45, 13);
worksheet.GetRange("C1").SetValue(kurtosis);