export type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  // Frontend
  { value: "HTML CSS", label: "HTML CSS" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "React.js", label: "React.js" },
  { value: "Next.js", label: "Next.js" },
  { value: "Zod", label: "Zod" },
  { value: "Redux", label: "Redux" },
  { value: "Recoil", label: "Recoil" },
  { value: "TurboRepo", label: "TurboRepo" },
  { value: "Full Frontend", label: "Full Frontend" },

  // Backend
  { value: "Node.js", label: "Node.js" },
  { value: "Mongo", label: "Mongo" },
  { value: "Postgres", label: "Postgres" },
  { value: "Prisma", label: "Prisma" },
  { value: "Redis", label: "Redis" },
  { value: "Kafka", label: "Kafka" },
  { value: "Graphql", label: "Graphql" },
  { value: "GRPC", label: "GRPC" },
  { value: "Hono", label: "Hono" },
  { value: "Sockets", label: "Sockets" },
  { value: "webRTC", label: "webRTC" },
  { value: "Scaling", label: "Scaling" },
  { value: "Security", label: "Security" },
  { value: "Full Backend", label: "Full Backend" },

  // DevOps
  { value: "Docker", label: "Docker" },
  { value: "CI CD", label: "CI CD" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "Monitoring", label: "Monitoring" },
  { value: "AWS", label: "AWS" },
  { value: "Full DevOps", label: "Full DevOps" },

  // System Design
  { value: "System Design", label: "System Design" },

  // Testing
  { value: "Vitest", label: "Vitest" },
  { value: "Cypress", label: "Cypress" },
  { value: "Jest", label: "Jest" },
  { value: "Full Testing", label: "Full Testing" },

  { value: "Full Stack Engineer", label: "Full Stack Engineer" },
];

export { options };
