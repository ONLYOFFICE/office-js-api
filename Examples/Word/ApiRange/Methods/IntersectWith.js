// This example returns a new range as the intersection of the current range with another range.

// How to intersect two ranges into the new one.

// Create a range by intersection of two and make its text bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Lorem ipsum dolor sit amet,");
paragraph.AddText(" consectetuer adipiscing elit,");
paragraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
let rangeFirst = doc.GetRange(0, 49);
let rangeSecond = doc.GetRange(22, 123);
let range = rangeFirst.IntersectWith(rangeSecond);
range.SetBold(true);