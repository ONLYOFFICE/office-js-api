// This example shows how to add a new custom XML part and then access it.

// How to add a custom XML part to the workbook.

// Add a new XML part.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());