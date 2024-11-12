import "./styles.css";
import MatchCountryGame from "./MatchCountryGame";

// We have list of countries with thir capital as an object where country is key and capital is value
// Show both capital and country as buttons in randomize order
// User clicks on one button (it can be a capital or a country) but next click should be the respective country or capital
// If next click is not respective country/capital, show red a background color for both and deselect them
// If next click is respective country/capital, show blue a background color for both and remove them from the screen
// Shpw congratulations once all buttons are removed
// make button blue as soon as clicked if no other button is clicked before it

// {
//   "Germany" : "Berlin"
// }

export default function App() {
  return (
    <div className="App">
      <MatchCountryGame />
    </div>
  );
}
