// Stop listening for cell change notifications after they are no longer needed in a spreadsheet.

// How do I unregister a previously attached change listener in a spreadsheet?

// Prevent a handler from firing on future edits by removing it from the event queue in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});
Api.detachEvent("onWorksheetChange");