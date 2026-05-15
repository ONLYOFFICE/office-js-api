// Remove a stored block of custom XML data from a spreadsheet.

// How do I permanently remove a custom XML block I no longer need in a spreadsheet?

// Clean up unused XML storage to keep the workbook tidy in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Remaining XML parts: " + count);
xmlParts.forEach((part, index) => {
    worksheet.GetRange("A" + (index + 2)).SetValue("XML part: " + part.GetXml());
});