# SetPlaceholderText

Sets the placeholder text to the current form. Can't be set to checkbox or radio button.<br>Inherited From: [ApiFormBase#SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | The text that will be set to the current form. |

## Returns

Boolean

## Example

This example sets the placeholder text to the current form.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetPlaceholderText("Country");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
```