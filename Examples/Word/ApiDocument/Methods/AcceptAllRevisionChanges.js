// This example accepts all changes made in review mode.
let document = Api.GetDocument();
let paragraph1 = document.GetElement(0);
document.SetTrackRevisions(true);
paragraph1.AddText("Reviewing documents");
paragraph1.SetJc("center");
paragraph1.SetFontSize(24);
paragraph1.SetBold(true);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
document.Push(paragraph2);
document.AcceptAllRevisionChanges();
document.SetTrackRevisions(false);
let paragraph = Api.CreateParagraph();
paragraph.AddText("All revision changes in this document were accepted.");
document.Push(paragraph);