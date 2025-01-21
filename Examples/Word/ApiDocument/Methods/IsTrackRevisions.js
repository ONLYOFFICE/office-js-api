// This example checks if change tracking mode is enabled or not.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
document.SetTrackRevisions(true);
let trackRevisions = document.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);