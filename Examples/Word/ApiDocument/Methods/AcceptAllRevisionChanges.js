// Accept all tracked revision changes in a document.

// How do I accept all pending revision changes at once in a document?

// Finalize a reviewed document by approving every tracked edit in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph1.AddText("Reviewing documents");
paragraph1.SetJc("center");
paragraph1.SetFontSize(24);
paragraph1.SetBold(true);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
doc.Push(paragraph2);
doc.AcceptAllRevisionChanges();
doc.SetTrackRevisions(false);
let paragraph = Api.CreateParagraph();
paragraph.AddText("All revision changes in this document were accepted.");
doc.Push(paragraph);