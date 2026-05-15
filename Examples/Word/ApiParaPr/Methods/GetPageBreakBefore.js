// Read whether a paragraph is set to start on a new page in a document.

// How do I check if a page break is applied before a paragraph in a document?

// Confirm that a paragraph's page break setting is active by reading its value and displaying it in a document.

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