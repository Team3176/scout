import argparse
import colu
import gd
parser = argparse.ArgumentParser()
#add arguments before making .parse_args here (its required idk why) -- specific data
parser.add_argument('--get_asg',type=str,required=False)
parser.add_argument('--get_acs',type=str,required=False)
parser.add_argument('--get_tsg',type=str,required=False)
parser.add_argument('--get_ad',type=str,required=False)
parser.add_argument('--get_fs',type=str,required=False)
parser.add_argument('--get_die',type=str,required=False)
parser.add_argument('--get_comments',type=str,required=False)
parser.add_argument('--get_tip',type=str,required=False)
parser.add_argument('--get_data',type=str,required=False)
#get a column of data
parser.add_argument('--column',type=int,required=False)

#args
args = parser.parse_args()
#column
if args.column:
    c = args.column
    print(colu.column(c))
#gd
g = gd.GD()
if args.get_asg:
    y = args.get_asg
    data = g.get_asg(y)
    print("Points scored in auton")
    for w in data:
        print(w)
elif args.get_acs:
    y = args.get_acs
    data = g.get_acs(y)
    print('ACS')
    for w in data:
        print(w)
elif args.get_tsg:
    y = args.get_tsg
    data = g.get_tsg(y)
    print("Coords of items scored in telop")
    for w in data:
        print(w)
elif args.get_ad:
    y = args.get_ad
    data = g.get_ad(y)
    print("Dock status of robots in auton")
    for w in data:
        print(w)
elif args.get_fs:
    y = args.get_fs
    data = g.get_fs(y)
    print("Dock status of robots in teleop")
    for w in data:
        print(w)
elif args.get_die:
    y = args.get_die
    data = g.get_die(y)
    print("If robots died or not during match")
    for w in data:
        print(w)
elif args.get_comments:
    y = args.get_comments
    data = g.get_comments(y)
    print("Comments")
    for w in data:
        print(w)
elif args.get_tip:
    y = args.get_tip
    data = g.get_tip(y)
    print("If robot was tippy")
    for w in data:
        print(w)
elif args.get_data:
    y = args.get_data
    data = g.get_data(y)
    print(data)