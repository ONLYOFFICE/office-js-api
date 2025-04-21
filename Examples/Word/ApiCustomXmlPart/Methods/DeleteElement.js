// This example shows how to delete an element in a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <label>Header</label>
    <text>lorem ipsum</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
xml.DeleteElement("/documentData/label");
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);