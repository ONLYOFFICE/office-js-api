// Make every text run of a slide master and its layouts bold with a master visitor.

// How do I apply the same formatting to all text on a slide master and its layouts?

// Get the first master, add a shape with text to it and set bold for all its runs.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 80, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 6000000);
shape.GetDocContent().GetElement(0).AddText("Company confidential");
master.AddObject(shape);

const visitor = master.GetVisitor();
visitor.Run = function (run) {
	run.SetBold(true);
	return true;
};
visitor.Traverse({layouts: true});
