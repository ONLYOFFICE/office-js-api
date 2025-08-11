// This example shows how to get the class type of the custom XML parts manager.

// How to get the class type of the XML parts manager.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
worksheet.GetRange("A1").SetValue("XML manager class type: " + classType);