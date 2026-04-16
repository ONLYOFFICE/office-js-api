// Check the class type returned by a custom XML node in a document.

// How do I check what type a custom XML node object is in a document?

// Retrieve and output the class type string for a custom XML node in a document.

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
let node = xml.GetNodes('/zoo/animal')[0];
let classType = node.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type of the node: " + classType);
doc.Push(paragraph);