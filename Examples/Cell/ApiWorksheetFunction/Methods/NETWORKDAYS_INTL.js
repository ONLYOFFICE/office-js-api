var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.NETWORKDAYS_INTL("8/1/2017", "9/1/2017", "0000011", "8/16/2017"));