// Get the ID of a custom XML part in a spreadsheet.

// How to get the ID of an XML part in a spreadsheet.

// Get the id and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
worksheet.GetRange("A1").SetValue("XML part ID: " + id);