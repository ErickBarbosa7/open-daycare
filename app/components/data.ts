export type Child = {
  id: string;
  name: string;
  age: string;
  room: string;
  shift: string;
  color: string;
  initial: string;
};

export type Post = {
  id: number;
  child: string;
  type: "Actividad" | "Logro" | "Comida" | "Siesta";
  text: string;
  time: string;
  likes: number;
  comments: number;
  color: string;
  initial: string;
};

export const children: Child[] = [
  { id: "mateo", name: "Mateo Fernández", age: "3 años", room: "Sala Soles", shift: "Turno completo", color: "#2563eb", initial: "M" },
  { id: "sofia", name: "Sofía Méndez", age: "2 años", room: "Sala Estrellitas", shift: "Turno mañana", color: "#ec4899", initial: "S" },
];

export const posts: Post[] = [
  { id: 1, child: "Mateo Fernández", type: "Logro", text: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.", time: "14:20", likes: 3, comments: 1, color: "#2563eb", initial: "M" },
  { id: 2, child: "Mateo Fernández", type: "Actividad", text: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.", time: "11:15", likes: 5, comments: 2, color: "#2563eb", initial: "M" },
  { id: 3, child: "Sofía Méndez", type: "Comida", text: "Sofía terminó toda su fruta y pidió un poco más. ¡Qué buen apetito!", time: "10:30", likes: 2, comments: 0, color: "#ec4899", initial: "S" },
];
