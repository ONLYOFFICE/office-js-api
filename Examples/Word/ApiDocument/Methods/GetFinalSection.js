// This example shows how to get the document final section.
let document = Api.GetDocument();
let section = document.GetFinalSection();
let header = section.GetHeader("default", true);
let paragraph = header.GetElement(0);
paragraph.AddText("This is the text in the default header");
let textPr = document.GetDefaultTextPr();
textPr.SetFontSize(22);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Calibri");
let paraPr = document.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
paragraph = document.GetElement(0);
paragraph.AddText("This is a text in a paragraph.");