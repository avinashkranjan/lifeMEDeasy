#!/usr/bin/env python
# coding: utf-8

# In[1]:


## Preparing tools for data analysis

# Regular EDA (exploratory data analysis) and plotting libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# we want our plots to appear inside the notebook
get_ipython().run_line_magic("matplotlib", "inline")

# Models from Scikit-Learn
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier


# Model Evaluations
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.model_selection import RandomizedSearchCV, GridSearchCV
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.metrics import precision_score, recall_score, f1_score
from sklearn.metrics import plot_roc_curve


# # Load Data

# In[2]:


hrtds = pd.read_csv("heart-disease.csv")
hrtds.head()


# In[3]:


hrtds.describe()


# In[4]:


hrtds.shape


# In[5]:


hrtds.count()


# In[6]:


hrtds.info()


# In[7]:


hrtds.tail()


# In[8]:


hrtds.isna().sum()


# In[9]:


hrtds.dtypes


# DATA VISUALIZATION

# In[10]:


hrtds.plot.hist(figsize=(10, 30), subplots=True)


# In[11]:


sns.pairplot(hrtds, height=30)


# In[ ]:


# In[12]:


hrtds["target"].value_counts().plot(
    x="Age", y="count", kind="bar", color=["salmon", "lightblue"]
)


# In[13]:


pd.crosstab(hrtds.target, hrtds.sex)


# In[14]:


pd.crosstab(hrtds.target, hrtds.sex).plot(
    kind="bar", figsize=(10, 6), color=["lightblue", "salmon"]
)
plt.legend(["Female", "Male"]),


plt.ylabel(" ")


# In[15]:


# Create another figure
plt.figure(figsize=(10, 6))

# Start with positve examples
plt.scatter(
    hrtds.age[hrtds.target == 1], hrtds.thalach[hrtds.target == 1], c="salmon"
)  # define it as a scatter figure

# Now for negative examples, we want them on the same plot, so we call plt again
plt.scatter(
    hrtds.age[hrtds.target == 0], hrtds.thalach[hrtds.target == 0], c="lightblue"
)  # axis always come as (x, y)

# Add some helpful info
plt.title("Heart Disease in function of Age and Max Heart Rate")

plt.legend(["Disease", "No Disease"])
plt.ylabel("Max Heart Rate")


# Model Training

# In[16]:


# Everything except target variable
X = hrtds.drop("target", axis=1)

# Target variable
y = hrtds.target.values


# In[17]:


# Independent variables (no target column)
X.head()


# In[18]:


# Targets
y


# In[19]:


# Random seed for reproducibility
np.random.seed(42)

# Split into train & test set
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2  # independent variables  # dependent variable
)  # percentage of data to use for test set


# In[20]:


X_train.head()


# In[21]:


len(X_train)


# In[22]:


y_train, len(y_train)


# In[23]:


X_test.head()


# In[24]:


y_test, len(y_test)


# In[25]:


# Build machine learning model and making the data fit in it

model = LogisticRegression()
model.fit(X_train, y_train)


# In[26]:


ypreds = model.predict(X_test)
ypreds


# In[27]:


model.score(X_test, y_test)  # evaluating model


# In[28]:


X_test.tail()


# In[31]:


X_test.loc[104]


# In[37]:


pred = model.predict(X_test.loc[:193])
pred  # the last element of this array is our prediction for patient no. 193)


# In[40]:


hrtds.loc[
    193
]  # we can check that with our previous data that our prediction is correct.


# In[ ]:
