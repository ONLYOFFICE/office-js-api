# ApiSlide

Represents the ApiSlide class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddObject](./Methods/AddObject.md) | boolean | Adds an object (image, shape or chart) to the current presentation slide. |
| [ApplyLayout](./Methods/ApplyLayout.md) | boolean | Applies the specified layout to the current slide.\nThe layout must be in slide master. |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | Applies the specified theme to the current slide. |
| [ClearBackground](./Methods/ClearBackground.md) | boolean | Clears the slide background. |
| [Copy](./Methods/Copy.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Creates a copy of the current slide object. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current slide from the presentation. |
| [Duplicate](./Methods/Duplicate.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Creates a duplicate of the specified slide object, adds the new slide to the slides collection. |
| [FollowLayoutBackground](./Methods/FollowLayoutBackground.md) | boolean | Sets the layout background as the background of the slide. |
| [FollowMasterBackground](./Methods/FollowMasterBackground.md) | boolean | Sets the master background as the background of the slide. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns an array with all the chart objects from the slide. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array with all the drawing objects from the slide. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns an array with all the image objects from the slide. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns an array with all the OLE objects from the slide. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns an array with all the shape objects from the slide. |
| [GetClassType](./Methods/GetClassType.md) | "slide" | Returns the type of the ApiSlide class. |
| [GetDrawingsByPlaceholderType](./Methods/GetDrawingsByPlaceholderType.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array of drawings by the specified placeholder type. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the slide height in English measure units. |
| [GetLayout](./Methods/GetLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns a layout of the current slide. |
| [GetSlideIndex](./Methods/GetSlideIndex.md) | number | Returns a position of the current slide in the presentation. |
| [GetTheme](./Methods/GetTheme.md) | [ApiTheme](../ApiTheme/ApiTheme.md) | Returns a theme of the current slide. |
| [GetVisible](./Methods/GetVisible.md) | boolean | Returns the visibility of the current presentation slide. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the slide width in English measure units. |
| [GroupDrawings](./Methods/GroupDrawings.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings in the current slide. |
| [MoveTo](./Methods/MoveTo.md) | boolean | Moves the current slide to a specific location within the same collection. |
| [RemoveAllObjects](./Methods/RemoveAllObjects.md) | None | Removes all the objects from the current slide. |
| [RemoveObject](./Methods/RemoveObject.md) | boolean | Removes objects (image, shape or chart) from the current slide. |
| [Select](./Methods/Select.md) | None | Selects the current slide. |
| [SetBackground](./Methods/SetBackground.md) | boolean | Sets the background to the current presentation slide. |
| [SetVisible](./Methods/SetVisible.md) | boolean | Sets the visibility to the current presentation slide. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiSlide object into the JSON object. |
