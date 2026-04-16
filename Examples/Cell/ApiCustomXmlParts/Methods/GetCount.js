// Get the count of custom XML parts in the XML manager in a spreadsheet.

// How to get the count of custom XML parts in a spreadsheet.

// Get the count of XML parts in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
worksheet.GetRange("A1").SetValue("There are " + count + " custom XML parts in the workbook.");