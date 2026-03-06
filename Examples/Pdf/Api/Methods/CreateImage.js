// How to create an image object using a url and specifying its width and height.

// Create an image and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const shape = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
page.AddObject(shape);