#a Python script for interacting with an SQLite db:
import sqlite3 #enable SQLite operations

#open db if exists, otherwise create
db = sqlite3.connect("discobandit.db") 

c = db.cursor() #facilitate db ops

#c.execute("""CREATE TABLE roster(name TEXT,
#           userid INTEGER)""")

#save changes

c.execute("SELECT * FROM t")
result = c.fetchall()
  
# loop through the rows
for row in result:
    print(row)
    print("\n")

db.close()
