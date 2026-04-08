// This example shows how to get the page break before value of the current paragraph.

// Get the page break before value of the paragraph and display it in the document.

// How to get the page break before value of the ApiParaPr object.

let doc = Api.GetDocument();
doc.Push(Api.CreateParagraph());
let paragraph = doc.GetElement(1);
let paraPr = paragraph.GetParaPr();
paraPr.SetPageBreakBefore(true);
paragraph.AddText("This paragraph starts on a new page.");
let pageBreakBefore = paraPr.GetPageBreakBefore();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Page break before: " + pageBreakBefore);
doc.Push(paragraph2);
