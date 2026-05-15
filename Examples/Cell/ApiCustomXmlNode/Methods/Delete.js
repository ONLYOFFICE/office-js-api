// Remove a specific node from an embedded XML structure in a spreadsheet.

// How do I delete an unwanted element from custom XML data in a spreadsheet?

// Trim embedded XML content by eliminating a node and verifying what remains in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<root><item>Value 1</item><item>Value 2</item></root>");
let rootNode = xml.GetNodes("/root")[0];
let itemNodes = rootNode.GetNodes("/item");
itemNodes[0].Delete();
let remainingNodes = rootNode.GetNodes("/item");
worksheet.GetRange("A1").SetValue("Remaining items: " + remainingNodes.length);