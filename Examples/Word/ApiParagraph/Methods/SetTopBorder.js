// Specify the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings in a document.

// Set top border to the paragraph in a document.

// Border with single line the text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border above it.");
paragraph.SetTopBorder("single", 24, 0, 255, 111, 61);