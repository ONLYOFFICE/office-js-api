// This example specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border between it and the next paragraph. ");
paragraph.AddText("No additional spacing between the border and the paragraphs is added.");
paragraph.SetBetweenBorder("single", 24, 0, 255, 111, 61);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. We will add a thin black border between it and the next paragraph. ");
paragraph.AddText("We added additional spacing between the border and the paragraphs.");
paragraph.SetBetweenBorder("single", 12, 10, 51, 51, 51);
document.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the third paragraph. The border can be displayed above it only, as there are no new paragraphs after it.");
document.Push(paragraph);