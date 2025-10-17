import { useState, useEffect } from "react";
import CircularGauge from "@/components/CircularGauge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  // Mock moisture data - in a real app, this would come from your sensor
  const [moistureLevel, setMoistureLevel] = useState(65);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time updates (optional - remove if you want static display)
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000); // Update timestamp every minute
    
    return () => clearInterval(interval);
  }, []);

  const getStatusMessage = (moisture: number) => {
    if (moisture >= 70) return "Feeling happy and hydrated! 💧";
    if (moisture >= 50) return "Perfectly comfortable! 🌱";
    if (moisture >= 30) return "A little thirsty today 🌿";
    if (moisture >= 15) return "Could use a drink soon! 💦";
    return "Really thirsty, please water! 🏜️";
  };

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "a moment ago";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return "today";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg animate-in fade-in-50 duration-500">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-semibold text-foreground">
            My Plant's Corner 🪴
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 pt-6">
          {/* Circular Gauge */}
          <div className="relative">
            <CircularGauge percentage={moistureLevel} size={220} strokeWidth={16} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-foreground mb-1">
                {moistureLevel}%
              </div>
              <div className="text-sm text-muted-foreground px-4 text-center leading-tight">
                {getStatusMessage(moistureLevel)}
              </div>
            </div>
          </div>

          {/* Timestamp */}
          <div className="text-sm text-muted-foreground">
            Last checked: {getTimeAgo(lastUpdate)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
