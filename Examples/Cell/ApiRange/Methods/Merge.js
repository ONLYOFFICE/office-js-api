// This example merges the selected cell range into a single cell or a cell row.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A9:E14").Merge(false);