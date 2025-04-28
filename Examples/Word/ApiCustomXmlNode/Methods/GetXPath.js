// This example shows how to get the XPath of a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo xmlns="zoo-namespace">
    <animal>
        <name>Leo</name>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo/animal/name')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText("xPath: " + node.GetXPath());
doc.Push(paragraph);