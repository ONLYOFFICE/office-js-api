// Read the full raw XML text stored in a custom block in a spreadsheet.

// How do I retrieve the complete XML string from a stored block of data in a spreadsheet?

// Export the current XML content of a stored block so it can be inspected or reused in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<report><title>Monthly Report</title><date>2024-01-01</date></report>");
let xmlContent = xml.GetXml();
worksheet.GetRange("A1").SetValue("XML content:");
worksheet.GetRange("A2").SetValue(xmlContent);