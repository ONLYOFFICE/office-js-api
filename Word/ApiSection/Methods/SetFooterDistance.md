# SetFooterDistance

Specifies the distance from the bottom edge of the page to the bottom edge of the footer.

## Syntax

```javascript
expression.SetFooterDistance(nDistance);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDistance | Required | [twips](../../Enumeration/twips.md) |  | The distance from the bottom edge of the page to the bottom edge of the footer measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies the distance from the bottom edge of the page to the bottom edge of the footer.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
section.SetFooterDistance(1440);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer. ");
paragraph.AddText("The distance from the page bottom to the footer is 1 inch (1440 twentieths of a point).");
```
