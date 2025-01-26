// This example shows how to get the page PrintGridlines property which specifies whether the sheet gridlines must be printed or not.
let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());