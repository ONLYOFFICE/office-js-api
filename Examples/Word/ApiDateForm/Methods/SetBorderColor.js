// This example sets the border color to the current form.
let document = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = document.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBorderColor(255, 111, 61);