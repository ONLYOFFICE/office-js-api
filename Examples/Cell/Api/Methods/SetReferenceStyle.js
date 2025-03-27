// This example sets reference style.
let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());