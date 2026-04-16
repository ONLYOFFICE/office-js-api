// Create a new child node and insert it as a child of the current XML node in a spreadsheet.

// How to add a child node to an XML node in a spreadsheet.

// Add a new child node using the custom XML node API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Hello World!</text></content>");
let rootNode = xml.GetNodes("/content")[0];
let textNode = rootNode.Add("text");
let classType = textNode.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);