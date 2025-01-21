// This example sets the change tracking mode.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
document.SetTrackRevisions(true);
paragraph.AddText("Track revisions mode was set.");