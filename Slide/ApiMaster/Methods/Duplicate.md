# Duplicate

Creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.

## Syntax

expression.Duplicate(nPos);

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiPresentation.GetMastersCount() | Position where the new slide master will be added. |

## Returns

ApiMaster, null