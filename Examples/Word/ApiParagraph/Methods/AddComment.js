// This example adds a comment to the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
paragraph.AddComment("comment", "Jane");