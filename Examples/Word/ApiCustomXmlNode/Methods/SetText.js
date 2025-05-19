// This example shows how to set the text of a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText =`
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="ancient">
        <title>The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book/title')[0];
node.SetText('Iliad');
node = xml.GetNodes('/bookstore/book/year')[0];
node.SetText('9th–8th centuries BC');
let paragraph = Api.CreateParagraph();
paragraph.AddText("Content of custom xml:\r\n");
paragraph.AddText(xml.GetXml());
doc.AddElement(0, paragraph);