// This example shows how to add a custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<bookstore>
    <book1 category="ancient">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book1>
    <book2 category="">
        <title lang="en">Alice's Adventures in Wonderland</title>
        <author>Lewis Carroll</author>
        <year>1865</year>
        <price>30.00</price>
    </book2>
</bookstore>`
let id = xmlManager.Add(xmlText).id;
let xml = xmlManager.GetById(id);
let paragraph = Api.CreateParagraph();
paragraph.AddText(xml.id);
doc.AddElement(0, paragraph);