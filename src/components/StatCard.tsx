
import React from 'react';
import { Card } from "@/components/ui/card";

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      {icon && <div className="text-agency-blue mb-3 flex justify-center">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-agency-dark mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </Card>
  );
};

export default StatCard;
