// Insert a new section with custom page size and margins after a paragraph in a document.

// How do I split content into sections with different page layouts in a document?

// Give one part of a document its own column count, margins, and header spacing without affecting the rest in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section = doc.CreateSection(paragraph);
section.SetEqualColumns(1, 720);
section.SetPageSize(12240, 15840);
section.SetPageMargins(1440, 1440, 1440, 1440);
section.SetHeaderDistance(720);
section.SetFooterDistance(576);
paragraph = Api.CreateParagraph();
paragraph.SetSpacingBefore(100, true);
paragraph.SetSpacingAfter(360);
paragraph.AddText("This is a paragraph in a new section");
doc.Push(paragraph);