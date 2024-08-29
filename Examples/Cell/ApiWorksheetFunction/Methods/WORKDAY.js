
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WORKDAY("12/7/1981", 56); 

oWorksheet.GetRange("C1").SetValue(ans);
