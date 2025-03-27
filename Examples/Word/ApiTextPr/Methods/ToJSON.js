// This example converts the ApiTextPr object into the JSON object.
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let json = textPr.ToJSON(true);
let textPrFromJSON = Api.FromJSON(json);
textPrFromJSON.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
paragraph.SetTextPr(textPrFromJSON);