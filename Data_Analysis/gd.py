import pandas as pd
import csv
#setup
file = open('Mishawaka Scout All Matches 2.csv')
csv_reader = csv.reader(file)
compressed_sd = list(csv_reader)
#get scouter data
class GD:
    def get_match_number(self,l):
        n = l[3]
        return n
    def get_asg(self,team):
        asg = []
        for list in compressed_sd:
            if team in list:
                asg.append(list[7])
        return asg
    def get_acs(self,team):
        acs = []
        for list in compressed_sd:
            if team in list:
                acs.append(list[9])
        return acs
    def get_tsg(self,team):
        tsg = []
        for list in compressed_sd:
            if team in list:
                tsg.append(list[13])
        return tsg
    def get_ad(self,team):
        ad = []
        for list in compressed_sd:
            if team in list:
                ad.append(list[11])
        return ad
    def get_fs(self,team):
        fs = []
        for list in compressed_sd:
            if team in list:
                fs.append(list[21])
        return fs
    def get_die(self,team):
        die = []
        for list in compressed_sd:
            if team in list:
                die.append(list[28])
        return die
    def get_tip(self,team):
        tip = []
        for list in compressed_sd:
            if team in list:
                tip.append(list[29])
        return tip
    def get_comments(self,team):
        comments = []
        for list in compressed_sd:
            if team in list:
                j = GD.get_match_number(self,list)
                str(j)
                comments.append(j + ':' + ' ' + str(list[32]))
        return comments
    def get_data(self,team):
        a = GD.get_acs(self,team=team)
        b = GD.get_ad(self,team=team)
        c = GD.get_asg(self,team=team)
        d = GD.get_comments(self,team)
        e = GD.get_die(self,team=team)
        f = GD.get_fs(self,team=team)
        h = GD.get_tip(self,team=team)
        i = GD.get_tsg(self,team=team)
        print('Points scored in auton: ',c)
        print('Dock status of robots in auton: ',b)
        print("Dock status of robots in teleop: ",f)
        print("If robots died or not during match: ",e)
        print("Comments: ",d)
        print('ACS: ',a)
        print("If robot was tippy: ",h)
        print("Coords of items scored in telop: ",i)