// Detect and identify shapes and elements on a page in a PDF.

// How do I find what objects are drawn on a page in a PDF?

// Extract recognized elements from a page to work with them in a PDF.

const doc = Api.GetDocument();
doc.AddPage();
const page = doc.GetPage(doc.GetPagesCount() - 1);

let drawings = page.RecognizeContent();
if (drawings.length > 0) {
	drawings[0].Select();
}
