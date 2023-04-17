import pandas as pd
import csv
#setup
file = open('Mishawaka Scout All Matches 2.csv')
csv_reader = csv.reader(file)
compressed_sd = list(csv_reader)
#get a column of data
def column(int):
    e = []
    for l in compressed_sd:
        e.append(l[int])
    return e
