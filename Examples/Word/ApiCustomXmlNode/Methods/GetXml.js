// Get the XML content of a custom XML node in a document.

// How can I get the xml using a custom XML node in a document?

// Get the xml for a custom XML node in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML Content: " + node.GetXml());
doc.Push(paragraph);