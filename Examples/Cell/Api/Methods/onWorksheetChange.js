// This example shows how to handle onWorksheetChange named event.

// How to attach events, for example, onWorksheetChange one.

// Event handling example in a worksheet.

Api.attachEvent("onWorksheetChange", function(oRange){
    console.log("onWorksheetChange");
    console.log(oRange.GetAddress());
});
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");