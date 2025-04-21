// This example demonstrates how to delete a custom XML node attribute.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/picture">
    <text>
        <one/>
        <two/>
    </text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/documentData/text')[0];
node.Delete();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Content of custom xml:\r\n");
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);