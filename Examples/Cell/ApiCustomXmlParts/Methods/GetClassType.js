// Read the type label of the XML storage manager object in a spreadsheet.

// How do I find out what type of object manages XML data in a spreadsheet?

// Confirm the category of the XML manager to handle it correctly in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
worksheet.GetRange("A1").SetValue("XML manager class type: " + classType);