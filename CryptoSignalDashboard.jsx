import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function CryptoSignalDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📊 Crypto Algo Dashboard</h1>
        <div className="space-x-2">
          <Button>🔁 Auto Trading</Button>
          <Button>🧠 Signal AI</Button>
          <Button>⚙️ Settings</Button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <Input placeholder="Search Coin (e.g. BTCUSDT)" className="max-w-xs" />
        <Badge variant="outline">⏺️ Live</Badge>
      </div>

      {/* Signal Card */}
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <div className="text-lg font-semibold">💰 BTC/USDT</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              📈 <strong>Price:</strong> $62,540.50
            </div>
            <div>
              📉 <strong>RSI:</strong> 27.45 (Oversold)
            </div>
            <div>
              📊 <strong>MACD:</strong> Bearish
            </div>
            <div>
              🟢 <strong>Signal:</strong> <span className="text-green-600 font-bold">BUY ✅</span>
            </div>
            <div>
              ⏱️ <strong>Time:</strong> 2:03 PM
            </div>
            <div>
              📤 <strong>Triggered:</strong> Yes
            </div>
          </div>
          <div className="flex space-x-2 pt-4">
            <Button variant="default">📎 See Full Analysis</Button>
            <Button variant="destructive">⚠️ Force Stop</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
