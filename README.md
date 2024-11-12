# match-country-with-capital
Here’s a properly formatted `README.md` based on the information you provided:

---

# Country Capital Matching Game

## Overview

Implement a game to match countries with their capitals in React.

### Requirements

1. **Game Component**:
   - Implement a React component that renders a simple game where players need to match a country with its capital by clicking on the corresponding buttons.
   
2. **Input Data**:
   - Your component should receive a `data` property in the following format:
   
     ```js
     <CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
     ```
   
   - The `data` object consists of country names as keys and their respective capitals as values.

3. **Rendering Buttons**:
   - For each country and capital pair, a button should be displayed.
   - For the example above, four buttons should be displayed: `Germany`, `Berlin`, `Azerbaijan`, and `Baku`.
   - The buttons should be displayed in a **random order**.

4. **Button Interaction**:
   - Clicking a button should set its background color to **blue (#0000ff)**.
   - Clicking another button should:
     - Remove both buttons if a correct country-capital pair is selected.
     - Set the background color of both buttons to **red (#ff0000)** if an incorrect pair is selected.
   - If the previously selected pair was incorrect, clicking another button should:
     - Restore the default background color of the incorrect pair.
     - Set the background color of the clicked button to **blue**.
   
5. **Winning Condition**:
   - When all pairs have been matched and there are no buttons left, display the message: 
     - **"Congratulations"**.

6. **Export**:
   - The component should be exported as the **default export**.

### Assumptions

- Assume that the provided `data` object is correct, i.e., the keys and values are valid country and capital strings.
- The appearance of the component will **not** be evaluated; only its functionality will be tested.

### Example

#### Correct Answers:
- Poland — Warsaw
- Germany — Berlin
- Azerbaijan — Baku
- Papua New Guinea — Port Moresby

#### Example Data Format:

```js
<CountryCapitalGame data={{
  Poland: "Warsaw", 
  Germany: "Berlin", 
  Azerbaijan: "Baku", 
  "Papua New Guinea": "Port Moresby"
}} />
```

#### Example in a Working App:

[View Example](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfiOinc9CadAzsBzWfQABaH_oe6kIKo0A7LOtjm5ti-g3pF77Y3Fkdw1bWBwEo1BiAiTaEbJWJ5tzI4PPRIEWK3hOvcigpq6aoynr3w8p_9QdKF4KEpHEBiot4S4lNWbP1uND9sSQSQ69Onbz3PjhMBeBk?key=Ldehj2GF8I2yJ6_4sUFTf)

---

