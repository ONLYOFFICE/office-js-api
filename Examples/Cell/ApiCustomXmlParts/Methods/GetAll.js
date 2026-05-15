// Collect every stored XML block from a workbook in a spreadsheet.

// How do I retrieve all embedded XML data at once from a workbook in a spreadsheet?

// Loop through each saved XML entry to inspect or process it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<employees><employee>John</employee></employees>");
xmlManager.Add("<departments><department>IT</department></departments>");
xmlManager.Add("<projects><project>Website</project></projects>");
let allParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Total XML parts: " + allParts.length);
for (let i = 0; i < allParts.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Part " + (i + 1) + ": " + allParts[i].GetXml());
}