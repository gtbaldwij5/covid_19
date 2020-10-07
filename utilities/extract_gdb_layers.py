import glob
import fiona
import geopandas as gpd
import os

# Add gdb file ------------------------------- #

# Set working directory
os.getcwd()

gdb_file = ''

# List layers from the .gdb file
layers = fiona.listlayers(gdb_file)


# Extract data -------------------------------------- #

for layer in layers:
    try:  # extracts features (gdf) of each layer
        gdf = gpd.read_file(gdb_file, layer=layer)
        file_name = os.path.join('gdb_feature_' + str(layer) + '.csv')

        gdf.to_csv(file_name)
        print(file_name)

    except:
        print('File export failed')
        pass
