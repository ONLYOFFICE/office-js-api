// This example shows how to retrieve the value of an attribute from the current XML node.
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
let species = node.GetAttribute('species');
let id = node.GetAttribute('id');
let paragraph = Api.CreateParagraph();
paragraph.AddText("Attributes of the first animal node:\r\n");
paragraph.AddText(`Species: ${species}\r\n`);
paragraph.AddText(`ID: ${id}\r\n`);
doc.Push(paragraph);