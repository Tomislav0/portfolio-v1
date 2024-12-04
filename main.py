import os

def generate_js_for_images(folder_paths):
    js_code = ""
    for folder_path in folder_paths:
        # Get the folder name to use as the variable name
        folder_name = os.path.basename(folder_path.rstrip(os.sep))
        
        # Collect all image file names from the folder
        valid_extensions = {'.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp', '.tiff'}
        image_files = [f for f in os.listdir(folder_path) if os.path.splitext(f)[1].lower() in valid_extensions]
        
        # Generate JavaScript code
        js_code += f"const {folder_name} = [\n"
        js_code += ",\n".join([f'    "{file}"' for file in image_files])
        js_code += "\n];\n"
        
        # Save to a JS file
    output_file = "gallery-filenames.js"
    with open(output_file, 'w', encoding='utf-8') as js_file:
            js_file.write(js_code)

# Example usage (replace with your folder path)
folder_paths = ["assets/concerts","assets/nightlife", "assets/portraits","assets/ceremony","assets/sport","assets/business"]
generate_js_for_images(folder_paths)

