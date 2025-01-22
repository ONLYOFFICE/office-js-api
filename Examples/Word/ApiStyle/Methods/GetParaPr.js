// This example shows how ot get the paragraph properties of the current style.
let document = Api.GetDocument();
let normalStyle = document.GetDefaultStyle("paragraph");
let paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");