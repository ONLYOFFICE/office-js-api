// This example gets a class type and inserts it into the document.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
    <pic:text>123</pic:text>
</pic:documentData>`;
let id = xmlManager.Add(xmlText).id;
let classType = xmlManager.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);