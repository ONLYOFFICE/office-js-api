// Detect and identify shapes and elements on a page in a PDF.

// Useful for finding what objects are drawn on a page in a PDF.

// Extract recognized elements from a page to work with them in a PDF.

const doc = Api.GetDocument();
doc.AddPage(0);
const page = doc.GetPage(0);

let drawings = page.RecognizeContent();
if (drawings.length > 0) {
	drawings[0].Select();
}
