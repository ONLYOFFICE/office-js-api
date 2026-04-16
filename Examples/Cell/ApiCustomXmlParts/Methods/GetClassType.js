// Retrieve the class type of a custom XML parts in a spreadsheet.

// How to identify the class type of a custom XML parts in a spreadsheet?

// Obtain the class type identifier of a custom XML parts object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
worksheet.GetRange("A1").SetValue("XML manager class type: " + classType);