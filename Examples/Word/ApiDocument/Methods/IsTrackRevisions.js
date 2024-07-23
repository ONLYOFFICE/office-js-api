// This example checks if change tracking mode is enabled or not.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
var bTrackRevisions = oDocument.IsTrackRevisions();
oParagraph.AddText("Change tracking is enabled: " + bTrackRevisions);
builder.SaveFile("docx", "IsTrackRevisions.docx");
builder.CloseFile();