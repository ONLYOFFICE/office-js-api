// This example shows how to subscribe to the "onWorksheetChange" event.
// Attach an event.
// How to start event handling.
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
	console.log("onWorksheetChange");
	console.log(oRange.GetAddress());
});