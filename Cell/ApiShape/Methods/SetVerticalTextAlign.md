# SetVerticalTextAlign

Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

## Syntax

```javascript
expression.SetVerticalTextAlign(sVerticalAlign);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVerticalAlign | Required | "top" \| "center" \| "bottom" |  | The vertical alignment type for the shape inner contents. |

## Returns

boolean

## Example

This example sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

```javascript editor-xlsx
// How to specify a vertical alignment of a shape content.

// Set text vertical alignment of a shape to bottom.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
oDocContent.RemoveAllElements();
oShape.SetVerticalTextAlign("bottom");
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
oParagraph.AddText("aligning it vertically by the bottom.");
oDocContent.Push(oParagraph);
```
