// This example shows how to get a collection of paragraphs that represents all the paragraphs in the specified range.
let doc = editor.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = editor.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold("true");