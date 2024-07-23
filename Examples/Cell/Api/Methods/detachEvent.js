// This example unsubscribes from the "onWorksheetChange" event.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
    console.log("onWorksheetChange");
    console.log(oRange.GetAddress());
});
Api.detachEvent("onWorksheetChange");
builder.SaveFile("xlsx", "detachEvent.xlsx");
builder.CloseFile();