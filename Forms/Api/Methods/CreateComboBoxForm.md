# CreateComboBoxForm

Creates a combo box / dropdown list with the specified combo box / dropdown list properties.

## Syntax

expression.CreateComboBoxForm(oFormPr);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [ComboBoxFormPr](../../Enumeration/ComboBoxFormPr.md) |  | Combo box / dropdown list properties. |

## Returns

[ApiComboBoxForm](../../ApiComboBoxForm/ApiComboBoxForm.md)

## Example

This example creates a combo box form with the common and specific combo box form properties.

```javascript
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
```
