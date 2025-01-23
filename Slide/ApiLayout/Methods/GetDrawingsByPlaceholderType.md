# GetDrawingsByPlaceholderType

Returns an array of drawings by the specified placeholder type.

## Syntax

expression.GetDrawingsByPlaceholderType(sType);

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | The placeholder type. |

## Returns

[Drawing[]](../../Enumeration/Drawing.md)

## Example

This example gets drawings by placeholder type and removes it from layout

```javascript
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oMaster = oPresentation.GetMaster(0);
let oLayout = oMaster.GetLayout(0);
let aDrawingsWithPh = oLayout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
    aDrawingsWithPh[i].Delete();
}

```
