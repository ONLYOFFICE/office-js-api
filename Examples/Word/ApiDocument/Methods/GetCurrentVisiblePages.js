// This example shows how to get current visible pages indexes.

// How to get all indexes of non-hidden pages.

// How to display numbers of all visible pages.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current visibles pages indexes is: " + doc.GetCurrentVisiblePages());
doc.Push(paragraph);
