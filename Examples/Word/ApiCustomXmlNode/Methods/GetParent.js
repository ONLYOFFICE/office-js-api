// This example demonstrates how to retrieve the parent of a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="ancient">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
let bookstore = node.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Content of book node:\r\n");
paragraph.AddText(bookstore.GetXml());
doc.AddElement(0, paragraph);