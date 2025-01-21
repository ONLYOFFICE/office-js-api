// This example shows how to get a set of default properties for the text run in the current document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let textPr = document.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");