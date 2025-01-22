// This example checks if change tracking mode is enabled or not.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
let trackRevisions = doc.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);