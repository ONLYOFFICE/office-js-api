// This example shows how to create a drop down list content control.
let doc = Api.GetDocument();
let cc = Api.CreateContentControlComboBox([{Display: 'one', Value: '1'}, {Display: 'two', Value: '2'}], '2');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddInlineLvlSdt(cc);
doc.Push(infoParagraph);