import os
from PIL import Image

def rename_images_in_folder(folder_path):
    # Ići kroz sve datoteke u folderu
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        
        # Provjeriti je li datoteka slika
        if filename.lower().endswith(('png', 'jpg', 'jpeg', 'gif', 'bmp', 'tiff')):
            try:
                # Otvoriti sliku
                with Image.open(file_path) as img:
                    width, height = img.size
                    
                    # Preimenovati sliku prema dimenzijama
                    if width > height:
                        new_filename = 'w_' + filename  # Ako je širina veća, dodaj "w"
                    else:
                        new_filename = 'h_' + filename  # Ako je visina veća, dodaj "h"
                    
                    # Novi put do datoteke
                    new_file_path = os.path.join(folder_path, new_filename)
                    
                    # Preimenovati sliku
                    os.rename(file_path, new_file_path)
                    print(f"Renamed {filename} to {new_filename}")
            
            except Exception as e:
                print(f"Error processing {filename}: {e}")

# Primjer korištenja
folder_path = "putanja/do/tvog/foldera"  # Zamijenite stvarnom putanjom do foldera
rename_images_in_folder(folder_path)
