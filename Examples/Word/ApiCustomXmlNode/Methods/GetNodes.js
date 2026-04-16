// Get nodes based on a specific XPath and display their values in a document.

// How to get the nodes for a custom XML node in a document?

// Get the nodes and display the result in a document.

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
let nodes = animalNode.GetNodes("/*");
let paragraph = Api.CreateParagraph();
nodes.forEach(function(node, index) {
    paragraph.AddText(`Node #${index} value: ${node.GetNodeValue()}\r\n`);
});
doc.Push(paragraph);