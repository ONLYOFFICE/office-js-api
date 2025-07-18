// This example shows how to update the value of an attribute in a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text val="123">node text</text>
    <label name="Title">label text</label>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let nodes = xml.GetNodes("/documentData/*");
let label = xml.GetNodes("/documentData/label")[0];
let paragraph = Api.CreateParagraph();
nodes.forEach(node => {
    paragraph.AddText("Node text: " + node.GetText() + "\r\n");
});
paragraph.AddText("Label attribute: " + label.GetAttribute("name"));
doc.Push(paragraph);