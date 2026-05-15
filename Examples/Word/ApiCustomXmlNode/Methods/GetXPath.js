// Retrieve the path of a specific node within embedded XML data in a document.

// How do I find the location of a node in embedded XML data in a document?

// Read a node's position to navigate or reference it programmatically in a document.

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