// This example creates a new history point.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");