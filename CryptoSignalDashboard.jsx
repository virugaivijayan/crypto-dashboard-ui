import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function CryptoSignalDashboard() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [signal, setSignal] = useState(null);

  const fetchSignal = (sym) => {
    fetch(`https://crypto-api-backend-0eni.onrender.com/api/signal/${sym}`)
      .then((res) => res.json())
      .then((data) => setSignal(data))
      .catch((err) => console.error("API error:", err));
  };

  useEffect(() => {
    fetchSignal(symbol); // Initial load
    const interval = setInterval(() => fetchSignal(symbol), 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📊 Crypto Algo Dashboard</h1>
        <div className="space-x-2">
          <Button>🚗 Auto Trading</Button>
          <Button>🧠 Signal AI</Button>
          <Button>⚙️ Settings</Button>
        </div>
      </div>

      {/* Dropdown + Live Badge */}
      <div className="flex items-center space-x-4">
        <select
          className="max-w-xs px-3 py-2 border border-gray-300 rounded-md"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        >
          <option value="BTCUSDT">BTC/USDT</option>
          <option value="XAUUSD">GOLD (XAU/USD)</option>
          <option value="EURUSD">EUR/USD</option>
        </select>
        <Badge variant="outline">⏺️ Live: {symbol}</Badge>
      </div>

      {/* Signal Card */}
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <div className="text-lg font-semibold">
            💰 {signal?.symbol || "Loading..."}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>📈 <strong>Price:</strong> ${signal?.price}</div>
            <div>📉 <strong>RSI:</strong> {signal?.rsi}</div>
            <div>📊 <strong>MACD:</strong> {signal?.macd}</div>
            <div>🟢 <strong>Signal:</strong> <span className="text-green-600 font-bold">{signal?.signal}</span></div>
            <div>⏱️ <strong>Time:</strong> {signal?.time}</div>
            <div>📤 <strong>Triggered:</strong> {signal?.triggered ? "Yes" : "No"}</div>
          </div>
          <div className="flex space-x-2 pt-4">
            <Button variant="default">🔍 See Full Analysis</Button>
            <Button variant="destructive">⚠️ Force Stop</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
