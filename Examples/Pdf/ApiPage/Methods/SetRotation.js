// Rotate a page to a specific angle in a PDF.

// Useful for turning a page to face the right direction in a PDF.

// Apply a rotation transformation to change the page orientation in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
page.SetRotation(90);
