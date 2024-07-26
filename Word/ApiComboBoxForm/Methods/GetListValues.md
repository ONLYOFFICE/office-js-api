# GetListValues

Returns the list values from the current combo box.

## Syntax

expression.GetListValues();

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Array.<string>

## Example

This example shows how to get the list values from the combo box.

```javascript
var oDocument = Api.GetDocument();
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oComboBoxForm);
oComboBoxForm.SetListValues(["Latvia", "USA", "UK"]);
var aListValues = oComboBoxForm.GetListValues();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Combo box list values: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aListValues.length; i++ ){
	oParagraph.AddText(aListValues[i]);
	oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
```
