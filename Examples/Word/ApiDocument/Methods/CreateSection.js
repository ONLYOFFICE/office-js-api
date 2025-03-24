// This example creates a new document section which ends at the specified paragraph.

// How to create a section indicating its size, margins, etc.

// Create a paragraph under the section.

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