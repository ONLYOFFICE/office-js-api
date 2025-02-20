# GetDrawingsByPlaceholderType

Returns an array of drawings by the specified placeholder type.

## Syntax

```javascript
expression.GetDrawingsByPlaceholderType(sType);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | The placeholder type. |

## Returns

[Drawing[]](../../Enumeration/Drawing.md)

## Example

This example gets drawings by placeholder type and removes it from slide master

```javascript editor-pptx
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oMaster = oPresentation.GetMaster(0);
let aDrawingsWithPh = oMaster.GetDrawingsByPlaceholderType("title");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
    aDrawingsWithPh[i].Delete();
}

```
