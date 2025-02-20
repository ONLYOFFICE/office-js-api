# ToJSON

Converts the ApiLayout object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteMaster, bWriteTableStyles);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteMaster | Optional | bool | false | Specifies if the slide master will be written to the JSON object or not. |
| bWriteTableStyles | Optional | bool | false | Specifies whether to write used table styles to the JSON object (true) or not (false). |

## Returns

JSON

## Example

This example converts the ApiLayout object into the JSON object.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var json = oLayout.ToJSON(true, false);
var oLayoutFromJSON = Api.FromJSON(json);
oMaster.AddLayout(0, oLayoutFromJSON);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var sType = oLayoutFromJSON.GetClassType();
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Class type = " + sType);
oLayoutFromJSON.AddObject(oShape);
oSlide.ApplyLayout(oLayoutFromJSON);
```
