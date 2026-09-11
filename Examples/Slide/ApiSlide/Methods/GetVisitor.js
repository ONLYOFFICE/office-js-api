// Collect all text of a slide, including its speaker notes, with a slide visitor.

// How do I read every paragraph of a slide together with its notes in a presentation?

// Add a shape and notes to the first slide, then gather their paragraphs into one string.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("Slide body");
slide.AddObject(shape);
slide.AddNotesText("Remember to greet the audience.");

const collected = [];
const visitor = slide.GetVisitor();
visitor.Paragraph = function (paragraph) {
	collected.push(paragraph.GetText().trim());
	return true;
};
visitor.Traverse({notes: true});

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText(collected.join(" | "));
slide.AddObject(result);
