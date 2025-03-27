// This example sets the width of the specified column.
let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 10);
worksheet.SetColumnWidth(1, 20);