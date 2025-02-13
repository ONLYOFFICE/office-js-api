# CreateDateForm

Creates a date form with the specified date form properties.

## Syntax

```javascript
expression.CreateDateForm(oFormPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [DateFormPr](../../Enumeration/DateFormPr.md) |  | Date form properties. |

## Returns

[ApiDateForm](../../ApiDateForm/ApiDateForm.md)

## Example

This example creates a date form with the common and specific date form properties.

```javascript
let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
```
