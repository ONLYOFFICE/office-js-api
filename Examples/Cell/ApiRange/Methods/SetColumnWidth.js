// This example sets the width of all the columns in the range.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetColumnWidth(20);