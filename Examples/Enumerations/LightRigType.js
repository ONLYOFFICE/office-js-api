// Create a 3D format with the 'Sunrise' lighting preset.

// Set the lighting which defines the light and shadows on the faces of a 3D shape.

// Create a 3D format lit by the sunrise light rig rotated by 45 degrees.

const threeDFormat = Api.CreateThreeDFormat({ presetLighting: "Sunrise", lightAngle: 45, rotationX: 20, depth: 10 });