Here’s how to make a heat map, provided you are using Python and Jupyter Notebooks! The way this heatmap works by making a scatterplot, wherein the dots fall in/on the coordinates of the map. Also, I suggest making another notebook at the end of each section of instructions, but you do you boo.

This was written for the Tippecanoe data for Rapid React. The map values will usually be 12 by 6, but double check with your mentor!

1.Let’s get it started in here!
    These are the libraries we’re going to use!
        pandas -> Makes our data readable and clean
        numpy -> Helps us pick colors for the scatterplot
        matplotlib.pyplot -> Creates the actual plot
        matplotlib.image -> Imports the field map

2.Data time boys
    This next segment will be extracting the data from the Excel sheet. Please note the Excel sheet file needs to be in the file and ends in “.xlsm”
        df stands for Data Frame. It is the data that we are focusing on (or, you could say, the data that is framed)!
        n is the column in the Excel sheet where the locations of shots are stored. This will need to be put in manually.
        .dropna() drops the cells in column that do not have any info in the cell
    I recommend putting a print statement to check that the Data Frame is only showing the shot locations

3.NOBODY EXPECTS THE SPANISH INQUISITION (get it? Cuz we’re converting stuff?)
    Right now, pandas methods can’t really read what is in the data frame, so we need to convert the data to something that it can read
    Also, for the sake of ease, we’re going to condense the data so we only have to run through one list
        The first line is the conversion to String so it can be converted to other data types
        The while loop then makes the list of all values
        The conversion from String to int is unfortunately a little more complex, which is what the for loop is for

4.This next bit is a little iffy :)
    This part involves a lot of if statements to determine x and y coordinates.
    Remember, because you are trying to land the points in the squares, not on the coord lines, you will need to adjust for the actual values.
        y values can go across the rows, but the x values involve a little more checking!
        The values are appended to respective lists and used to make the scatterplot

5.We’re all in this together!
    This is the part where we put the map together
    First, we make sure the map is in the background
    Next, we make the random colors for the color map
    Finally, we display the scatterplot. Let’s get it done!
        nx and ny is the coordinate length of the data (for the Tippe data, these values are 12 and 6, respectively)
        col is used to randomly assign colors to the scatter plot points. You don’t need to import random. Multiplying it by the values in color, it brightens them
            NOTE: If a member of your Drive Team is colorblind (like, I don’t know, maybe your chief engineer, or something), adjust the values as necessary. I’ve highlighted what each value represents!
        s determines how big the points are. I’ve been using 70, but play around until you like it!
        alpha is how transparent the values are on a scale from 0 to 1. The closer to 1, the more opaque. t = 0.2 is a good starting place
        xticks and yticks are used to make the x and y scales appear along their respective axis


Celebrate! You did it!
    -Amy (senior, 22-23)