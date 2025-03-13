// This example gets reference style.

// How to retrieve a reference style and display it in the worksheet.

// Get a reference style.

builder.CreateFile("xlsx");
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();