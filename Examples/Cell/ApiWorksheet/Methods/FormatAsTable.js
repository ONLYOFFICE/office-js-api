// This example formats the selected range of cells from the sheet as a table.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.FormatAsTable("A1:E10");