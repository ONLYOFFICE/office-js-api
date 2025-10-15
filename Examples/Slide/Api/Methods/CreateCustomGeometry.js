// This example demonstrates creating a preset geometry in presentations.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);

 // Airplane shape in EMU units
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.SetFill("norm");
path.SetStroke(true);

// Start point
path.MoveTo(14 * 36000, 90 * 36000);

// First cubic bezier
path.CubicBezTo(
    14 * 36000, 86 * 36000,
    16 * 36000, 83 * 36000,
    19 * 36000, 79 * 36000
);

// Line to left wing tip
path.LineTo(1 * 36000, 68 * 36000);

// Cubic bezier for wing curve
path.CubicBezTo(
    0, 67 * 36000,
    0, 66 * 36000,
    0, 66 * 36000
);

// Wing detail
path.LineTo(4 * 36000, 62 * 36000);

path.CubicBezTo(
    5 * 36000, 62 * 36000,
    6 * 36000, 62 * 36000,
    6 * 36000, 62 * 36000
);

path.LineTo(28 * 36000, 66 * 36000);
path.LineTo(46 * 36000, 45 * 36000);
path.LineTo(4 * 36000, 16 * 36000);

// Wing connection curve
path.CubicBezTo(
    3 * 36000, 15 * 36000,
    3 * 36000, 14 * 36000,
    4 * 36000, 13 * 36000
);

path.LineTo(10 * 36000, 8 * 36000);
path.LineTo(65 * 36000, 24 * 36000);
path.LineTo(82 * 36000, 6 * 36000);

// Nose section with cubic bezier
path.CubicBezTo(
    87 * 36000, 1 * 36000,
    92 * 36000, -1 * 36000,
    97 * 36000, 0
);

path.CubicBezTo(
    99 * 36000, 1 * 36000,
    100 * 36000, 2 * 36000,
    100 * 36000, 4 * 36000
);

path.CubicBezTo(
    102 * 36000, 8 * 36000,
    100 * 36000, 14 * 36000,
    95 * 36000, 20 * 36000
);

// Right side fuselage
path.LineTo(77 * 36000, 37 * 36000);
path.LineTo(93 * 36000, 94 * 36000);
path.LineTo(88 * 36000, 100 * 36000);

path.CubicBezTo(
    87 * 36000, 101 * 36000,
    86 * 36000, 101 * 36000,
    86 * 36000, 100 * 36000
);

// Right wing
path.LineTo(57 * 36000, 56 * 36000);
path.LineTo(37 * 36000, 75 * 36000);
path.LineTo(41 * 36000, 98 * 36000);

path.CubicBezTo(
    41 * 36000, 99 * 36000,
    41 * 36000, 99 * 36000,
    40 * 36000, 100 * 36000
);

// Tail section
path.LineTo(37 * 36000, 104 * 36000);

path.CubicBezTo(
    37 * 36000, 105 * 36000,
    36 * 36000, 105 * 36000,
    35 * 36000, 104 * 36000
);

// Bottom section
path.LineTo(24 * 36000, 85 * 36000);

// Final curve back to start
path.CubicBezTo(
    21 * 36000, 88 * 36000,
    17 * 36000, 90 * 36000,
    14 * 36000, 90 * 36000
);

path.CubicBezTo(
    14 * 36000, 90 * 36000,
    14 * 36000, 90 * 36000,
    14 * 36000, 90 * 36000
);

path.Close();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 0));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 150, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(1000000, 1000000);
let docContent = shape.GetDocContent();
if (docContent)
{
    let paragraph = docContent.GetElement(0);
    paragraph.AddText(" (Custom: " + customGeometry.IsCustom() + ")");
}
slide.AddObject(shape);