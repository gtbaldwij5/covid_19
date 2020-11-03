import geopandas
import numpy as np
import os

# import
data_path = "C:/Users/us61498/GT/Small Engagements/esri/mobility_management/busses/data/"

# get file names
files = []
for filename in os.listdir(data_path):
    if filename.endswith(".shp"):
        files.append(data_path + filename)

# random data functions
def random_normaldist_data(data, colname, average):
    rows = len(data.index)
    data[colname] = np.random.normal(average, 2.3, rows)
    return data

# Loop through files and add data
colnames = ['Infrastructure','Protection','Comfort']
result_average = 7.4

new_filenames = []
filename = files[1]
for filename in files:

    # read data
    data = geopandas.read_file(filename)

    # add columns
    for col in colnames:
        data = random_normaldist_data(data, col, result_average)
    
    # export
    name = os.path.splitext(filename.split('/')[-1])[0]
    new_path = "%s%s_generated.shp" % (data_path, name)
    
    new_filenames.append(new_path)
    data.to_file(new_path)

print("Created new files:")
[print(dataset) for dataset in new_filenames]