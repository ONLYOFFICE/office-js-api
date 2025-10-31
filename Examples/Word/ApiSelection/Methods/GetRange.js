// This example shows how to get the range from the current selection and apply formatting to it.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const run1 = Api.CreateRun();
run1.AddText('This text is normal. ');
paragraph.AddElement(run1);

const run2 = Api.CreateRun();
run2.AddText('And this one is bold.');
paragraph.AddElement(run2);

run2.Select();

const selection = doc.GetSelection();
const range = selection.GetRange();
range.SetBold(true);
