#a Python script for interacting with an SQLite db:
import sqlite3 #enable SQLite operations

#open db if exists, otherwise create
db = sqlite3.connect("discobandit.db") 

c = db.cursor() #facilitate db ops

def see_table(tablename):
    c.execute(f"SELECT * FROM {tablename}")
    return c.fetchall()
  
result = see_table("students")
for row in result:
    print(row)
    print("\n")

db.close()
