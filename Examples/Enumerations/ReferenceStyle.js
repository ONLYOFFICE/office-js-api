// This example gets reference style.
builder.CreateFile("xlsx");
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();