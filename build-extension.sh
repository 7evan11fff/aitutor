#!/bin/bash

# AI Tutor Extension Build Script
# This script packages the Chrome extension for distribution

echo "🚀 Building AI Tutor Chrome Extension..."

# Create build directory
mkdir -p build

# Copy essential files to build directory
cp manifest.json build/
cp background.js build/
cp content-hybrid.js build/
cp ai-modules.js build/
cp popup.html build/
cp popup.js build/
cp popup.css build/
cp content.css build/

# Copy icons directory if it exists
if [ -d "icons" ]; then
    cp -r icons build/
fi

# Create the zip file
cd build
zip -r ../ai-tutor-extension.zip . -x "*.DS_Store" "*.git*" "*.md" "test-*" "*-test.*" "debug-*" "*-debug.*"
cd ..

# Get the current version from manifest.json
VERSION=$(grep '"version"' manifest.json | cut -d'"' -f4)
echo "📦 Extension packaged successfully!"
echo "📁 Output: ai-tutor-extension.zip"
echo "🏷️  Version: $VERSION"
echo "📊 Files included:"
ls -la build/

# Clean up build directory
rm -rf build/

echo "✅ Build complete! Extension ready for installation."
