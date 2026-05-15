// Count how many XML blocks are stored in a workbook in a spreadsheet.

// How do I find out how many embedded XML entries exist in a spreadsheet?

// Check the total number of saved XML blocks before iterating over them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
worksheet.GetRange("A1").SetValue("There are " + count + " custom XML parts in the workbook.");