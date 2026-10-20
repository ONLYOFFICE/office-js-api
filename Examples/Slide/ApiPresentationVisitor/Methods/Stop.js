// Find the first slide that mentions a word and stop the presentation visitor there.

// How do I stop walking a presentation as soon as the first match is found?

// Add text to two slides, then stop at the first paragraph containing the search word.

const presentation = Api.GetPresentation();
const first = presentation.GetSlideByIndex(0);
first.RemoveAllObjects();
const second = Api.CreateSlide();
presentation.AddSlide(second);

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const agenda = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
agenda.SetPosition(608400, 1267200);
agenda.GetDocContent().GetElement(0).AddText("Agenda");
first.AddObject(agenda);
const budget = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
budget.SetPosition(608400, 1267200);
budget.GetDocContent().GetElement(0).AddText("Budget overview");
second.AddObject(budget);

let slideNumber = 0;
let foundOn = -1;
const visitor = presentation.GetVisitor();
visitor.Slide = function () {
	slideNumber += 1;
	return false;
};
visitor.Paragraph = function (paragraph) {
	if (paragraph.GetText().indexOf("Budget") !== -1) {
		foundOn = slideNumber;
		visitor.Stop();
	}
	return true;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Budget is first mentioned on slide " + foundOn);
first.AddObject(result);
