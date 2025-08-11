// This example shows how to delete a custom XML node.

// How to remove custom XML node elements from the document.

// Delete first item node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<root><item>Value 1</item><item>Value 2</item></root>");
let rootNode = xml.GetNodes("/root")[0];
let itemNodes = rootNode.GetNodes("/item");
itemNodes[0].Delete();
let remainingNodes = rootNode.GetNodes("/item");
worksheet.GetRange("A1").SetValue("Remaining items: " + remainingNodes.length);