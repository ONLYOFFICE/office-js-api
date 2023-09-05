# SetRequired

Specifies if the current form should be required.

## Syntax

expression.SetRequired(bRequired);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | Boolean | Defines if the current form is required (true) or not (false). |

## Returns

Boolean

## Example

This example specifies if the form should be required.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetRequired(true);
var bRequired = oComboBoxForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRequired.docx");
builder.CloseFile();
```