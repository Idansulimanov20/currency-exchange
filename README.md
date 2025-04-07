# Currency Converter React App (Vite)

## Overview
This project is a **React-based currency converter** built with **Vite** for fast performance. The application fetches real-time exchange rates from an external API using the Fetch API, allowing users to convert between different currencies efficiently.

## Features
- **Live exchange rate fetching** from an external API.
- **User-friendly interface** for selecting currencies and inputting amounts.
- **Efficient state management** using React hooks.
- **Real-time conversion updates**.
- **Optimized build with Vite**.

## Tech Stack
- **Vite + React** (for fast development and optimized builds)
- **Fetch API** (for API requests)
- **React useState & useEffect Hooks**
- **CSS (for styling)**

## API Used
We use an external API to fetch currency exchange rates. Some popular APIs include:
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Open Exchange Rates](https://openexchangerates.org/)
- [Fixer.io](https://fixer.io/)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/currency-converter.git
   ```
2. Navigate to the project folder:
   ```sh
   cd currency-converter
   ```
3. Install dependencies using Vite:
   ```sh
   npm install
   ```
4. Run the project:
   ```sh
   npm run dev
   ```

## How It Works
1. The app fetches real-time exchange rates from the API when it loads.
2. Users select the base currency and target currency.
3. Users enter the amount to convert.
4. The converted value updates dynamically as the user interacts.

## Key Hooks Used
### useState
- Used to manage user input, selected currencies, and converted values.
```jsx
const [amount, setAmount] = useState(1);
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('EUR');
const [exchangeRate, setExchangeRate] = useState(null);
```

### useEffect
- Fetches exchange rates when the selected currency changes using Fetch API.
```jsx
useEffect(() => {
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(res => res.json())
    .then(data => setExchangeRate(data.rates[toCurrency]))
    .catch(error => console.error('Error fetching data:', error));
}, [fromCurrency, toCurrency]);
```

## Future Improvements
- Add more currency support.
- Implement caching to reduce API calls.
- Enhance UI/UX for a better user experience.

## License
This project is open-source and available under the MIT License.


