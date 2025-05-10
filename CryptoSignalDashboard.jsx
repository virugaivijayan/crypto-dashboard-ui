import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

export default function CryptoSignalDashboard() {
  const [signal, setSignal] = useState(null);

  useEffect(() => {
    fetch("https://crypto-api-backend-0eni.onrender.com/api/signal/BTCUSDT")
      .then((res) => res.json())
      .then((data) => setSignal(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📊 Crypto Algo Dashboard</h1>
        <div className="space-x-2">
          <Button>🔁 Auto Trading</Button>
          <Button>🧠 Signal AI</Button>
          <Button>⚙️ Settings</Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Input placeholder="Search Coin (e.g. BTCUSDT)" className="max-w-xs" />
        <Badge variant="outline">⏺️ Live</Badge>
      </div>

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
        </CardContent>
      </Card>
    </div>
  );
}

