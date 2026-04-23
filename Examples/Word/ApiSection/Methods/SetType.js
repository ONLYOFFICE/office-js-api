// Control where a new section begins on the page in a document.

// How do I make a section start without forcing a page break in a document?

// Keep two sections flowing on the same page instead of splitting them across pages in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.CreateSection(paragraph);
paragraph.AddText("This is section #1 of the document. ");
section = doc.GetFinalSection();
section.SetType("continuous");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #2 and we set 'Continuous' type to it. ");
paragraph.AddText("As you can see, the section is not on a new page. ");
paragraph.AddText("If this section had some other type (nextPage, oddPage, evenPage), it would start a new page.");
doc.Push(paragraph);