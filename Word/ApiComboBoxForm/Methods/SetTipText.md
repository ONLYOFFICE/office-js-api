# SetTipText

Sets the tip text to the current form.<br>Inherited From: [ApiFormBase#SetTipText](../../ApiFormBase/Methods/SetTipText.md)

## Syntax

expression.SetTipText(sText);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Requireds | String | Tip text. |

## Returns

Boolean

## Example

This example sets the tip text to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetTipText("Choose your country");
var sTipText = oComboBoxForm.GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTipText.docx");
builder.CloseFile();
```