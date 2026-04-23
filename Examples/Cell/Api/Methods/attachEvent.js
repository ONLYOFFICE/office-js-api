// Subscribe to a change notification so code runs automatically when cells are edited in a spreadsheet.

// How do I run custom code whenever a cell value changes in a spreadsheet?

// React to user edits without polling by registering a listener for worksheet changes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});