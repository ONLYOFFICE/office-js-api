// This example shows how to create a chart.
// ChartType used in text documents
// The resulting chart will have a 'bar3D' type:
var chart = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);

// ChartType used in spreadsheets
// The resulting chart will have a 'bar3D' type:
var chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);