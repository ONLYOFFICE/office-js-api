// Return a new range that goes beyond the specified range in any direction and spans a different range in a document.

// How to expand the first range to the second one in a document.

// Create a range and make it cover a different area in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Lorem ipsum dolor sit amet,");
paragraph.AddText(" consectetuer adipiscing elit,");
paragraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
let rangeFirst = doc.GetRange(0, 22);
let rangeSecond = doc.GetRange(49, 123);
let range = rangeFirst.ExpandTo(rangeSecond);
range.SetItalic(true);