// This example sorts the cells in the given range by the parameters specified in the request.
// How to sort values of cells specifying the order.
// Get a range and sort its values.
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue(2015);
oWorksheet.GetRange("A3").SetValue(2018);
oWorksheet.GetRange("A4").SetValue(2014);
oWorksheet.GetRange("A5").SetValue(2010);
oWorksheet.GetRange("B1").SetValue(150);
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(260);
oWorksheet.GetRange("B4").SetValue(120);
oWorksheet.GetRange("B5").SetValue(100);
oWorksheet.GetRange("C1").SetValue("C");
oWorksheet.GetRange("C2").SetValue("B");
oWorksheet.GetRange("C3").SetValue("A");
oWorksheet.GetRange("C4").SetValue("G");
oWorksheet.GetRange("C5").SetValue("E");
oWorksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");