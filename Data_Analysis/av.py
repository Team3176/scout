import pandas as pd
import csv
#setup
file = open('Mishawaka Scout All Matches 2.csv')
csv_reader = csv.reader(file)
compressed_sd = list(csv_reader)
#get an average(wip)
'''def average(*arg):
    total = 0
    for i in *arg:
        total = total + arg'''