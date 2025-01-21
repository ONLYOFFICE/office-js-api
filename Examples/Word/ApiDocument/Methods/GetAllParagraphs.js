// This example shows how to get an array of all paragraphs from the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
document.AddElement(1, paragraph);
let paragraphs = document.GetAllParagraphs();
paragraphs[0].SetBold(true);