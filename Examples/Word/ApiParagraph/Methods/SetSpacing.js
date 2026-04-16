// Set the text spacing measured in twentieths of a point in a document.

// How to specify the spacing value of paragraph in a document.

// Indicate the paragraph text space in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);