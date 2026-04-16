// Get drawings by placeholder type and remove it from layout in a presentation.

// How to get all drawings as an array by indicating placeholder type in a presentation.

// Get drawings by their placeholder type in a presentation.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

let drawingsWithPh = layout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}