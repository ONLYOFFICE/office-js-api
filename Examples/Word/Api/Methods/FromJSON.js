// This example transforms a paragraph into JSON and then restores it from JSON.

// Creates a paragraph, converts it to the JSON object, and then converts it back to the ApiParagraph object.

// How to convert the specified JSON object into the Document Builder object of the corresponding type.

let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);