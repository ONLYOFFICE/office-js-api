// Replace text while preserving formatting and other things.

// Add a text to the first paragraph of the document, set the bold and italic properties to it, and replace it with a new text preserving the text style.

// Replace each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

// How to replace the selected range object with a new text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the normal text. ");
paragraph.AddText("The is bold text. ").SetBold(true);
paragraph.AddText("This is italic text.").SetItalic(true);

paragraph.GetRange().Select();
Api.ReplaceTextSmart(["This is the normal text. This bold text was smart replaced. This is italic text."]);