# ApiLayout

Represents the ApiLayout class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "layout" | Returns the type of the ApiLayout class. |
| [SetName](./Methods/SetName.md) | boolean | Sets a name to the current layout. |
| [GetName](./Methods/GetName.md) | string | Returns a name of the current layout. |
| [AddObject](./Methods/AddObject.md) | boolean | Adds an object (image, shape or chart) to the current slide layout. |
| [RemoveObject](./Methods/RemoveObject.md) | boolean | Removes objects (image, shape or chart) from the current slide layout. |
| [SetBackground](./Methods/SetBackground.md) | boolean | Sets the background to the current slide layout. |
| [ClearBackground](./Methods/ClearBackground.md) | boolean | Clears the slide layout background. |
| [FollowMasterBackground](./Methods/FollowMasterBackground.md) | boolean | Sets the master background as the background of the layout. |
| [Copy](./Methods/Copy.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Creates a copy of the specified slide layout object. Copies without master slide. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified object from the parent slide master if it exists. |
| [Duplicate](./Methods/Duplicate.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Creates a duplicate of the specified slide layout object, adds the new slide layout to the slide layout collection. |
| [MoveTo](./Methods/MoveTo.md) | boolean | Moves the specified layout to a specific location within the same collection. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array with all the drawing objects from the slide layout. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns an array with all the shape objects from the slide layout. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns an array with all the image objects from the slide layout. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns an array with all the chart objects from the slide layout. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns an array with all the OLE objects from the slide layout. |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) | Returns the parent slide master of the current layout. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiLayout object into the JSON object. |
| [GetDrawingsByPlaceholderType](./Methods/GetDrawingsByPlaceholderType.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array of drawings by the specified placeholder type. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current layout. |
