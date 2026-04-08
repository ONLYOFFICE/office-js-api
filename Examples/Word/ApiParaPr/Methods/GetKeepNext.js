// This example shows how to get the keep next value of the current paragraph.

// Get the keep next value of the paragraph and display it in the document.

// How to get the keep next value of the ApiParaPr object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetKeepNext(true);
paragraph.AddText("This is a paragraph kept on the same page as the following paragraph.");
let keepNext = paraPr.GetKeepNext();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Keep next: " + keepNext);
doc.Push(paragraph2);
