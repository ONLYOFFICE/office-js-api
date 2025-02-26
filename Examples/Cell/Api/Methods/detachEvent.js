// This example unsubscribes from the "onWorksheetChange" event.

// Detach from an event.

// How to stop event handling.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
    console.log("onWorksheetChange");
    console.log(oRange.GetAddress());
});
Api.detachEvent("onWorksheetChange");