// Read the full XML content of a custom XML part as a string in a document.

// How do I export or inspect the raw XML of a custom XML part in a document?

// Serialize the entire XML structure to display or process its contents in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<documentData xmlns="http://example.com/example">
    <text attribute1="attribute1 value">node text</text>
</documentData>`;
let xml = xmlManager.Add(xmlText);
let xmlString = xml.GetXml();

let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xmlString);
doc.Push(paragraph);