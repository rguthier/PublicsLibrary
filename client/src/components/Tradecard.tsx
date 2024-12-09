import axios from "axios";

export default function Tradecard({
  book,
  owner,
  status,
  trade_id,
}: {
  book: string;
  owner: string;
  status: string;
  trade_id: number;
}) {
  const getUser = () => {
    const userString = localStorage.getItem("user");
    const userUser = JSON.parse(userString);
    return userUser?.user;
  };
  const user = getUser();

  const acceptTrade = async () => {
    try {
      await axios.post("http://localhost:8800/accepttrade", {
        trade_id: trade_id,
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
    return;
  };

  const completeTrade = async () => {
    try {
      await axios.post("http://localhost:8800/completetrade", {
        trade_id: trade_id,
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
    return;
  };

  return (
    <div className="book-card">
      <div className="book-details">
        <h3 className="book-title">{book}</h3>
        <p className="book-author">Owned by: {owner}</p>
        <p className="book-description">Status: {status}</p>
        <div className="buttons">
          {user === owner && status == "requested" && (
            <button className="trade-button" onClick={() => acceptTrade()}>
              Accept trade
            </button>
          )}
          {status == "in progress" && (
            <button className="trade-button" onClick={() => completeTrade()}>
              Complete trade
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
