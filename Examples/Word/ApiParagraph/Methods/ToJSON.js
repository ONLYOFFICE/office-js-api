// This example converts the ApiParagraph object into the JSON object.
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
let json = paragraph.ToJSON(false, true);
let paragraphFromJSON = Api.FromJSON(json);
paragraphFromJSON.SetBold(true);
doc.AddElement(0, paragraphFromJSON);