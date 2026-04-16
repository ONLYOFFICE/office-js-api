// Add a new custom XML part and then access it in a spreadsheet.

// How to add a custom XML part to the workbook in a spreadsheet.

// Add and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());