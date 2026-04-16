// Get a paragraph element using the position specified in a document.

// How to get the second element of the paragraph in a document.

// Get the word from paragraph using its index and make it bold in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the third run. It ends the paragraph.");
paragraph.AddElement(run);
run = paragraph.GetElement(1);
run.SetBold(true);
doc.Push(paragraph);