# CreateTextForm

Creates a text field with the specified text field properties.

## Syntax

```javascript
expression.CreateTextForm(oFormPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFormPr | Required | [TextFormPr](../../Enumeration/TextFormPr.md) |  | Text field properties. |

## Returns

[ApiTextForm](../../ApiTextForm/ApiTextForm.md)

## Example

This example creates a a text form with the common and specific text form properties.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
```
