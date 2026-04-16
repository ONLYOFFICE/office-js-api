// Remove page from document in a PDF document.

// How can I remove the page using a document in a PDF document?

// Remove the page for a document in a PDF document.

let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);