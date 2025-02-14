
import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AssemblyStats as AssemblyStatsType } from '@/types';

interface AssemblyStatsProps {
  stats: AssemblyStatsType;
}

const AssemblyStats = ({ stats }: AssemblyStatsProps) => {
  const data = [
    {
      name: 'Home',
      Intervenció: stats.byType.intervencio,
      Dinamitza: stats.byType.dinamitza,
      Interrupció: stats.byType.interrupcio,
      Llarga: stats.byType.llarga,
      Ofensiva: stats.byType.ofensiva,
      Explica: stats.byType.explica,
    },
    {
      name: 'Dona',
      Intervenció: stats.byType.intervencio,
      Dinamitza: stats.byType.dinamitza,
      Interrupció: stats.byType.interrupcio,
      Llarga: stats.byType.llarga,
      Ofensiva: stats.byType.ofensiva,
      Explica: stats.byType.explica,
    },
    {
      name: 'Trans',
      Intervenció: stats.byType.intervencio,
      Dinamitza: stats.byType.dinamitza,
      Interrupció: stats.byType.interrupcio,
      Llarga: stats.byType.llarga,
      Ofensiva: stats.byType.ofensiva,
      Explica: stats.byType.explica,
    },
    {
      name: 'No Binari',
      Intervenció: stats.byType.intervencio,
      Dinamitza: stats.byType.dinamitza,
      Interrupció: stats.byType.interrupcio,
      Llarga: stats.byType.llarga,
      Ofensiva: stats.byType.ofensiva,
      Explica: stats.byType.explica,
    },
  ];

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Estadístiques per Gènere i Tipus</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Intervenció" stackId="a" fill="#8884d8" />
            <Bar dataKey="Dinamitza" stackId="a" fill="#82ca9d" />
            <Bar dataKey="Interrupció" stackId="a" fill="#ffc658" />
            <Bar dataKey="Llarga" stackId="a" fill="#ff8042" />
            <Bar dataKey="Ofensiva" stackId="a" fill="#ff6b6b" />
            <Bar dataKey="Explica" stackId="a" fill="#4ecdc4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default AssemblyStats;
