import os 
import pickle 
import csv
import re 
from numpy.random import randint 

starter = [
        "Hi there! I am a medical chatbot. We can help you with diagnosing your symptoms online. What kind of symptoms are you experiencing?"     
        ]


with open("dataset/label.pickle", "rb") as f:
    setLabels = pickle.load(f) 

with open('dataset/best_svc.pickle', 'rb') as output:
    best_svc = pickle.load(output)

with open("dataset/tdf.pickle", "rb") as f:
    tf = pickle.load(f) 


convert = dict((num, dis) for num, dis in enumerate(setLabels))


def tryPredict(data):
    data = [data]
    testData = tf.transform(data).toarray()
    s = best_svc.predict(testData)
    return (convert[s[0]]) 

symptoms_list = []
disease_list = []

def cleanText(datalist):
    f = "[_]"
    sent = []
    for each in datalist:
        x = re.split(f, each)
        for e in x: sent.append(e) 

    return sent 

with open("dataset/dataset.csv") as f:
    dataFile = csv.reader(f, delimiter=",")

    countVal =0
    
    for row in dataFile:
        if countVal != 0:
            disease_list.append(row[0].lower().lstrip().rstrip())
            d = []
            
            for each in row[1:]:
                if each != "": d.append(each.lower().lstrip().rstrip())
            
            l = cleanText(d)
            for each in l: symptoms_list.append(each)

        countVal += 1



precaution_list = {}

with open("dataset/symptom_precaution.csv") as f:
    dataFile = csv.reader(f, delimiter=",")

    countVal =0

    for row in dataFile:
        if countVal != 0:
            diseaseName = row[0].lower().lstrip().rstrip()
            d = []
            
            for each in row[1:]:
                if each != "": d.append(each.lower().lstrip().rstrip())

            precaution_list[diseaseName] = d

        countVal += 1

def cleanWord(word):
    f = "[_]"
    sent = []
    x = re.split(f, word)
    for e in x: sent.append(e) 

    return sent 


severityIndex = {} # 4.2222 being the mean value, 1 -> lowest, 7 -> highest  
# set mean as 4 or 5 

with open("dataset/Symptom-severity.csv") as f:
    dataFile = csv.reader(f, delimiter=",")
    countVal =0 

    for row in dataFile:
        if countVal != 0:
            diseaseName = row[0].lower()
            sevVal = row[1]
            diseaseName = cleanWord(diseaseName)
            for each in diseaseName:
                severityIndex[each] = int(sevVal)
        
        countVal += 1

diseaseDesc = {}

with open("dataset/symptom_Description.csv") as f:
    dataFile = csv.reader(f, delimiter=",")
    countVal =0 

    for row in dataFile:
        if countVal != 0:
            diseaseName = row[0].lower()
            desc = row[1]
            diseaseName = diseaseName.split()
            for each in diseaseName:
                diseaseDesc[each] = desc 
        
        countVal += 1

#text = "I have got fever since a few days. Headache as well. an a stomach pain"


while True:
    # TODO: NORMAL CHATTING. Greeting 
    text = str(input(":"))
    if text == "bye" or text == "Bye":
        break
    #text = "I have been suffering from dry throat, difficulty in breathing"

    text = text.lower().split()

    identified_symptoms = []
    for each in text:
        if each in symptoms_list:
            identified_symptoms.append(each)

    s = " ".join(identified_symptoms)
    pred_disease = tryPredict(s)

    appointment_necessity = False 
    for each in identified_symptoms:
        if severityIndex[each] > 5:
            appointment_necessity = True 
            break


    #appointment_necessity = False # TODO: remove this
    if appointment_necessity == True:
        print("It looks like a serious problem. It is better to consult a doctor. Our system has predicted it as : ",pred_disease)
        
    else:
        print("disease is:", pred_disease) 
        # precaution to be taken 
        random_number = randint(0,3)
        print(precaution_list[pred_disease][random_number])








