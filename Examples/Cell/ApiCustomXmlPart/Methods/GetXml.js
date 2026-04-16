// Get the XML content of a custom XML part in a spreadsheet.

// How to get the XML content of an XML part in a spreadsheet.

// Get XML content using the custom XML part API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<report><title>Monthly Report</title><date>2024-01-01</date></report>");
let xmlContent = xml.GetXml();
worksheet.GetRange("A1").SetValue("XML content:");
worksheet.GetRange("A2").SetValue(xmlContent);