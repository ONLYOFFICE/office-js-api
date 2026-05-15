// Respond to every cell edit by logging the changed range address in a spreadsheet.

// How do I capture which cells were modified when a user edits data in a spreadsheet?

// Track worksheet edits in real time by wiring up a callback that reports the affected range in a spreadsheet.

Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");