// This example transforms paragraph to JSON then restore it from JSON.
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
Api.GetDocument().AddElement(0, paragraphFromJSON);