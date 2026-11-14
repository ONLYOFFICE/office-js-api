// Count the number of elements inside a paragraph in a document.

// How do I count the elements that make up a paragraph in a document?

// Track how the element count changes as new runs are added to a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let firstRun = paragraph.GetElement(0);
firstRun.AddText("The first paragraph element. ");
firstRun.SetBold(true);
let secondRun = Api.CreateRun();
secondRun.AddText("The second paragraph element.");
secondRun.SetItalic(true);
paragraph.AddElement(secondRun);
let count = paragraph.GetElementsCount();
let report = Api.CreateParagraph();
report.AddText("Number of paragraph elements: " + count);
doc.Push(report);