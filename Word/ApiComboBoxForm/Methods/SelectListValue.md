# SelectListValue

Selects the specified value from the combo box list values.

## Syntax

expression.SelectListValue(sValue);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | Required | string |  | The combo box list value that will be selected. |

## Returns

boolean

## Example

This example elects the specified value from the combo box list values.

```javascript
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SelectListValue("USA");
```
