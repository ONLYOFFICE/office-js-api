// This example shows how to get all images from the current presentation.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

// Add multiple copies of the same image to the slide
const nCopiesCount = 3;
for (let i = 0; i < nCopiesCount; i++) {
	const sImageSource = 'https://api.onlyoffice.com/img/logo.svg';
	const oDrawing = Api.CreateImage(sImageSource, 174 * 36000, 38 * 36000);
	oDrawing.SetPosition(0, i * 38 * 36000);
	oSlide.AddObject(oDrawing);
}

// Create a heart-shaped shape with fill and stroke
const oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 153, 204));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape('heart', 38 * 36000, 38 * 36000, oFill, oStroke);
oShape.SetPosition(184 * 36000, 0 * 36000);
oSlide.AddObject(oShape);

// Add the number of images in the presentation as text inside the heart shape
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
const nImagesCount = oPresentation.GetAllImages().length;
oParagraph.AddText('' + nImagesCount);
