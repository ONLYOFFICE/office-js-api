// Add a new child element to a custom XML part in a document.

// How do I insert an XML element at a specific position within a custom XML part in a document?

// Build up an XML structure incrementally by appending or prepending elements in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
xml.InsertElement("/content", "<text>example_text</text>");
xml.InsertElement("/content", "<firstNode>text inside first node</firstNode>", 0);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);