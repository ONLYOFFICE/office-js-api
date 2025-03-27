// This example gets reference style.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());