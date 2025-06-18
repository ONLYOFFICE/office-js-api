// This example shows how to handle onWorksheetChange named event.

// How to attach events, for example, onWorksheetChange one.

// Event handling example in a worksheet.

Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");