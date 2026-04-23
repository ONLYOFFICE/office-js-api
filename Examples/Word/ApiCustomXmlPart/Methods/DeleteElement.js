// Remove an XML element from embedded structured data in a document.

// How do I delete a specific element from the XML data stored in a document?

// Trim unnecessary child nodes from structured content to keep the stored data lean in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>example_text</text><firstNode>text inside first node</firstNode></content>");
xml.DeleteElement("/content/firstNode");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representation after deletion: " + xml.GetXml());
doc.Push(infoParagraph);