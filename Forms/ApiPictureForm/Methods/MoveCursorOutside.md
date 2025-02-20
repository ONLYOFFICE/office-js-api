# MoveCursorOutside

Places a cursor before/after the current form.

## Syntax

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | Optional | boolean | true | Specifies whether a cursor will be placed before (false) or after (true) the current form. |

## Returns

This method doesn't return any data.

## Example



```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("The cursor will be placed after the current form.");
textForm.MoveCursorOutside(true);
```
