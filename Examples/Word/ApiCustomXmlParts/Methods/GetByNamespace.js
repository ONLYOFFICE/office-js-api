// This example shows how to retrieve a custom XML part by its namespace.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
    <pic:text>123</pic:text>
</pic:documentData>`;
let id = xmlManager.Add(xmlText).id;
let xmls = xmlManager.GetByNamespace('http://example.com/picture');
let xml = xmls[0];
let node = xml.GetNodes('/pic:documentData/pic:text')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText(node.GetText());
doc.AddElement(0, paragraph);