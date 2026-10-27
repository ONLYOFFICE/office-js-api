// Determine the index of an element within the document content.

// The index reflects the position of a specific element inside the document content.

// Locate a paragraph within the document content and report its index.

let doc = Api.GetDocument();
let first = Api.CreateParagraph();
first.AddText("First paragraph");
doc.Push(first);
let second = Api.CreateParagraph();
second.AddText("Second paragraph");
doc.Push(second);
let index = doc.GetElementIndex(second);
let report = Api.CreateParagraph();
report.AddText("The second paragraph is at index " + index + ".");
doc.Push(report);
