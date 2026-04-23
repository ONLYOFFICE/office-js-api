// Attach a new block of XML data to a workbook in a spreadsheet.

// How do I store custom XML content inside a workbook in a spreadsheet?

// Embed structured XML so it travels with the file when saved in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());