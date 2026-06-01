// Retrieve the indexes of all currently visible pages in a document.

// How do I get a list of page numbers visible to the user in a document?

// Useful when synchronizing a thumbnail panel or sidebar with the pages the reader can see in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current visibles pages indexes is: " + doc.GetCurrentVisiblePages());
doc.Push(paragraph);