# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies if the contents of the current Range are displayed struck through or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) | null

## Example

This example specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetStrikeout(true);
```
