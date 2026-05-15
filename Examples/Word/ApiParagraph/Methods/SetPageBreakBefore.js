// Force a paragraph to always start at the top of a new page in a document.

// How do I make a paragraph begin on a fresh page in a document?

// Push a paragraph onto the next page by inserting a break before it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetPageBreakBefore(true);
doc.Push(paragraph);