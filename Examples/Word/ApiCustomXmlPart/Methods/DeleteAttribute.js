// This example shows how to delete an attribute in a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text attribute1="attribute1 value" attribute2="attribute2 value">node text</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
xml.DeleteAttribute("/documentData/text", "attribute2");
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);