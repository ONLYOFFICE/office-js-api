// Insert an image upload field where users can add photos in a document.

// How do I create an image field for users to upload pictures in a document?

// Enable users to fill in a form by selecting or uploading image files in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({
	"key": "Personal information",
	"tip": "Upload your photo",
	"required": true,
	"placeholder": "Photo",
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));