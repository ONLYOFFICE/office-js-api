// This example saves changes to the specified document.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();