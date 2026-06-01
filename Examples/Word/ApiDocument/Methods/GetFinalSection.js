// Access the final section and add text to its default header in a document.

// How do I get the last section of a document to modify its header in a document?

// Set default text and paragraph styles while inserting a header into the closing section in a document.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
let paragraph = header.GetElement(0);
paragraph.AddText("This is the text in the default header");
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(22);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Calibri");
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
paragraph = doc.GetElement(0);
paragraph.AddText("This is a text in a paragraph.");