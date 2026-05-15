// Get drawings by placeholder type from a layout and remove them.

// Drawings with specific placeholder types can be filtered and deleted.

// Delete all drawings with the "ctrTitle" placeholder type from the layout.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

let drawingsWithPh = layout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}