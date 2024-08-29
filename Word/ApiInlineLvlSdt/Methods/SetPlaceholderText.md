# SetPlaceholderText

Sets the placeholder text to the current inline content control.
Can't be set to checkbox or radio button*

## Syntax

expression.SetPlaceholderText(sText);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current inline content control. |

## Returns

boolean

## Example

This example sets the placeholder text to the inline content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.SetPlaceholderText("Custom placeholder");

```
