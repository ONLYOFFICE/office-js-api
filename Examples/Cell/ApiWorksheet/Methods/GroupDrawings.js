// Combine two shapes on the sheet into a single group in a spreadsheet.

// Add two shapes and merge them so they can be moved and formatted as one object.

// Group the shapes and report on the sheet whether the group was created.

const worksheet = Api.GetActiveSheet();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, fill1, stroke, 0, 0, 0, 0);
const shape2 = worksheet.AddShape("ellipse", 50 * 36000, 30 * 36000, fill2, stroke, 3, 0, 3, 0);

const group = worksheet.GroupDrawings([shape1, shape2]);
worksheet.GetRange("A10").SetValue(group ? "Group created" : "Group not created");