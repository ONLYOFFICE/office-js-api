// Extract the value stored in a custom XML node in a document.

// How do I get the value of a custom XML node in a document?

// Read raw data out of a specific XML element to use or display it in a document.

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
let animalNode = xml.GetNodes('/zoo/animal')[0];
let paragraph = Api.CreateParagraph();
paragraph.AddText(animalNode.GetNodeValue());
doc.Push(paragraph);