// This example demonstrates how to delete an XML element from a custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example"><text>example_text</text><firstNode>text inside first node</firstNode></content>');
xml.DeleteElement('/content/firstNode');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation after deletion: " + xml.GetXml());
doc.Push(infoParagraph);