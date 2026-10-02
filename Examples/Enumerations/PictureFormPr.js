// Create a picture form with the common and specific picture form properties.

// How do I set the properties of a picture form?

// Specify the picture form properties like placeholder, tip text, position, key, etc.

let pictureFormPr = {
	"key": "Personal information",
	"tip": "Upload your photo",
	"required": true,
	"placeholder": "Photo",
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
};
let pictureForm = Api.CreatePictureForm(pictureFormPr);
