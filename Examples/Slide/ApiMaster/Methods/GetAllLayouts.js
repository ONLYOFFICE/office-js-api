// This example shows how to get all layouts of the specified slide master

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
const oMaster = oPresentation.GetMaster(0);

oSlide.RemoveAllObjects();
oMaster.RemoveLayout(0, oMaster.GetAllLayouts().length);

const nLayoutsCount = 3;
for (let i = 0; i < nLayoutsCount; i++) {
	const oLayout = Api.CreateLayout();
	oMaster.AddLayout(0, oLayout);
}

const oLabelFill = Api.CreateSolidFill(Api.CreateRGBColor(210, 230, 250));
const oLabelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oLabel = Api.CreateShape('rect', 60 * 36000, 20 * 36000, oLabelFill, oLabelStroke);
oLabel.SetPosition(0, 3 * 36000);
oSlide.AddObject(oLabel);

const aLayouts = oMaster.GetAllLayouts();
const oDocContent = oLabel.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
oParagraph.AddText('Number of master slide layouts: ' + aLayouts.length);
