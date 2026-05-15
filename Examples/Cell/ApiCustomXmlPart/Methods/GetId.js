// Retrieve the unique identifier assigned to a custom XML block in a spreadsheet.

// How do I find the ID that distinguishes one XML block from another in a spreadsheet?

// Look up a stored XML block by its identifier to reference it later in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
worksheet.GetRange("A1").SetValue("XML part ID: " + id);