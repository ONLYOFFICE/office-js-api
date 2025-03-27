# GetFormsByTag

Returns a list of all forms in the document with the specified tag name.

## Syntax

```javascript
expression.GetFormsByTag(sTag);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTag | Required | string |  | Form tag. |

## Returns

[ApiForm](../../Enumeration/ApiForm.md)[]

## Example

This example shows how to get a list of all forms in the document with the specified tag name.

```javascript editor-pdf
let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let comboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
paragraph.AddLineBreak();
paragraph.AddElement(comboBoxForm);
let forms = doc.GetFormsByTag("form_1");
forms[0].SetText("John Smith");
forms[1].SelectListValue("USA");
```
