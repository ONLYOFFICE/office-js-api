// Set a background color on a date form in a document.

// How do I apply a custom background color to a date form in a document?

// Give a date form a distinctive fill color to make it stand out visually in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));