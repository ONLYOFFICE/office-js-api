// This example sets reference style.

// How to set a style of a reference.

// Set reference style using ID.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());