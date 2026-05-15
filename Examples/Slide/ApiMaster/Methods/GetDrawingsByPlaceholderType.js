// Get all drawings by placeholder type from a slide master.

// Retrieve drawings using GetDrawingsByPlaceholderType, specifying the placeholder type.

// Delete all drawings with the specified placeholder type from the master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const aDrawingsWithPh = master.GetDrawingsByPlaceholderType("title");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
	aDrawingsWithPh[i].Delete();
}