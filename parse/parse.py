import pandas as pd
import json
import requests
from IPython.display import display
from io import StringIO

DATA_URL = "https://www.waze.com/partnerhub-api/waze-feed-access-token/1046cdae-bcb9-4723-90c0-111c3cb014c2?format=1"
json_string = requests.get(DATA_URL)
temp = json_string.content

index = str (temp).index('[')
index2 = str (temp).index(']')
s = (str (temp))[index : index2 + 1]

# This gives everything in alerts
parsed_input = json.loads(temp)['alerts']

df = pd.DataFrame(parsed_input)
display(df)

