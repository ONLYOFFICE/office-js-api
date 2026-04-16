// Retrieve the value of the version attribute from the custom XML part in a document.

// How do I get the attribute in a document?

// Get the attribute using a custom XML part object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);