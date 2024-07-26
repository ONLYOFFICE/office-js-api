# SetTime

Sets the timestamp to the current form.

## Syntax

expression.SetTime(nTimeStamp);

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | number |  | The timestamp that will be set to the current date form. |

## Returns

boolean

## Example

This example shows how to set the date to a date form.

```javascript
var oDocument = Api.GetDocument();
var oDateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oDateForm);
oDateForm.SetTime(new Date().getTime());
var nTimeStamp = oDateForm.GetTime();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first date form from this document has setted time: " + new Date(nTimeStamp));
oDocument.Push(oParagraph);
```
