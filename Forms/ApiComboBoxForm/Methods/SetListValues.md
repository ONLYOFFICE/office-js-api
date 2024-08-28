# SetListValues

Sets the list values to the current combo box.

## Syntax

expression.SetListValues(aListString);

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aListString | Required | Array.&lt;string&gt; |  | The combo box list values. |

## Returns

boolean

## Example

This example sets the list values to the current combo box.

```javascript
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
```
