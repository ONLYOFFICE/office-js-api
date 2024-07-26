# Duplicate

Creates a duplicate of the specified slide object, adds the new slide to the slides collection.

## Syntax

expression.Duplicate(nPos);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiPresentation.GetSlidesCount() | Position where the new slide will be added. |

## Returns

ApiSlide, null