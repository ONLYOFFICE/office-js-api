// Move the cursor to a specific page in a document.

// How do I navigate to a particular page number in a document?

// Jump the editing position to a target page so that typed text lands on that page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first page.");
let oPage2 = Api.CreateParagraph();
oPage2.AddText("This is the second page.");
oPage2.GetParaPr().SetPageBreakBefore(true);
doc.Push(oPage2);
let oPage3 = Api.CreateParagraph();
oPage3.AddText("This is the third page.");
oPage3.GetParaPr().SetPageBreakBefore(true);
doc.Push(oPage3);
doc.GoToPage(1);
doc.EnterText("The cursor was moved to page 2.");