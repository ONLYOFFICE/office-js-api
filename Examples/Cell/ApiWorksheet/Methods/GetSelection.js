// This example shows how to get an object that represents the selected range.
let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");