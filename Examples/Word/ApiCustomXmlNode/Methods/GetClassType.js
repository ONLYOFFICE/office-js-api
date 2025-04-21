// This example shows how to get nodes from a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
    <pic:text>123</pic:text>
</pic:documentData>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/pic:documentData/pic:text')[0];
let classType = node.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);