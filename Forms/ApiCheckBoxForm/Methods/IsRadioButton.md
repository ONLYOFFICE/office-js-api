# IsRadioButton

Checks if the current checkbox is a radio button.

## Syntax

expression.IsRadioButton();

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the current checkbox is a radio button.

```javascript
var oDocument = Api.GetDocument();
var oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Married");
oParagraph.AddLineBreak();
oCheckBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
oParagraph.AddElement(oCheckBoxForm);
oParagraph.AddText(" Single");
var bRadioButton = oCheckBoxForm.IsRadioButton();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second form from this document is a radio button: " + bRadioButton);
oDocument.Push(oParagraph);
```
