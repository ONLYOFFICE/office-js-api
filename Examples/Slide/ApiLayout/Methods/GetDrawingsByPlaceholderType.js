// This example gets drawings by placeholder type and removes it from layout.

// How to get all drawings as an array by indicating placeholder type.

// Get drawings by their placeholder type.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

let drawingsWithPh = layout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < drawingsWithPh.length; i++) {
	drawingsWithPh[i].Delete();
}
