// This example shows how to insert an element into a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <el1>1</el1>
    <el2>2</el2>
</documentData>`;
let xml = xmlManager.Add(xmlText);
xml.InsertElement(
    "/documentData",
    `<el0>0</el0>`,
    0
);
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);
xml.InsertElement(
    "/documentData",
    `<el3>3</el3>`,
    3
);
paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(1, paragraph);