// Create a picture form with the specific picture form properties.

// How to create a picture form with its base properties.

// Create the base properties and apply them to the ApiPictureForm object.

const pictureFormPrBase = {
	"scaleFlag": "tooBig",
	"lockAspectRatio": true,
	"respectBorders": false,
	"shiftX": 50,
	"shiftY": 50
};
const pictureForm = Api.CreatePictureForm(pictureFormPrBase);
