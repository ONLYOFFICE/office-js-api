// This example shows how to subscribe on "onWorksheetChange" event.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
	console.log("onWorksheetChange");
	console.log(oRange.GetAddress());
});
builder.SaveFile("xlsx", "attachEvent.xlsx");
builder.CloseFile();