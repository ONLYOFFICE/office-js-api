// This example shows how to get the full name of the currently opened file.
let worksheet = Api.GetActiveSheet();
let name = Api.GetFullName();
worksheet.GetRange("B1").SetValue("File name: " + name);