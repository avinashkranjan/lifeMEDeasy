# here is the command line version of the chatbot for protyping
import pickle

with open("label.pickle", "rb") as f:
    setLabels = pickle.load(f)

with open("best_svc.pickle", "rb") as output:
    best_svc = pickle.load(output)

with open("tdf.pickle", "rb") as f:
    tf = pickle.load(f)

print(setLabels)

print(sorted(setLabels))
convert = dict((num, dis) for num, dis in enumerate(setLabels))


data = ""

data = [data]
testData = tf.transform(data).toarray()
s = best_svc.predict(testData)
return convert[s[0]]  # noqa
