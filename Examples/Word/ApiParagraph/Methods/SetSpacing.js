// This example sets the text spacing measured in twentieths of a point.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);