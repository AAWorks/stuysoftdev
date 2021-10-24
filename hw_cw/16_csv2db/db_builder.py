#Clyde "Thluffy" Sinclair
#SoftDev  
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

"""import sqlite3, csv   #enable control of an sqlite database
#facilitate CSV I/O

DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================

def input_database(table, file):
    c.execute(f"CREATE TABLE {table} (code, mark, id);") # use your column names here

    with open(file,'r') as f:
        # csv.DictReader uses first line in file for column headings by default
        dr = csv.DictReader(f)
        to_db = [(i['code'], i['mark'], i['id']) for i in dr]

        for li in to_db:
            c.execute(f"INSERT INTO {table} (code, mark, id) VALUES ({li[0]}, {li[1]}, {li[2]});")

#cur.executemany("INSERT INTO t (col1, col2) VALUES (?, ?);", ) 
input_database("x1", "courses.csv")
# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >


#command = ".open discobandit.db"          # test SQL stmt in sqlite3 shell, save as string
#c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
"""

import csv, sqlite3

con = sqlite3.connect("discobandit.db") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
cur.execute("CREATE TABLE t (code, mark, id);") # creates table

with open('courses.csv','r') as fin:
    data = csv.DictReader(fin)
    vals = [(row['code'], row['mark'], row['id']) for row in data] #transferring dictreader values to a 2d array

cur.executemany("INSERT INTO t (code, mark, id) VALUES (?, ?, ?);", vals) #for row of values in list object vals, inserts the values into the table
con.commit()
con.close()