// Restore a paragraph from its JSON representation and insert it into a document.

// How do I recreate a paragraph from a JSON object in a document?

// Save a paragraph as JSON and then rebuild it as a bold paragraph in a document.

let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);