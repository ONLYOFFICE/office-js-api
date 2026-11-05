// Count the drawings on every slide of a presentation with a presentation visitor.

// The Slide hook receives each slide, and returning true skips the drawings and text of the slide.

// Add a second slide with two shapes and write the number of drawings on each slide into a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const title = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
title.SetPosition(608400, 1267200);
title.GetDocContent().GetElement(0).AddText("Overview");
slide.AddObject(title);
const second = Api.CreateSlide();
presentation.AddSlide(second);
for (let i = 0; i < 2; ++i) {
	const shape = Api.CreateShape("rect", 140 * 36000, 60 * 36000, fill, stroke);
	shape.SetPosition(608400 + i * 160 * 36000, 1267200);
	shape.GetDocContent().GetElement(0).AddText("Item " + (i + 1));
	second.AddObject(shape);
}

const counts = [];
const visitor = presentation.GetVisitor();
visitor.Slide = function (currentSlide) {
	counts.push("slide " + (currentSlide.GetSlideIndex() + 1) + ": " + currentSlide.GetAllDrawings().length);
	return true;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Drawings per slide: " + counts.join(", "));
slide.AddObject(result);