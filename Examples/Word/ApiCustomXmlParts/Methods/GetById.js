// This example shows how to retrieve all custom XML parts.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `<bookstore>
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
let xml = CustomXmlParts.Add(xmlText);
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.id);
doc.AddElement(0, paragraph);