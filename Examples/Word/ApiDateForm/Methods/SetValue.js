// Set the date value of a date form using a Date object.

// The SetValue method accepts either a Date instance or a date string and applies it to the form.

// Create a date form and assign a specific date using SetValue.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "EventDate", "tip": "Enter the event date", "required": true, "placeholder": "Event date", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetValue(new Date(2024, 0, 15));
