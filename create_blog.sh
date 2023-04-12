#!/bin/sh

# Define the path where the new directory will be created
path="app/(blogs)/"

# Define the path of the .default folder
default_path="app/(blogs)/.template"

# Prompt the user to input a new folder name
read -p "Enter the new folder name: " folder_name

# Create the new directory with the user-specified name
mkdir -p "$path/$folder_name"

# Copy the contents of the .default folder to the new directory
cp -R "$default_path/." "$path/$folder_name"

echo "New directory created at $path"
