# SetFormKey

Sets a key to the current form.<br>Inherited From: [ApiFormBase#SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)

## Syntax

expression.SetFormKey(sKey);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sKey | Required | String | Form key. |

## Returns

Boolean

## Example

This example sets a key to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetFormKey("Personal information");
var sKey = oComboBoxForm.GetFormKey();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form key: " + sKey);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetFormKey.docx");
builder.CloseFile();
```