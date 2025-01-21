# GetFormsByTag

Returns a list of all forms in the document with the specified tag name.

## Syntax

expression.GetFormsByTag(sTag);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTag | Required | string |  | Form tag. |

## Returns

Array.\<[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)>, Array.\<[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)>

## Example

This example shows how to get a list of all forms in the document with the specified tag name.

```javascript
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "FirstName", "tip": "Enter your first name", "tag": "form_1", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
var oComboBoxForm = Api.CreateComboBoxForm({"key": "Country", "tip": "Choose your country", "tag": "form_1", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
oParagraph.AddLineBreak();
oParagraph.AddElement(oComboBoxForm);
var aForms = oDocument.GetFormsByTag("form_1");
aForms[0].SetText("John Smith");
aForms[1].SelectListValue("USA");
```
