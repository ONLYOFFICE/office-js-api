// This example gets the range calculate position mode.

// How to check range calculate position mode.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let run1 = Api.CreateRun();
run1.AddText('First run ');
run1.SetBold(true);

let run2 = Api.CreateRun();
run2.AddText('Second run');
run2.SetItalic(true);

paragraph.AddElement(run1);
paragraph.AddElement(run2);

let range = doc.GetRange(0, 20);

range.MoveCursorToPos(10);

let isEqual = run1.GetText() == doc.GetCurrentRun().GetText();

paragraph = Api.CreateParagraph();
paragraph.AddText(isEqual ? 'Range mode is: "' + range.GetRangeMode() + '"' : 'Script error, contact support');
doc.Push(paragraph);