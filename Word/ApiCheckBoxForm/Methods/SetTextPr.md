# SetTextPr

Sets the text properties to the current form. This method is used only for text and combo box forms.<br>Inherited From: [ApiFormBase#SetTextPr](../../ApiFormBase/Methods/SetTextPr.md)

## Syntax

expression.SetTextPr(oTextPr);

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The text properties that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the text properties to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oCheckBoxForm.SetTextPr(oTextPr);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
oCheckBoxForm.SetTipText("Specify your marital status");
var sTipText = oCheckBoxForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();
```