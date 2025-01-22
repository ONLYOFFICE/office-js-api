// This example specifies that when rendering the document using a paginated view, the contents of the current paragraph are rendered at the beginning of a new page in the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetPageBreakBefore(true);
doc.Push(paragraph);