export interface Work {
  id: number;
  title: string;
  artist: string;
  year: number;
  category: string;
  description: string;
  imageUrl: string;
  medium?: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Manifesto Poster",
    artist: "Elena Rodriguez",
    year: 2024,
    category: "Graphic Design",
    description: "A bold typographic exploration that challenges conventional poster design through asymmetric layouts and experimental letterforms. This piece interrogates the relationship between message and medium.",
    imageUrl: "https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc3NDgwNjc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Digital Print, 70x100cm"
  },
  {
    id: 2,
    title: "Spatial Studies",
    artist: "Marcus Chen",
    year: 2023,
    category: "Architecture",
    description: "An investigation of negative space and structural minimalism. This architectural photography series captures the intersection of light, geometry, and human scale in contemporary urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1646123202952-4f2e037b7936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzQ4MDY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Photography, C-Print"
  },
  {
    id: 3,
    title: "Geometric Interventions",
    artist: "Sofia Andersson",
    year: 2025,
    category: "Installation",
    description: "An immersive spatial installation that reimagines geometric abstraction through physical form. The work creates a dialogue between viewer, space, and material through calculated imperfection.",
    imageUrl: "https://images.unsplash.com/photo-1772992552302-825bb23ffb1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFydCUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzQ3MjM2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Mixed Media Installation"
  },
  {
    id: 4,
    title: "Object Study №12",
    artist: "Yuki Tanaka",
    year: 2024,
    category: "Product Design",
    description: "A meditation on form and function through reductive design principles. This minimalist object exists at the boundary between utility and sculpture, questioning our relationship with everyday items.",
    imageUrl: "https://images.unsplash.com/photo-1658526064786-63d6e3603215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ3NjY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Ceramic, 15x20x8cm"
  },
  {
    id: 5,
    title: "Type Specimen",
    artist: "David Kim",
    year: 2023,
    category: "Typography",
    description: "An experimental typeface that deconstructs traditional letterforms while maintaining legibility. Each character is a study in balance between radical formal innovation and functional communication.",
    imageUrl: "https://images.unsplash.com/photo-1771792278518-1ae81427d1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50YWwlMjB0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc3NDc2NTEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Custom Typeface, Variable Font"
  },
  {
    id: 6,
    title: "Editorial Compositions",
    artist: "Anna Kowalski",
    year: 2025,
    category: "Editorial",
    description: "A series of magazine layouts that push the boundaries of editorial design. Through unconventional grid systems and typographic hierarchy, this work creates new reading experiences.",
    imageUrl: "https://images.unsplash.com/photo-1774029764284-1e52eddb2e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWdhemluZSUyMGxheW91dHxlbnwxfHx8fDE3NzQ4MDI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    medium: "Print, 210x297mm"
  }
];

export const categories = [
  "All",
  "Graphic Design",
  "Architecture",
  "Installation",
  "Product Design",
  "Typography",
  "Editorial"
];

// Get today's work based on date
export function getTodaysWork(): Work {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % works.length;
  return works[index];
}

export function getWorkById(id: number): Work | undefined {
  return works.find(work => work.id === id);
}

export function getWorksByCategory(category: string): Work[] {
  if (category === "All") return works;
  return works.filter(work => work.category === category);
}
