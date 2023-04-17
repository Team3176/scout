import argparse
import pandas as pd

parser = argparse.ArgumentParser()
parser.add_argument('--col', action ='append', nargs='+', type=int, required=True)
parser.add_argument('--team', type=int, required=True)
args = parser.parse_args()

wanted_team = args.team
wanted_cols = args.col
print(wanted_cols)

all = []
for c in wanted_cols:
    parse = c
    for p in parse:
        all.append(p)
print(all)

pd.set_option('display.max_rows', None)
df = pd.read_excel('Mishawaka Vars.xlsm')
data = []
indiv = []
for a in all:
    heat = df.iloc[:,[a-1]]
    heat_temp = heat
    heat_temp = heat_temp.dropna()
    heat_temp.isnull()
    heat_temp.dropna()
    heat_temp.isnull()
    data.append(heat_temp.loc[df['teamNumber'] == wanted_team])
    for d in data:
        r = 0
        while r < len(heat_temp):
            pin = data
            indiv.append(pin)
            r = r + 1
print(indiv)

#jeremiah's code