// This example demonstrates how to retrieve child nodes from a custom XML node.
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
let nodes = node.GetNodes('/*');
let paragraph = Api.CreateParagraph();
paragraph.AddText("List of nodes inside <text></text>:\r\n");
nodes.forEach((node, index) => {
    paragraph.AddText(`№${index} node: ${node.baseName}\r\n`);
});
doc.AddElement(0, paragraph);