// Return the complementary error function integrated between the specified lower limit and infinity in a spreadsheet.

// How to get the complementary error function (from lower limit and infinity) in a spreadsheet.

// Use function to get a complementary error function set between the specified lower limit and infinity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));