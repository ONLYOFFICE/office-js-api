# IsDatePicker

Checks if the content control is a datepicker.

## Syntax

```javascript
expression.IsDatePicker();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to check if a content control is a datepicker.

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsDatePicker() ? "true" : "false");
doc.AddElement(1, paragraph1);
```
