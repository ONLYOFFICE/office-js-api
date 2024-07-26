# SetTopBorder

Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.💡 The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block.

## Syntax

expression.SetTopBorder(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | BorderType |  | The border style. |
| nSize | Required | pt_8 |  | The width of the current top border measured in eighths of a point. |
| nSpace | Required | pt |  | The spacing offset above the paragraph measured in points used to place this border. |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.

```javascript
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetTopBorder("single", 24, 0, 255, 111, 61);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is the first paragraph. ");
oParagraph.AddText("The paragraph properties styled above set a border above it.");
```
