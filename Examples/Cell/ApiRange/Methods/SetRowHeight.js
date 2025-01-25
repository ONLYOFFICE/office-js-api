// This example sets the row height value.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetRowHeight(32);