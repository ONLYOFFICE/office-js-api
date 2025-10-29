// This example shows how to get the ID of a custom XML part.

// How to get the ID of an XML part.

// Get an XML part ID.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
worksheet.GetRange("A1").SetValue("XML part ID: " + id);