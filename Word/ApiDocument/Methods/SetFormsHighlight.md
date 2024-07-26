# SetFormsHighlight

Sets the highlight to the forms in the document.

## Syntax

expression.SetFormsHighlight(r, g, b, bNone);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |
| bNone | Optional | boolean | false | Defines that highlight will not be set. |

## Returns

This method doesn't return any data.

## Example

This example sets the highlight to the forms in the document.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oDocument.SetFormsHighlight(255, 111, 61);
```
