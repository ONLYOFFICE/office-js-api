// Group two shapes on a slide, copy the group beside the original, then ungroup the copy in a presentation.

// Keep the original group intact and split its copy into shapes to compare grouped and ungrouped side by side.

// Ungroup the copy so its shapes become individually editable next to the untouched original group.

const presentation = Api.GetPresentation();
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill1, stroke);
shape1.SetPosition(20 * 36000, 20 * 36000);
slide.AddObject(shape1);

const shape2 = Api.CreateShape("ellipse", 60 * 36000, 40 * 36000, fill2, stroke);
shape2.SetPosition(20 * 36000, 70 * 36000);
slide.AddObject(shape2);

const group = slide.GroupDrawings([shape1, shape2]);
if (group) {
	const copy = group.Copy();
	copy.SetPosition(120 * 36000, 20 * 36000);
	slide.AddObject(copy);
	copy.Ungroup();
}