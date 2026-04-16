// Insert a new XML element into the custom XML part in a document.

// How can I insert the element using a custom XML part in a document?

// Insert the element for a custom XML part in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
xml.InsertElement("/content", "<text>example_text</text>");
xml.InsertElement("/content", "<firstNode>text inside first node</firstNode>", 0);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);