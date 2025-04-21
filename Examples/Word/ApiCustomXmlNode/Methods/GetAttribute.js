// This example demonstrates how to retrieve an attribute from a custom XML node.
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
let value = node.GetAttribute('category');
let attributes = node.GetAttributes();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Value of 'category' attribute:" + value);
doc.AddElement(0, paragraph);