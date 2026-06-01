// Navigate to the section that follows the current one in a document.

// How do I access the section that comes right after a given section in a document?

// Move forward to the next section to adjust its layout settings in a document.

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
let nextSection = section1.GetNext();
nextSection.SetPageMargins(7200, 2880, 1440, 5760);