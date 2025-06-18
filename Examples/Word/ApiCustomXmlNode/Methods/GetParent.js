// This example shows how to get the parent of a custom XML node and display its value.
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
let rootNode = animalNode.GetParent();
let nullNode = rootNode.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText(`Root node name: ${rootNode.GetNodeName()}; parent of root node: ${nullNode}`);
doc.Push(paragraph);