import csv

def init():
    jobPercentages = {}
    with open('data/occupations.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            job = row["Job Class"]
            percentage = float(row["Percentage"])
            if job == 'Total':
                totalPercentage = percentage
            else:
                jobPercentages[job] = float(percentage)
    return jobPercentages