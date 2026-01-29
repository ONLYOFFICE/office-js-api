// This example shows the available line dash types that can be used for stroke lines.

// How line dash types work:
// - "dash": Dashed line
// - "dashDot": Alternating dashes and dots
// - "dot": Dotted line
// - "lgDash": Long dashes
// - "lgDashDot": Alternating long dashes and dots
// - "lgDashDotDot": Alternating long dashes and double dots
// - "solid": Solid line (no dashes)
// - "sysDash": System dash style
// - "sysDashDot": System dash-dot style
// - "sysDashDotDot": System dash-dot-dot style
// - "sysDot": System dot style

// Example: Getting dash type from a stroke returns a string
let stroke = shape.GetLine();
let dashType = stroke.GetDashType(); // Returns string like "solid"
