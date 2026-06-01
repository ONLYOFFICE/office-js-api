// Delete a page from a PDF.

// How do I remove an unwanted page from a PDF?

// Delete a specific page number from a PDF.

let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);