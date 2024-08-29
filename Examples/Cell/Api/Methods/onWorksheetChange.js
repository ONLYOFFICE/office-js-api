Api.attachEvent("onWorksheetChange", function(oRange){
    console.log("onWorksheetChange");
    console.log(oRange.GetAddress());
});
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");