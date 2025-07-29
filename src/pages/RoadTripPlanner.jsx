
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const roadtripData = [
  {
    region: 'Sydney',
    period: '01 Jan - 21 Jan',
    duration: 20,
    objectives: 'Découverte + installation + travail léger',
    todos: [
      "Visite de l'Opéra et du Harbour Bridge",
      "Balade à Bondi Beach et Coogee",
      "Excursion aux Blue Mountains",
      "Coworking dans les quartiers de Newtown et Surry Hills"
    ]
  },
  {
    region: 'Melbourne',
    period: '22 Jan - 16 Feb',
    duration: 25,
    objectives: 'Exploration + coworking + recherche WHV',
    todos: [
      "Découverte de Hosier Lane et street art",
      "Road trip sur la Great Ocean Road",
      "Observation des manchots à Phillip Island",
      "Recherche de missions en Working Holiday Visa"
    ]
  },
  {
    region: 'Adelaide / Clare Valley',
    period: '17 Feb - 04 Mar',
    duration: 15,
    objectives: 'Nature, vignobles, repos',
    todos: [
      "Dégustation de vins à Clare Valley",
      "Riesling Trail à vélo",
      "Exploration du marché central d'Adelaide",
      "Repos et écriture/contenu pour le blog"
    ]
  },
  {
    region: 'Perth',
    period: '05 Mar - 25 Mar',
    duration: 20,
    objectives: 'Ville + travail + planification nord',
    todos: [
      "Excursion à Rottnest Island (quokkas)",
      "Baignade à Cottesloe Beach",
      "Journées de travail à Fremantle",
      "Préparation du trajet vers le nord"
    ]
  },
  {
    region: 'Karratha / Karijini',
    period: '26 Mar - 20 Apr',
    duration: 25,
    objectives: 'Road trip intense + nature',
    todos: [
      "Randos dans les gorges de Karijini National Park",
      "Découverte des pétroglyphes à Murujuga",
      "Baignade à Hearson’s Cove",
      "Camping sauvage et nuit à la belle étoile"
    ]
  },
  {
    region: 'Darwin & Kakadu',
    period: '21 Apr - 21 May',
    duration: 30,
    objectives: 'Exploration + missions WHV + détente',
    todos: [
      "Croisière aux crocodiles sur l’Adelaide River",
      "Visite de Kakadu et Litchfield National Park",
      "Marché de nuit de Mindil Beach",
      "Recherche de jobs courts en Working Holiday Visa"
    ]
  }
];

export default function RoadTripPlanner() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="p-4 grid gap-4">
      {roadtripData.map((step, index) => (
        <Card key={index} onClick={() => setActiveIndex(index)} className="cursor-pointer hover:shadow-xl">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold">{step.region} ({step.period})</h2>
            <p className="text-sm italic">{step.objectives}</p>
            {activeIndex === index && (
              <ul className="mt-2 list-disc list-inside">
                {step.todos.map((todo, idx) => (
                  <li key={idx}>{todo}</li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
