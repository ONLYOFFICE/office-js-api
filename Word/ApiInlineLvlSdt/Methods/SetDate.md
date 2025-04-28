# SetDate

Sets the value of a datepicker content control.

## Syntax

```javascript
expression.SetDate(date);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| date | Required | object |  | The date value to set for the datepicker. |

## Returns

boolean

## Example

This example demonstrates how to set a date for a datepicker content control.

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDate(new Date(1998, 4, 10));
```