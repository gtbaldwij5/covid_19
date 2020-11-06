from arcgis.gis import GIS
from arcgis.geocoding import geocode
import pandas as pd

# https://developers.arcgis.com/labs/python/search-for-an-address/

def geocode_dataset(file_path):

    # Import data files (Assuming csv)
    folder_path = "/".join(file_path.split('/')[:-1])
    file_name = file_path.split('/')[-1].split('.')[0]

    df = pd.read_csv(file_path)

    # Create Full Address, comma separated addresses
    df['address'] = ", ".join(df['street'], df['city'], df['state'], df['zip'])

    # Get lat/long and add to new columns
    gis = GIS()

    def get_lat_long(row):
        latlong_info = geocode(row['address'])[0]['location']

        row['lat'] = latlong_info[0]['location']['x']
        row['long'] = latlong_info[0]['location']['y']

        row['coordiantes'] = "%s, %s" % row['lat'], row['long']

    df.apply(lambda row: get_lat_long(row), axis=1)

    # Export
    df.write_csv("%s/%s_geocoded.csv" % folder_path, file_name, index=False)

    return True
