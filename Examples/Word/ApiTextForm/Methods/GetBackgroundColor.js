// This example shows how to set and get the background color of the current form.

let doc = Api.GetDocument();

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'required': true,
	'placeholder': 'First name',
	'comb': true,
	'maxCharacters': 10,
	'cellWidth': 3,
	'multiLine': false,
	'autoFit': false
});

const themeColor = Api.ThemeColor('accent3');
textForm.SetBackgroundColor(themeColor);
const backgroundColor = textForm.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('Is background color a theme color? -> ' + backgroundColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Background color HEX (for current theme): ' + backgroundColor.GetHex());
paragraph.AddLineBreak();
paragraph.AddElement(textForm);
