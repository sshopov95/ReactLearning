import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Spinner from "../components/Spinner";
import CoinChart from "../components/CoinChart";
const API_URL = import.meta.env.VITE_API_URL;

const CoinDetailsPage = () => {
  const { id } = useParams(); //destruct from url params

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}` + `/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };    
    fetchCoin();
  }, [id]);
  return (
    <div className="coin-details-container">
      <Link to="/"> Back to home</Link>

      {loading && <Spinner/>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          {coin && (
            <div>
              <h1>
                {coin.name} ({coin.symbol})
              </h1>
              <img src={coin.image.large} />
              <CoinChart coinId={coin.id}/>
              {coin.links.homepage[0] && (
                <div>
                  <p>
                    <a href={coin.links.homepage[0]}>Coin page</a>{" "}
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CoinDetailsPage;
