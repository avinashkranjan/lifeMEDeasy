import csv
import os
import random
import pickle
import re 
import numpy as np 
from sklearn import svm 
from sklearn.model_selection import RandomizedSearchCV, train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import  accuracy_score

def cleanText(datalist):
    f = "[_]"
    sent = ""
    for each in datalist:
        x = re.split(f, each)
        for e in x: sent += e.lstrip().rstrip() + " "
    
    sent = sent.lstrip().rstrip()
    return sent 

with open("dataset/dataset.csv") as f:
    dataFile = csv.reader(f, delimiter=",")

    countVal =0
    data = [] # this is contain the sentences 
    tLabels = []

    for row in dataFile:
        if countVal != 0:
            tLabels.append(row[0].lower())
            d = []
            
            for each in row[1:]:
                if each != "": d.append(each.lower().lstrip().rstrip())
            data.append(cleanText(d))
             
        countVal += 1

iterationVal = 7 
embeddingDim = 100# for memory compromisation  

maxSequenceLength =50 
maxNbWords = 20000 
validationSplit = 0.05

setLabels = sorted(set(tLabels))
diseaseToId = dict((dis, num) for num, dis in enumerate(setLabels))

labels = []

print(setLabels) 
with open("label.pickle", "wb") as f:
    pickle.dump(setLabels, f) 

for each in tLabels:
    labels.append(diseaseToId[each])

X_train, X_test, y_train, y_test = train_test_split(data, labels, test_size=0.15, random_state=8)

ngramRange = (1,2)
min_df = 10
max_df = 1.
max_features = 500  

tfidf = TfidfVectorizer(
    encoding= "utf-8",
    ngram_range = ngramRange,
    stop_words = None,
    lowercase = False,
    max_df = max_df,
    min_df = min_df,
    max_features = max_features,
    norm='l2',
    sublinear_tf = True)

features_train = tfidf.fit_transform(X_train).toarray()
labels_train = y_train

features_test = tfidf.transform(X_test).toarray()
labels_test = y_test
print(features_test.shape)

with open("tdf.pickle", "wb") as f:
    pickle.dump(tfidf, f)

svc_0 = svm.SVC(random_state=8)

C = [.0001, .001, .01]
gamma = [.0001, .001, .01, .1, 1, 10, 100]
degree = [1,2,3, 4, 5]
kernel = ['linear', 'rbf', 'poly']
probability = [True]

random_grid = {
            'C': C, 'kernel': kernel, 'gamma': gamma, 'degree':degree, 'probability': probability
        }
print(random_grid)

svc = svm.SVC(random_state=8)

random_search = RandomizedSearchCV(
            estimator=svc,
            param_distributions = random_grid,
            n_iter = iterationVal,
            scoring= "accuracy",
            cv = 3,
            verbose = 1,
            random_state=8
        )
random_search.fit(features_train, labels_train)

print("The best hyperparameters from Random Search are:")
print(random_search.best_params_)
print("")
print("The mean accuracy of a model with these hyperparameters is:")
print(random_search.best_score_)

best_svc = random_search.best_estimator_

# model fit and performance
best_svc.fit(features_train, labels_train)
svc_pred = best_svc.predict(features_test)

# Training accuracy
print("The training accuracy is: ")
print(accuracy_score(labels_train, best_svc.predict(features_train)))

print("The test accuracy is: ")
print(accuracy_score(labels_test, svc_pred))

with open('best_svc.pickle', 'wb') as output:
    pickle.dump(best_svc, output)




