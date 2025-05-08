
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const plans = [
  {
    name: "Daily",
    price: "₹80",
    period: "per meal",
    description: "Perfect for trying out our service",
    features: [
      "Different variety each day",
      "Order before 10 AM",
      "Free delivery within 2km",
      "Pay as you go",
    ],
    popular: false,
    buttonText: "Order Now"
  },
  {
    name: "Weekly",
    price: "₹70",
    period: "per meal",
    description: "Our most popular plan",
    features: [
      "Choose meals for the week",
      "₹10 discount per meal",
      "Free delivery within 3km",
      "Weekly billing",
      "Menu customization"
    ],
    popular: true,
    buttonText: "Start Weekly Plan"
  },
  {
    name: "Monthly",
    price: "₹60",
    period: "per meal",
    description: "Best value for regular customers",
    features: [
      "Choose meals for the month",
      "₹20 discount per meal",
      "Priority delivery",
      "Free delivery within 5km",
      "Monthly billing",
      "Special weekend meals"
    ],
    popular: false,
    buttonText: "Start Monthly Plan"
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Simple, Affordable Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works best for you. All plans include our delicious mess food at affordable rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${plan.popular ? 'border-brand-orange shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-bl-md">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="flex justify-center items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Link href='/contact'>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-brand-orange hover:bg-brand-orange/90' : 'bg-brand-green hover:bg-brand-green/90'}`}
                >
                  {plan.buttonText}
                </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            All plans can be canceled or modified at any time. Need a custom plan for your office or group?
            <a href="/contact" className="text-brand-orange ml-1 hover:underline">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
