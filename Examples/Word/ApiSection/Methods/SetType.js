// This example sets section break type "continuous".
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let section = document.CreateSection(paragraph);
paragraph.AddText("This is section #1 of the document. ");
section = document.GetFinalSection();
section.SetType("continuous");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #2 and we set 'Continuous' type to it. ");
paragraph.AddText("As you can see, the section is not on a new page. ");
paragraph.AddText("If this section had some other type (nextPage, oddPage, evenPage), it would start a new page.");
document.Push(paragraph);