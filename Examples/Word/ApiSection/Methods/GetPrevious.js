// This example shows how to get the previous section.
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