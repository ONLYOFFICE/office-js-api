// This example demonstrates how to delete a custom XML part.

// How to delete a custom XML part from the workbook.

// Delete an XML part.

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