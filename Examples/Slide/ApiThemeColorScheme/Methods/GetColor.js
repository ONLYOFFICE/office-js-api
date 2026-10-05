// Fill shapes with the accent colors of a presentation theme.

// Read the colors of a theme color scheme to reuse them on a slide.

// Get each accent color of the color scheme, fill a shape with it and write its HEX value inside.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const colorScheme = presentation.GetMaster(0).GetTheme().GetColorScheme();
for (let position = 0; position < 6; position++) {
	const color = colorScheme.GetColor(position);
	const shape = Api.CreateShape("rect", 45 * 36000, 30 * 36000, Api.CreateSolidFill(color), Api.CreateStroke(0, Api.CreateNoFill()));
	shape.SetPosition((10 + position * 50) * 36000, 60 * 36000);
	shape.GetContent().GetElement(0).AddText(color.GetHex());
	slide.AddObject(shape);
}