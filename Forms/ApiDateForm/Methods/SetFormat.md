# SetFormat

Sets the date format to the current form.

## Syntax

expression.SetFormat(sFormat);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | string |  | The date format. For example, mm.dd.yyyy |

## Returns

boolean

## Example

This example shows how to set the date format on a date form.

```javascript
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetFormat("dddd, dd MMMM yyyy");
var sFormat = oDateForm.GetFormat();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first date form from this document has format: " + sFormat);
oDocument.Push(oParagraph);
```
