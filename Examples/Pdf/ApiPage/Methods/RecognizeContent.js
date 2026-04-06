// How to recognize content on a page.

// Get recognized drawing on a page and select it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let drawings = page.RecognizeContent();
drawings[0].Select();