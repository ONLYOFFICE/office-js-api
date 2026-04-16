// Delete an XML element from a custom XML part in a document.

// How do I delete the element in a document?

// Delete the element using a custom XML part object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>example_text</text><firstNode>text inside first node</firstNode></content>");
xml.DeleteElement("/content/firstNode");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation after deletion: " + xml.GetXml());
doc.Push(infoParagraph);