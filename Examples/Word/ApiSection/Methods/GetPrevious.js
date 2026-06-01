// Access the section that comes before the current one in a document.

// How do I retrieve the section preceding the one I am working with in a document?

// Navigate backward through sections to reach an earlier part of a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section1 = doc.CreateSection(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph in the first section");
doc.Push(paragraph);
let section2 = doc.CreateSection(paragraph);
let previousSection = section2.GetPrevious();
previousSection.SetPageMargins(7200, 2880, 1440, 5760);