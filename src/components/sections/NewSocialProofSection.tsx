"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, MapPin, Calendar, DollarSign, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface RecentSale {
  id: string;
  address: string;
  city: string;
  state: string;
  amount: string;
  daysToClose: number;
  condition: string;
}

const recentSales: RecentSale[] = [
  {
    id: "1",
    address: "1847 Oak Street",
    city: "Sacramento",
    state: "CA",
    amount: "$425,000",
    daysToClose: 12,
    condition: "Needs Major Repairs"
  },
  {
    id: "2", 
    address: "592 Pine Avenue",
    city: "Seattle",
    state: "WA", 
    amount: "$715,000",
    daysToClose: 9,
    condition: "Estate Sale"
  },
  {
    id: "3",
    address: "1203 Maple Drive",
    city: "Los Angeles",
    state: "CA",
    amount: "$850,000", 
    daysToClose: 7,
    condition: "Foreclosure"
  },
  {
    id: "4",
    address: "346 Cedar Lane",
    city: "Spokane", 
    state: "WA",
    amount: "$285,000",
    daysToClose: 14,
    condition: "Water Damage"
  },
  {
    id: "5",
    address: "789 Birch Court",
    city: "San Diego",
    state: "CA", 
    amount: "$920,000",
    daysToClose: 10,
    condition: "Job Relocation"
  }
];

const stats = [
  { 
    icon: Home, 
    value: "1,200+", 
    label: "Houses Purchased",
    description: "Since 2018"
  },
  { 
    icon: DollarSign, 
    value: "$180M+", 
    label: "Total Paid to Homeowners",
    description: "Fair market value"
  },
  { 
    icon: Users, 
    value: "850+", 
    label: "Happy Families Helped",
    description: "5-star reviews"
  },
  { 
    icon: TrendingUp, 
    value: "12", 
    label: "Average Days to Close",
    description: "Faster than traditional sales"
  }
];

export default function NewSocialProofSection() {
  const [currentSales] = useState(recentSales.slice(0, 3));
  const [housesThisWeek, setHousesThisWeek] = useState(12);

  useEffect(() => {
    // Simulate live counter
    const interval = setInterval(() => {
      setHousesThisWeek(prev => prev + Math.floor(Math.random() * 2));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Homeowners Across California & Washington
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve helped hundreds of families sell their homes quickly and fairly. 
            See our recent purchases and what makes us different.
          </p>
        </div>

        {/* Live Counter */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3 flex items-center gap-2"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              <span className="font-bold text-primary">{housesThisWeek}</span> houses purchased this week
            </span>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Sales */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Home Purchases</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentSales.map((sale, index) => (
              <motion.div
                key={sale.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                          <Home className="h-5 w-5 text-primary" />
                          {sale.address}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4" />
                          {sale.city}, {sale.state}
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {sale.daysToClose} days
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Purchase Price:</span>
                      <span className="text-lg font-bold text-primary">{sale.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Condition:</span>
                      <Badge variant="outline" className="text-xs">
                        {sale.condition}
                      </Badge>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-muted-foreground">
                        ✓ No repairs required • ✓ Fast closing • ✓ No agent fees
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-6">Why Homeowners Trust Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl">🏠</div>
              <h4 className="font-semibold">Any Condition</h4>
              <p className="text-sm text-muted-foreground">
                Fire damage, water damage, inherited properties, foreclosures - we buy them all
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">⚡</div>
              <h4 className="font-semibold">Lightning Fast</h4>
              <p className="text-sm text-muted-foreground">
                Get an offer in 24 hours, close in as little as 7 days
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">💰</div>
              <h4 className="font-semibold">Fair Market Value</h4>
              <p className="text-sm text-muted-foreground">
                No lowball offers - we pay competitive cash prices based on current market value
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 