// Read and modify the default paragraph formatting properties in a document.

// How do I change the default line spacing and paragraph spacing for all paragraphs in a document?

// Adjust justification and spacing at the style level so every new paragraph inherits the settings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");