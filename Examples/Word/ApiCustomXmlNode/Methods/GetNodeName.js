// This example demonstrates how to retrieve the name of the current XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text>Sample text content</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes("/documentData/text")[0];
let nodeName = node.GetNodeName();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Node name: " + nodeName);
doc.AddElement(0, paragraph);