// Delete a page from a PDF.

// Remove an unwanted page from a PDF.

// Delete a specific page number from a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
doc.RemovePage(0);