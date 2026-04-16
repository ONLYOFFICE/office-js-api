// Retrieve the class type of a custom XML part in a spreadsheet.

// How to identify the class type of a custom XML part in a spreadsheet?

// Obtain the class type identifier of a custom XML part object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);