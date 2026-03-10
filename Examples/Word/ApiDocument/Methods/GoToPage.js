// This example moves the cursor to the start of the specified page in the document.

// How to navigate to a specific page in the document.

// Move the cursor to the second page of the document.

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
