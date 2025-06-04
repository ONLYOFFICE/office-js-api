// This example sets the text spacing measured in twentieths of a point.

// How to specify the spacing value of paragraph.

// Indicate the paragraph text space.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);