// Retrieve all attributes of a custom XML node in a document.

// How do I list every attribute on a custom XML node in a document?

// Inspect the full set of metadata attached to an XML element by reading all its attributes in a document.

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
let attributes = node.GetAttributes();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of the animal node:\r\n");
attributes.forEach(function(attribute, index) {
    paragraph.AddText("name:" + attribute.name + ", value: " + attribute.value + "\r\n");
});
doc.Push(paragraph);