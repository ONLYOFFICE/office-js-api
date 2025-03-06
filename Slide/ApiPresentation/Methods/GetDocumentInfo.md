# GetDocumentInfo

Returns the document information:\n-**Application** - the application the document has been created with.\n-**CreatedRaw** - the date and time when the file was created.\n-**Created** - the parsed date and time when the file was created.\n-**LastModifiedRaw** - the date and time when the file was last modified.\n-**LastModified** - the parsed date and time when the file was last modified.\n-**LastModifiedBy** - the name of the user who has made the latest change to the document.\n-**Autrors** - the persons who has created the file.\n-**Title** - this property allows you to simplify your documents classification.\n-**Tags** - this property allows you to simplify your documents classification.\n-**Subject** - this property allows you to simplify your documents classification.\n-**Comment** - this property allows you to simplify your documents classification.

## Syntax

```javascript
expression.GetDocumentInfo();
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to get the document info represented as an object and paste the application name into the document.

```javascript editor-pptx
const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
const oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
const oDocInfo = oPresentation.GetDocumentInfo();
oParagraph.AddText('This document has been created with: ' + oDocInfo.Application);
oSlide.AddObject(oShape);
```
