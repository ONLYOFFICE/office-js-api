# MoveCursorOutside

Places a cursor before/after the current form.

## Syntax

expression.MoveCursorOutside(isAfter);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | Optional | boolean | true | Specifies whether a cursor will be placed before (false) or after (true) the current form. |

## Returns

This method doesn't return any data.

## Example



```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetText("The cursor will be placed after the current form.");
oTextForm.MoveCursorOutside(true);
```
