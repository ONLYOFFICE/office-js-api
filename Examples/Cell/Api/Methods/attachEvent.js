// Subscribe to the "onWorksheetChange" event in a spreadsheet.

// Attach an event in a spreadsheet.

// How to start event handling in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});