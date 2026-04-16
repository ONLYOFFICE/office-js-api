// Specify the border which will be displayed below a set of paragraphs which have the same paragraph border settings in a document.

// Add the bottom border to the paragraph in a document.

// Get the first paragraph and set its border in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
paragraph.SetBottomBorder("single", 8, 0, 255, 111, 61);