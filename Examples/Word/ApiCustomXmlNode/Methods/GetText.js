// This example shows how to get the text content of a custom XML node and its children.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo><animal><name>Leo</name>123</animal></zoo>`;
let xml = xmlManager.Add(xmlText);
let animalNode = xml.GetNodes('/zoo/animal')[0];
let nodeText = animalNode.GetText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Node text: " + nodeText);
doc.Push(paragraph);