// This example shows how to get an array of all paragraphs from the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
doc.AddElement(1, paragraph);
let paragraphs = doc.GetAllParagraphs();
paragraphs[0].SetBold(true);