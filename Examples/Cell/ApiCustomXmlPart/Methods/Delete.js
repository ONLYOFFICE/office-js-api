// Remove a stored block of custom XML data from a spreadsheet.

// Permanently remove a custom XML block that is no longer needed in a spreadsheet.

// Clean up unused XML storage to keep the workbook tidy in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example.com'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example.com'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Remaining XML parts: " + count);
xmlParts.forEach((part, index) => {
    worksheet.GetRange("A" + (index + 2)).SetValue("XML part: " + part.GetXml());
});