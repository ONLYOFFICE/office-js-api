// This example sets the change tracking mode.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
oParagraph.AddText("Track revisions mode was set.");