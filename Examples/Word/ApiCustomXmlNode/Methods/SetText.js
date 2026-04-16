// Get the XPath of a custom XML node in a document.

// How do I set text in a document?

// Set text using a custom XML node object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book>
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book/title')[0];
node.SetText('Iliad');
node = xml.GetNodes('/bookstore/book/year')[0];
node.SetText('9th–8th centuries BC');
let paragraph = Api.CreateParagraph();
paragraph.AddText("\r\nContent of custom xml:\r\n");
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);