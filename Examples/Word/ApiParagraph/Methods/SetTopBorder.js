// This example specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border above it.");
paragraph.SetTopBorder("single", 24, 0, 255, 111, 61);