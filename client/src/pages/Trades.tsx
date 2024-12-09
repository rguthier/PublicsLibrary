import axios from "axios";
import { useEffect, useState } from "react";
import Tradecard from "../components/Tradecard";

export default function Trades({ username }: { username: string }) {
  const [requested, setRequested] = useState([]);
  const [received, setReceived] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8800/yourequested",
          {
            username: username,
          }
        );
        setRequested(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
      try {
        const response = await axios.post("http://localhost:8800/youreceived", {
          username: username,
        });
        setReceived(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:8800/inprogresstrades",
          {
            username: username,
          }
        );
        setInProgress(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:8800/completedtrades",
          {
            username: username,
          }
        );
        console.log(response.data);
        setCompleted(response.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };
    fetchTrades();
  }, []);
  return (
    <div>
      <h2>Trades</h2>
      <h3>You requested</h3>
      <div className="my-books">
        {requested.map((trade) => (
          <Tradecard
            book={trade.title}
            owner={trade.username}
            status={trade.trade_status}
            trade_id={trade.trade_id}
          />
        ))}
      </div>
      <h3>You received</h3>
      <div className="my-books">
        {received.map((trade) => (
          <Tradecard
            book={trade.title}
            owner={trade.username}
            status={trade.trade_status}
            trade_id={trade.trade_id}
          />
        ))}
      </div>
      <h3>Accepted</h3>
      <div className="my-books">
        {inProgress.map((trade) => (
          <Tradecard
            book={trade.title}
            owner={trade.username}
            status={trade.trade_status}
            trade_id={trade.trade_id}
          />
        ))}
      </div>
      <h3>Completed</h3>
      <div className="my-books">
        {completed.map((trade) => (
          <Tradecard
            book={trade.title}
            owner={trade.username}
            status={trade.trade_status}
            trade_id={trade.trade_id}
          />
        ))}
      </div>
    </div>
  );
}
