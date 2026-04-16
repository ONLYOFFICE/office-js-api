// Insert an attribute into a custom XML node in a document.

// How to insert the attribute for a custom XML part in a document?

// Insert the attribute and display the result in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let insertionSuccess = xml.InsertAttribute("/content", "version", "1.0");
let paragraph = Api.CreateParagraph();
paragraph.AddText("XML string representation: " + xml.GetXml());
doc.Push(paragraph);