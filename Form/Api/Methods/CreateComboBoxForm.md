# CreateComboBoxForm

Creates a combo box / dropdown list with the specified combo box / dropdown list properties.

## Syntax

expression.CreateComboBoxForm(oFormPr);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [ComboBoxFormPr](../../../Enumerations/ComboBoxFormPr.md) | Combobox &#124; null dropdown list properties. |

## Returns

[ApiComboBoxForm](../../../Word/ApiComboBoxForm/ApiComboBoxForm.md)

## Example

This example creates a combo box form with the common and specific combo box form properties.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
builder.SaveFile("docxf", "CreateComboBoxForm.docxf");
builder.CloseFile();
```