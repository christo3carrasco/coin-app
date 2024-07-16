import { useState, useEffect } from "react";

import { getCoins } from "../helpers/getCoins";

export const useFetchCoins = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCryptos = async () => {
    const newCoins = await getCoins();
    setCoins(newCoins);
    setIsLoading(false);
  };

  useEffect(() => {
    getCryptos();
  }, []);

  return { coins, isLoading };
};
