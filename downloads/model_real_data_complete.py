
# Retail Sales or Profit Prediction using Random Forest

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_squared_error
import matplotlib.pyplot as plt
import seaborn as sns

# === Load Dataset ===
# Make sure 'Superstore.csv' is in the same directory as this script
try:
    df = pd.read_csv('Superstore.csv', encoding='ISO-8859-1')  # or encoding='latin1'
except FileNotFoundError:
    print("⚠️ Please place the 'Superstore.csv' file in the same directory.")
    exit()

# === Basic Cleaning ===
df = df.dropna()  # Drop rows with missing values

# === Feature Selection ===
# You can switch 'target' to 'Profit' if needed
features = ['Discount', 'Quantity', 'Category', 'Region', 'Segment', 'Profit']
target = 'Sales'  # Change this to 'Profit' if you want to predict profit

# One-hot encoding for categorical columns
df_encoded = pd.get_dummies(df[features + [target]], columns=['Category', 'Region', 'Segment'], drop_first=True)

# Separate features and target
X = df_encoded.drop(columns=[target])
y = df_encoded[target]

# First split: Train (80%) and Temp (20%)
X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Second split: Validation (10%) and Test (10%) from Temp
X_val, X_test, y_val, y_test = train_test_split(
    X_temp, y_temp, test_size=0.5, random_state=42
)

# Train original Random Forest model
model = RandomForestRegressor(
    n_estimators= 100,
    max_depth=10,            # Limits how deep each tree can grow
    min_samples_split=3,     # Minimum samples to split a node
    min_samples_leaf=10,      # Minimum samples at a leaf node
    random_state=42
)

model.fit(X_train, y_train)

# Evaluate on train and test
y_train_pred = model.predict(X_train)
y_test_pred = model.predict(X_test)

train_r2 = r2_score(y_train, y_train_pred)
test_r2 = r2_score(y_test, y_test_pred)
mse = mean_squared_error(y_test, y_test_pred)

print("🎯 Overfitting Check")
print(f"Train R² Score: {train_r2:.2f}")
print(f"Test R² Score: {test_r2:.2f}")
print(f"Mean Squared Error (Test): {mse:.2f}")


# === Feature Importance Plot ===
import matplotlib.pyplot as plt
plt.figure(figsize=(8, 6))
plt.scatter(y_test, y_test_pred, alpha=0.6, edgecolors='w')
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], color='red', linestyle='--')
plt.xlabel("Actual Sales")
plt.ylabel("Predicted Sales")
plt.title("Actual vs Predicted Sales")
plt.tight_layout()
plt.savefig("actual_vs_predicted.png")
print("✅ Saved plot: 'actual_vs_predicted.png'")

