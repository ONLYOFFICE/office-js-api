// This example shows how to get the page height.

// How to get the page height.

// Get the final section of the page and get its height.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let height = section.GetPageHeight();
paragraph.AddText("Page height = " + height);