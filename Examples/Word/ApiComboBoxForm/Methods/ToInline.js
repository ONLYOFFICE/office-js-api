// This example converts the form to an inline form.
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.ToFixed(7 * 240, 2 * 240);
var oCopyForm = oComboBoxForm.Copy();
oParagraph = Api.CreateParagraph();
oParagraph.AddElement(oCopyForm);
oDocument.Push(oParagraph);
oCopyForm.ToInline();
var bFixed = oComboBoxForm.IsFixed();
var bFixedCopy = oCopyForm.IsFixed();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document has a fixed size: " + bFixed);
oParagraph.AddLineBreak();
oParagraph.AddText("The second form from this document has a fixed size: " + bFixedCopy);
oDocument.Push(oParagraph);