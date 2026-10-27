// Duplicate an image and place the copy on another page in a PDF.

// Make a copy of an image in a PDF.

// Create an exact duplicate of an image and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const image = Api.CreateImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 60 * 36000, 60 * 36000);
image.SetPosition(608400, 1267200);
page.AddObject(image);

const copyImage = image.Copy();
const newPage = doc.AddPage(0);
newPage.AddObject(copyImage);
