// This example shows how to get the next section.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section1 = document.CreateSection(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph in the first section");
document.Push(paragraph);
let section2 = document.CreateSection(paragraph);
let nextSection = section1.GetNext();
nextSection.SetPageMargins(7200, 2880, 1440, 5760);