// Update the value of an existing attribute in a custom XML node in a document.

// How can I update attribute using a custom XML node in a document?

// Update attribute for a custom XML node in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="house">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.UpdateAttribute('category', 'ancient');
let attributes = node.GetAttributes();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of book node:\r\n");
attributes.forEach((attribute, index) => {
    paragraph.AddText(`Attribute #${index} "${attribute.name}" with value: ${attribute.value}\r\n`);
});
doc.AddElement(0, paragraph);