import { Project } from "types";

// Utility function for kebab-case conversion
function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const projects: Project[] = [
  {
    id: 0,
    title: "Website e Aplicações Web",
    desc: "Na Nexus JR, criamos websites modernos e aplicações web robustas, projetados para atender às suas necessidades e proporcionar experiências excepcionais aos usuários.",
    img: "/static/projects/web.svg",
    link: "/servicos/consultoria-ia",
    tags: ["Estratégia", "Transformação Digital", "IA Corporativa"],
  },
  {
    id: 1,
    title: "Aplicativos",
    desc: "Na Nexus JR, transformamos ideias em aplicativos móveis eficientes e intuitivos. Criamos soluções para Android e iOS, com foco em funcionalidade, design atraente e experiência do usuário impecável.",
    img: "/static/projects/android.svg",
    link: "/servicos/machine-learning",
    tags: ["Análise Preditiva", "Treinamento de Modelos", "Deep Learning"],
  },
  {
    id: 2,
    title: "Automação Inteligente",
    desc: "Automatizamos interações, otimizamos o atendimento ao cliente e criamos soluções inteligentes que integram perfeitamente o seu negócio às necessidades do público.",
    img: "/static/projects/bot.svg",
    link: "/servicos/arquitetura-dados",
    tags: ["Cloud", "Engenharia de Dados", "Data Warehousing"],
  },
  {
    id: 3,
    title: "Design",
    desc: "A Nexus JR oferece serviços de design que unem estética e funcionalidade. Desde a identidade visual até interfaces digitais, criamos designs que destacam sua marca e encantam seu público.",
    img: "/static/projects/design.svg",
    link: "/servicos/prototipagem-ia",
    tags: ["MVP", "Prova de Conceito", "Inovação"],
  },
  {
    id: 4,
    title: "Governança Ética de IA",
    desc: "Frameworks abrangentes de governança para implementação ética e responsável de IA.",
    img: "/static/projects/psd.svg",
    link: "/servicos/governanca-etica",
    tags: ["IA Ética", "Conformidade", "Gestão de Riscos"],
  },
  {
    id: 5,
    title: "Analytics Avançado",
    desc: "Transforme seus dados em insights estratégicos com soluções analíticas avançadas.",
    img: "/static/projects/website.svg",
    link: "/servicos/analytics",
    tags: [
      "Inteligência de Negócios",
      "Visualização de Dados",
      "Insights Estratégicos",
    ],
  },
];

export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
