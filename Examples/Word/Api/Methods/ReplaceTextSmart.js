// Replace selected text with new text while keeping the original bold and italic formatting in a document.

// How do I replace text without losing its bold or italic styling in a document?

// Swap out paragraph text for new content and retain the existing character formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the normal text. ");
paragraph.AddText("The is bold text. ").SetBold(true);
paragraph.AddText("This is italic text.").SetItalic(true);

paragraph.GetRange().Select();
Api.ReplaceTextSmart(["This is the normal text. This bold text was smart replaced. This is italic text."]);