import argparse
import numpy as np
import pandas as pd
#file names
file_name = "Mishawaka Scout All Matches 2.xlsm"
Control = "Control"
Analysis = "Analysis"
#start
df = pd.read_excel(file_name,sheet_name=Control)
print(df)