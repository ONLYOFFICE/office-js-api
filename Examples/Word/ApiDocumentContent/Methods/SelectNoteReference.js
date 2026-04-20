// Select footnote/endnote reference in the document.

// How to add footnote to the document.

// How to select footnote reference and increate its font size in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

footnote.SelectNoteReference();

doc.GetRangeBySelect().SetFontSize(48);