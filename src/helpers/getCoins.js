export const getCoins = async () => {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  const res = await fetch(url);
  const data = await res.json();
  const coins = data.map((coin) => ({
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    image: coin.image,
    price: coin.current_price,
    highPrice: coin.high_24h,
    lowPrice: coin.low_24h,
    changePrice: coin.price_change_24h,
    percentagePrice: coin.price_change_percentage_24h,
    updated: coin.last_updated,
  }));
  return coins;
};
