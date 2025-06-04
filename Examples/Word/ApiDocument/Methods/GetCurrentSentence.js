// This example shows how to get the current sentence.

// How to get current sentence of the document.

// Find the current position sentence and add it to the paragraph.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
let run = para1.AddText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
run.MoveCursorToPos(80);

let para2 = Api.CreateParagraph();
para2.AddText("The current sentence is \"" + doc.GetCurrentSentence() + "\"");
doc.Push(para2);