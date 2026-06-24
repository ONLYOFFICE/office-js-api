// Rotate a page to a specific angle in a PDF.

// Useful for turning a page to face the right direction in a PDF.

// Apply a rotation transformation to change the page orientation in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
page.SetRotation(90);
