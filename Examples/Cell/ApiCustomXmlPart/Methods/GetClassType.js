// Identify what kind of object a custom XML block is in a spreadsheet.

// How do I find out the object type of a custom XML block stored in a spreadsheet?

// Confirm the category of a stored XML object before working with it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);