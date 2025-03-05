# ApiMaster

Represents the ApiMaster class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "master" | Returns the type of the ApiMaster class. |
| [GetLayout](./Methods/GetLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns a layout of the specified slide master by its position. |
| [AddLayout](./Methods/AddLayout.md) | boolean | Adds a layout to the specified slide master. |
| [RemoveLayout](./Methods/RemoveLayout.md) | boolean | Removes the layouts from the current slide master. |
| [GetLayoutsCount](./Methods/GetLayoutsCount.md) | number | Returns a number of layout objects. |
| [AddObject](./Methods/AddObject.md) | boolean | Adds an object (image, shape or chart) to the current slide master. |
| [RemoveObject](./Methods/RemoveObject.md) | boolean | Removes objects (image, shape or chart) from the current slide master. |
| [SetBackground](./Methods/SetBackground.md) | boolean | Sets the background to the current slide master. |
| [ClearBackground](./Methods/ClearBackground.md) | boolean | Clears the slide master background. |
| [Copy](./Methods/Copy.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Creates a copy of the specified slide master object. |
| [Duplicate](./Methods/Duplicate.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified object from the parent if it exists. |
| [GetTheme](./Methods/GetTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) \| null | Returns a theme of the slide master. |
| [SetTheme](./Methods/SetTheme.md) | boolean | Sets a theme to the slide master. Sets a copy of the theme object. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array with all the drawing objects from the slide master. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns an array with all the shape objects from the slide master. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns an array with all the image objects from the slide master. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns an array with all the chart objects from the slide master. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns an array with all the OLE objects from the slide master. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiMaster object into the JSON object. |
| [GetDrawingsByPlaceholderType](./Methods/GetDrawingsByPlaceholderType.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array of drawings by the specified placeholder type. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current slide master. |
