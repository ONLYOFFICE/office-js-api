// Group two shapes in a document, copy the group beside the original, then ungroup the copy in a document.

// Keep the original group intact and split its copy into drawings to compare grouped and ungrouped side by side.

// Ungroup the copy so its drawings become individually editable next to the untouched original group.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = Api.CreateShape("rect", 40 * 36000, 25 * 36000, fill1, stroke);
paragraph.AddDrawing(shape1);
shape1.SetWrappingStyle("inFront");
shape1.SetHorPosition("page", 20 * 36000);
shape1.SetVerPosition("page", 20 * 36000);

const shape2 = Api.CreateShape("ellipse", 40 * 36000, 25 * 36000, fill2, stroke);
paragraph.AddDrawing(shape2);
shape2.SetWrappingStyle("inFront");
shape2.SetHorPosition("page", 20 * 36000);
shape2.SetVerPosition("page", 55 * 36000);

const group = doc.GroupDrawings([shape1, shape2]);
if (group) {
	const copy = group.Copy();
	paragraph.AddDrawing(copy);
	copy.SetWrappingStyle("inFront");
	copy.SetHorPosition("page", 90 * 36000);
	copy.SetVerPosition("page", 20 * 36000);
	copy.Ungroup();
}