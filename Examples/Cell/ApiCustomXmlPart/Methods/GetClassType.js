// This example shows how to get the class type of a custom XML part.

// How to get the class type of an XML part.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);