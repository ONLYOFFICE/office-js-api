// This example replaces specific information to another one in a range.

// How to replace one data value with another in a range.

// Create a range and replace its data field value with a new one.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("A4").SetValue("Cost price");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("B4").SetValue(50);
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("C4").SetValue(120);
oWorksheet.GetRange("D2").SetValue(200);
oWorksheet.GetRange("D3").SetValue(200);
oWorksheet.GetRange("D4").SetValue(160);
var oRange = oWorksheet.GetRange("A2:D4");
var oReplaceData = {
	What: "200", 
	Replacement: "0",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true,
	ReplaceAll: true
};
oRange.Replace(oReplaceData);