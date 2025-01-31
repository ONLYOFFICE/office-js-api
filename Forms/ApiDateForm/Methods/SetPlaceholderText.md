# SetPlaceholderText

Sets the placeholder text to the current form.
Can't be set to checkbox or radio button.*

## Syntax

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current form. |

## Returns

boolean

## Example

This example sets the placeholder text to the form.

```javascript
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```
