// Read the tag name of an XML node embedded in a spreadsheet.

// How do I find out the element name of a custom XML node in a spreadsheet?

// Identify which XML tag a node represents by reading its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item><item>Pen</item></inventory>");
let inventoryNode = xml.GetNodes('/inventory')[0];
let itemNodes = inventoryNode.GetNodes('/item');
let nodeName = itemNodes[0].GetNodeName();
worksheet.GetRange("A1").SetValue("Node name: " + nodeName);