// Serialize a shape's document content to JSON and restore it in a document.

// How do I convert document content to JSON and recreate it from that data in a document?

// Round-trip a shape's content through JSON to verify the class type of the reconstructed object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
let json = docContent.ToJSON(false, true);
let docContentFromJSON = Api.FromJSON(json);
let type = docContentFromJSON.GetClassType();
docContentFromJSON.RemoveAllElements();
paragraph = docContentFromJSON.GetElement(0);
paragraph.AddText("Class type = " + type);
Api.ReplaceDocumentContent(docContentFromJSON);