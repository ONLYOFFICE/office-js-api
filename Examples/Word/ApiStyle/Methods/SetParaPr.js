// This example applies paragraph settings to the specified style.

// Creates a paragraph, adds a text to it, and sets the line spacing and justify.

// Specifies the ApiTextPr object and applies its settings to the ApiStyle object.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = Api.CreateParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
normalStyle.SetParaPr(paraPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
doc.Push(paragraph);