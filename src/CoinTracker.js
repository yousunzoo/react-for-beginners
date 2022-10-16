import { useEffect, useState } from "react";
function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(1);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const onSelect = (event) => {
    setInvert(event.target.value);
    console.log(event.target.value);
  };

  const CoinSelect = () => {
    return (
      <select onChange={onSelect} value={invert}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    );
  };
  const Inverter = () => {
    return (
      <div>
        <label htmlFor="myDollar">Dollar : </label>
        <input
          id="myDollar"
          onChange={onChange}
          value={amount}
          type="number"
          placeholder="write your dollar"
        />
        <br />
        <h3>Invert to</h3>
        <CoinSelect />
        <p>{amount / invert}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <Inverter />}
    </div>
  );
}

export default CoinTracker;
