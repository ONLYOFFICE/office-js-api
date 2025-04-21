// This example shows how to add an attribute to a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <label>Header</label>
</documentData>`;
let xml = xmlManager.Add(xmlText);
xml.InsertAttribute("/documentData/label", "style", "bold");
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);