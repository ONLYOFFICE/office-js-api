// This example shows how to get a collection of section objects in the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a new paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("Scroll down to see the new section.");
let section1 = document.CreateSection(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph in a new section");
document.Push(paragraph);
let sections = document.GetSections();
paragraph = Api.CreateParagraph();
let classType = sections[1].GetClassType();
paragraph.AddText("Class type: " + classType);
document.Push(paragraph);