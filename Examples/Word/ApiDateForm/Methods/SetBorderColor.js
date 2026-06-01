// Set a border color on a date form in a document.

// How do I change the border color of a date form in a document?

// Highlight a date form with a colored outline to draw attention to it in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBorderColor(Api.HexColor('#FF6F3D'));