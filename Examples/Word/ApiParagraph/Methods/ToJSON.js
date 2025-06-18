// This example converts the ApiParagraph object into the JSON object.

// How to get a JSON from the inline text control.

// Convert the inline text control to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
doc.AddElement(0, paragraphFromJSON);