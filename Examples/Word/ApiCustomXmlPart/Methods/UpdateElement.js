// This example shows how to update an element in custom XML.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData>
    <el1>1</el1>
    <el2>2</el2>
</documentData>`;
let xml = xmlManager.Add(xmlText);
xml.UpdateElement(
    "/documentData",
    `<documentData>new data</documentData>`
);
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);