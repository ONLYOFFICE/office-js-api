// Access a single page from a PDF.

// Useful for working with a specific page in a PDF.

// Retrieve a page and rotate it in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
page.SetRotation(90);
