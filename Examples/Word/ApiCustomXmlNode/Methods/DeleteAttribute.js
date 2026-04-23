// Remove a named attribute from a custom XML node in a document.

// How do I delete an attribute from a custom XML node in a document?

// Strip unwanted metadata from an XML element by dropping one of its attributes in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="house" tag="#123">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.DeleteAttribute('category');
let attributes = node.GetAttributes();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml after deletion: " + xml.GetXml());
doc.Push(infoParagraph);