// Duplicate a chart on a worksheet and read the class type of the copy.

// How do I make a copy of a chart in a spreadsheet?

// Clone a chart and verify the copy preserves the chart class in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("D2").SetValue(280);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$2", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);

let copyChart = chart.Copy();
worksheet.GetRange("A4").SetValue("Copy class type:");
worksheet.GetRange("B4").SetValue(copyChart.GetClassType());
