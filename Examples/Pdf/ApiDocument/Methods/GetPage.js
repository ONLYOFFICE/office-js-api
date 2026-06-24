// Access a single page from a PDF.

// Useful for working with a specific page in a PDF.

// Retrieve a page and rotate it in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
page.SetRotation(90);
