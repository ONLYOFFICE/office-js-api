// Force a paragraph to start at the top of a new page in a document.

// How do I insert a page break before a paragraph in a document?

// Push a section of text onto a fresh page so it always begins on its own page.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetPageBreakBefore(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a page break before a paragraph. ");
paragraph.AddText("The second paragraph will start from a new page, as it has a page break before it. ");
paragraph.AddText("Scroll down to the second page to see it. ");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it has page break before it enabled.");
paragraph.SetStyle(myStyle);
doc.Push(paragraph);