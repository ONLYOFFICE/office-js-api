# SetComb

Specifies if the text field should be a comb of characters with the same cell width.The maximum number of characters must be set to a positive value.

## Syntax

expression.SetComb(bComb);

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bComb | Required | boolean |  | Defines if the text field is a comb of characters (true) or not (false). |

## Returns

boolean

## Example

This example specifies if the text field should be a comb of characters with the same cell width.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetComb(true);
var bComb = oTextForm.IsComb();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is comb: " + bComb);
oDocument.Push(oParagraph);
```
