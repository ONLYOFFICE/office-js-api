// Transforms a paragraph into JSON and then restores it from JSON.

// Create a paragraph, convert it to the JSON object, and then converts it back to the paragraph object in a document.

// How to convert the specified JSON object into the Document Builder object of the corresponding type.

let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);