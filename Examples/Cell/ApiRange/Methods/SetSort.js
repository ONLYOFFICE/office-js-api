// Sort a range of data by multiple columns in ascending or descending order in a spreadsheet.

// How do I reorder rows by the values in one or more columns in a spreadsheet?

// Organize table data by applying multi-column sort rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(2016);
worksheet.GetRange("A2").SetValue(2015);
worksheet.GetRange("A3").SetValue(2018);
worksheet.GetRange("A4").SetValue(2014);
worksheet.GetRange("A5").SetValue(2010);
worksheet.GetRange("B1").SetValue(150);
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(260);
worksheet.GetRange("B4").SetValue(120);
worksheet.GetRange("B5").SetValue(100);
worksheet.GetRange("C1").SetValue("C");
worksheet.GetRange("C2").SetValue("B");
worksheet.GetRange("C3").SetValue("A");
worksheet.GetRange("C4").SetValue("G");
worksheet.GetRange("C5").SetValue("E");
worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");