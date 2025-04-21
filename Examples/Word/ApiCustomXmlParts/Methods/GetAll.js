// This example shows how to get all custom XML parts.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
    <pic:text>123</pic:text>
</pic:documentData>`;
xmlManager.Add(xmlText);
xmlText = `<bookstore>
    <book category="ancient">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
    <book category="">
        <title lang="en">Alice's Adventures in Wonderland</title>
        <author>Lewis Carroll</author>
        <year>1865</year>
        <price>30.00</price>
    </book>
</bookstore>`
xmlManager.Add(xmlText);
let paragraph = Api.CreateParagraph();
let xmls = xmlManager.GetAll();
paragraph.AddText("List of xmls:\r\n");
xmls.forEach((xml, index) => {
    paragraph.AddText(`№${index} custom xml id: ${xml.id}\r\n`);
});
doc.AddElement(0, paragraph);