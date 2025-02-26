// This example shows how to return the number of days between two dates based on a 360-day year (twelve 30-day months).

// How to get number of days between two dates using 360-day year.

// Use function to get days count between two dates on a 360-day year.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAYS360("3/31/2018", "4/30/2019", false); 

oWorksheet.GetRange("C1").SetValue(ans);
