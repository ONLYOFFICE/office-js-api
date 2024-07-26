// This example sets the tip text to the current form.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetTipText("Enter your first name");
var sTipText = oTextForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTipText.docx");
builder.CloseFile();