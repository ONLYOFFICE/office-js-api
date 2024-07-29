# IsRequired

Checks if the current form is required.

## Syntax

expression.IsRequired();

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if the current form is required.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var bRequired = oTextForm.IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
```
