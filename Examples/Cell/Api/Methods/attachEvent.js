// This example shows how to subscribe on "onWorksheetChange" event.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});