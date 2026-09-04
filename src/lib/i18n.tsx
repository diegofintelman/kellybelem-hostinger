import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "pt" | "es";

type Dict = typeof EN;

const DISCLAIMER_EN = "Information contained in this document should not be construed as legal, tax, investment, financial, or other advice. Prospective donor investors are strongly encouraged to consult with their own accounting, tax, and financial professionals regarding the potential implications and suitability of any investment or transaction described.";
const DISCLAIMER_PT = "As informações contidas neste documento não devem ser interpretadas como aconselhamento jurídico, fiscal, de investimento, financeiro ou de qualquer outra natureza. Investidores em potencial são fortemente encorajados a consultar seus próprios profissionais de contabilidade, tributação e finanças quanto às possíveis implicações e à adequação de qualquer investimento ou transação descrita.";
const DISCLAIMER_ES = "La información contenida en este documento no debe interpretarse como asesoramiento legal, fiscal, de inversión, financiero o de cualquier otro tipo. Se recomienda encarecidamente a los posibles inversores que consulten con sus propios profesionales de contabilidad, impuestos y finanzas sobre las posibles implicaciones y la idoneidad de cualquier inversión o transacción descrita.";

export const EN = {
  nav: {
    history: "History",
    property: "Property",
    investment: "Investment",
    kelly: "Kelly",
    cta: "Speak with Kelly",
  },
  hero: {
    location: "Coral Gables, Florida",
    price: "US$ 3,200,000",
    h1a: "Five independent Cottages",
    h1b: "in a 13,140 sqft lot.",
    h1c: "First time on the market in two decades.",
    sub: "A 1929 historic estate. Five oolitic coral stone structures.",
    ctaPrimary: "Speak with Kelly Belem",
    ctaSecondary: "Discover the property →",
    rail1: "Vol. I · 2026 Edition",
    rail2: "1301 Milan Avenue",
    rail3: "Local Historic Landmark",
  },
  history: {
    eyebrow: "§ 02 · The History",
    h2a: "Built in 1929",
    h2b: "for the University",
    h2c: "of Miami.",
    p1: "Warren Zinsmaster purchased Madrid House directly from George Merrick's development team in 1924. Four years later, he commissioned architect E. Dean Parmelee to expand the compound into five oolitic coral stone structures, originally conceived to house visiting professors of the newly founded University of Miami. Zinsmaster later became the institution's first controller and accounting professor. The initials he carved into the doors and plaques of each cottage remain intact to this day, offering a lasting connection to the property's origins.",
    p2: "By the 2000s, the compound had already stood for over seven decades, carrying with it a rich architectural and historical legacy. In 2007, the property was officially designated as a Local Historic Landmark by the Coral Gables Historic Preservation Board.",
  },
  property: {
    eyebrow: "§ 03 · The Property",
    h2a: "Five independent historical cottages",
    h2b: "in the heart of",
    h2c: "Coral Gables.",
  },
  cottages: [
    { id: "c1", name: "Cottage 1", meta: "677 sq.ft. · 1 bed · 1 bath",
      body: "677 sq.ft. · 1 bed · 1 bath · kitchenette · walking closet · sitting area · private porch." },
    { id: "c2", name: "Cottage 2", meta: "677 sq.ft. · 1 bed · 1 bath",
      body: "677 sq.ft. · 1 bed · 1 bath · kitchenette · walking closet · sitting area · private porch." },
    { id: "c3", name: "Cottage 3", meta: "677 sq.ft. · 1 bed · 1 bath",
      body: "677 sq.ft. · 1 bed · 1 bath · kitchenette · walking closet · sitting area · private porch." },
    { id: "c4", name: "Cottage 4", meta: "677 sq.ft. · 1 bed · 1 bath",
      body: "677 sq.ft. · 1 bed · 1 bath · kitchenette · walking closet · sitting area · private porch." },
    { id: "c5", name: "Cottage 5", meta: "804 sq.ft. · 2 bed · 2 bath",
      body: "804 sq.ft. · 2 bed · 2 bath · kitchen · living room · closet." },
    { id: "ruina", name: "The Common Areas", meta: "Coral stone arcades · Rooftop terrace",
      body: "The common areas, framed by coral stone arcades and garden courtyards, transport you to another era. A rooftop terrace inspired by Park Güell in Barcelona offers a unique setting, perfect for intimate gatherings and memorable events. An additional structure, approved for restoration, presents endless possibilities as a media room, studio, event space, or even another private cottage." },
  ],
  tax: {
    eyebrow: "§ 04 · Tax Benefits of Historic Properties",
    h2a: "U.S. historic property",
    h2b: "has its own tax regime.",
    sub: "Timeless character with meaningful financial advantages.",
    body: "Owning a historic property offers not only timeless character, but also meaningful financial advantages.\n\nDesignated historic homes may qualify for property tax incentives, including partial exemptions on the value of approved improvements. These programs help reduce the overall tax burden while preserving the property's original integrity.\n\nIn some cases, restoration work may also be eligible for additional tax benefits, depending on local guidelines.\n\nBeyond the financial aspect, historic properties tend to hold long-term value due to their uniqueness and limited availability — making them both a lifestyle choice and a strategic investment.",
    disclaimer: DISCLAIMER_EN,
  },
  invest: {
    eyebrow: "§ 05 · Income-Generating Opportunity",
    h2a: "Five units.",
    h2b: "Multiple revenue streams.",
    body: "This property presents a compelling opportunity for those seeking both cultural richness and return on investment.\n\nWith the ability to be rented for periods of six months or longer, it offers a steady and reliable income stream while maintaining flexibility for personal use. Whether positioned as a seasonal residence or a long-term rental, the property is especially appealing to tenants who value art, history, and architectural character.\n\nIts versatility allows owners to maximize occupancy and generate consistent revenue, making it an ideal option for investors or buyers looking to offset ownership costs.\n\nA rare combination of heritage and performance, where your property works for you.",
    disclaimer: DISCLAIMER_EN,
  },
  kelly: {
    eyebrow: "§ 06 · Who represents this property",
    name: "Kelly Belem.",
    sub: "Top Producer · Master Agent · Agent of the Year — Keller Williams.",
    p1: "Born in Brazil and rooted in the United States, Kelly built her trajectory combining a decade of experience with multinational corporations — with a degree in Business and an MBA in Marketing — and the precision and discretion that the high-end real estate market demands. Her expertise in sales, strategic positioning, and product development transferred naturally to real estate, where she now represents buyers and sellers in high-value transactions across South Florida.",
    p2: "Recognized as a Top Producer in South Florida, and honored as both Master Agent and Agent of the Year at Keller Williams, Kelly has built a reputation grounded not only in results, but in the caliber of service she delivers. Her philosophy is simple yet uncompromising: every client is represented with intention, care, and a strategy tailored exclusively to their goals.",
    badges: ["Keller Williams Realty", "Top Producer · S. Florida", "Master Agent", "Agent of the Year"],
  },
  reviews: {
    eyebrow: "§ 07 · Google Reviews",
    h2a: "What clients say about",
    h2b: "Kelly Belem",
    items: [
      { name: "M & I", ctx: "Buyers · South Florida",
        quote: "Working with Kelly was both productive and enjoyable. She gave us full attention in every interaction, consistently going above and beyond. Competence, dedication, trust, and professionalism — truly a complete professional." },
      { name: "Sellers · 14940 Egan Lane", ctx: "Home sale in slow market",
        quote: "Within two weeks we had multiple offers and sold very close to the asking price. Kelly understands how to position and sell a home effectively, even in a slower market." },
      { name: "Buyers · 8787 SW 107th St", ctx: "Acquisition with custom payment structure",
        quote: "Kelly played a critical role in structuring our deal terms. Her ability to anticipate challenges gave us tremendous peace of mind." },
    ],
  },
  contact: {
    eyebrow: "§ 08 · Speak with Kelly",
    title: "The Coral Rock Village",
    address: "1301 Milan Avenue · Coral Gables",
    price: "US$ 3,200,000",
    included: "What's included",
    bullets: [
      "Four Cottages — 677 sq.ft. each, in oolitic coral stone",
      "Cottage #5 — 804 sq.ft. + approved 1,000 sq.ft. expansion",
      "Historical Structure — multi-possibilities space, approved for restoration",
      "13,140 sq.ft. lot",
      "Local Historic Landmark designation",
    ],
    formTitle: "Fill out to speak with Kelly:",
    fields: { name: "Full name", email: "E-mail", phone: "Phone (with country code)" },
    submit: "Speak with Kelly Belem",
    whatsapp: "or open directly on WhatsApp →",
    waMsg: "Hello, I'm coming from the website and I'd like to talk about The Coral Rock Village.",
  },
  footer: { rights: "© 2026 · 1301 Milan Avenue · Coral Gables, FL" },
};

export const PT: Dict = {
  nav: {
    history: "História",
    property: "Propriedade",
    investment: "Investimento",
    kelly: "Kelly",
    cta: "Falar com Kelly",
  },
  hero: {
    location: "Coral Gables, Flórida",
    price: "US$ 3.200.000",
    h1a: "Cinco Cottages independentes",
    h1b: "em um lote de 13.140 sqft.",
    h1c: "Primeira vez no mercado em duas décadas.",
    sub: "Uma propriedade histórica de 1929. Cinco estruturas em pedra coral oolítica.",
    ctaPrimary: "Falar com Kelly Belem",
    ctaSecondary: "Conhecer a propriedade →",
    rail1: "Vol. I · Edição 2026",
    rail2: "1301 Milan Avenue",
    rail3: "Local Historic Landmark",
  },
  history: {
    eyebrow: "§ 02 · A História",
    h2a: "Construída em 1929",
    h2b: "para a Universidade",
    h2c: "de Miami.",
    p1: "Warren Zinsmaster comprou a Madrid House diretamente da equipe de desenvolvimento de George Merrick em 1924. Quatro anos depois, encomendou ao arquiteto E. Dean Parmelee a expansão do conjunto em cinco estruturas de pedra coral oolítica, originalmente concebidas para hospedar professores visitantes da recém-fundada Universidade de Miami. Zinsmaster tornou-se mais tarde o primeiro controller e professor de contabilidade da instituição. As iniciais que ele entalhou nas portas e placas de cada cottage permanecem intactas até hoje, oferecendo uma conexão duradoura com as origens da propriedade.",
    p2: "Já nos anos 2000, o conjunto havia atravessado mais de sete décadas, carregando consigo um rico legado arquitetônico e histórico. Em 2007, a propriedade foi oficialmente designada como Local Historic Landmark pelo Coral Gables Historic Preservation Board.",
  },
  property: {
    eyebrow: "§ 03 · A Propriedade",
    h2a: "Cinco cottages históricos independentes",
    h2b: "no coração de",
    h2c: "Coral Gables.",
  },
  cottages: [
    { id: "c1", name: "Cottage 1", meta: "677 sq.ft. · 1 quarto · 1 banho",
      body: "677 sq.ft. · 1 quarto · 1 banho · kitchenette · walking closet · área de estar · varanda privativa." },
    { id: "c2", name: "Cottage 2", meta: "677 sq.ft. · 1 quarto · 1 banho",
      body: "677 sq.ft. · 1 quarto · 1 banho · kitchenette · walking closet · área de estar · varanda privativa." },
    { id: "c3", name: "Cottage 3", meta: "677 sq.ft. · 1 quarto · 1 banho",
      body: "677 sq.ft. · 1 quarto · 1 banho · kitchenette · walking closet · área de estar · varanda privativa." },
    { id: "c4", name: "Cottage 4", meta: "677 sq.ft. · 1 quarto · 1 banho",
      body: "677 sq.ft. · 1 quarto · 1 banho · kitchenette · walking closet · área de estar · varanda privativa." },
    { id: "c5", name: "Cottage 5", meta: "804 sq.ft. · 2 quartos · 2 banhos",
      body: "804 sq.ft. · 2 quartos · 2 banhos · cozinha · sala de estar · closet." },
    { id: "ruina", name: "The Common Areas", meta: "Arcadas em pedra coral · Terraço rooftop",
      body: "As áreas comuns, emolduradas por arcadas em pedra coral e pátios ajardinados, transportam você para outra época. Um terraço rooftop inspirado no Park Güell em Barcelona oferece um cenário único, perfeito para encontros íntimos e eventos memoráveis. Uma estrutura adicional, aprovada para restauração, apresenta possibilidades infinitas como sala de mídia, estúdio, espaço para eventos ou até mesmo outro cottage privativo." },
  ],
  tax: {
    eyebrow: "§ 04 · Benefícios Fiscais de Propriedades Históricas",
    h2a: "Patrimônio histórico nos EUA",
    h2b: "tem regime tributário próprio.",
    sub: "Caráter atemporal com vantagens financeiras significativas.",
    body: "Possuir uma propriedade histórica oferece não apenas caráter atemporal, mas também vantagens financeiras significativas.\n\nResidências históricas designadas podem se qualificar para incentivos sobre o property tax, incluindo isenções parciais sobre o valor de melhorias aprovadas. Esses programas ajudam a reduzir a carga tributária total enquanto preservam a integridade original da propriedade.\n\nEm alguns casos, obras de restauração também podem ser elegíveis a benefícios fiscais adicionais, dependendo das diretrizes locais.\n\nAlém do aspecto financeiro, propriedades históricas tendem a manter valor de longo prazo devido à sua singularidade e disponibilidade limitada — tornando-se tanto uma escolha de estilo de vida quanto um investimento estratégico.",
    disclaimer: DISCLAIMER_PT,
  },
  invest: {
    eyebrow: "§ 05 · Oportunidade de Geração de Renda",
    h2a: "Cinco unidades.",
    h2b: "Múltiplos fluxos de receita.",
    body: "Esta propriedade representa uma oportunidade única para quem busca tanto riqueza cultural quanto retorno sobre o investimento.\n\nCom a possibilidade de ser alugada por períodos de seis meses ou mais, oferece um fluxo de renda estável e confiável, mantendo flexibilidade para uso pessoal. Seja posicionada como residência sazonal ou aluguel de longo prazo, a propriedade é especialmente atrativa para inquilinos que valorizam arte, história e caráter arquitetônico.\n\nSua versatilidade permite que os proprietários maximizem a ocupação e gerem receita consistente, tornando-se uma opção ideal para investidores ou compradores que buscam compensar os custos de propriedade.\n\nUma combinação rara de patrimônio e desempenho, em que sua propriedade trabalha por você.",
    disclaimer: DISCLAIMER_PT,
  },
  kelly: {
    eyebrow: "§ 06 · Quem representa esta propriedade",
    name: "Kelly Belem.",
    sub: "Top Producer · Master Agent · Agent of the Year — Keller Williams.",
    p1: "Brasileira radicada nos Estados Unidos, Kelly construiu sua trajetória combinando uma década de experiência em multinacionais — com formação em Administração e MBA em Marketing — com a precisão e a discrição que o mercado de imóveis de alto padrão exige. Sua especialização em vendas, posicionamento estratégico e desenvolvimento de produto transferiu-se naturalmente para o setor imobiliário, onde representa hoje compradores e vendedores em transações de alto valor no sul da Flórida.",
    p2: "Reconhecida como Top Producer em South Florida e premiada como Master Agent e Agent of the Year pela Keller Williams, Kelly construiu uma reputação ancorada não apenas em resultados, mas no calibre do serviço que entrega. Sua filosofia é simples e inegociável: cada cliente é representado com intenção, cuidado e estratégia exclusivamente desenhada para os seus objetivos.",
    badges: ["Keller Williams Realty", "Top Producer · S. Florida", "Master Agent", "Agent of the Year"],
  },
  reviews: {
    eyebrow: "§ 07 · Google Reviews",
    h2a: "O que os clientes dizem sobre",
    h2b: "Kelly Belem",
    items: [
      { name: "M & I", ctx: "Compradores · South Florida",
        quote: "Trabalhar com a Kelly foi produtivo e prazeroso. Ela sempre nos deu atenção total em cada interação, indo consistentemente além do esperado. Competência, dedicação, confiança e profissionalismo — uma profissional completa." },
      { name: "Vendedores · 14940 Egan Lane", ctx: "Venda em mercado lento",
        quote: "Em duas semanas tínhamos múltiplas ofertas e fechamos perto do valor de tabela. Kelly conduziu o processo de forma extraordinária mesmo em mercado lento." },
      { name: "Compradores · 8787 SW 107th St", ctx: "Aquisição com estrutura customizada",
        quote: "Kelly teve papel crítico na estruturação dos termos do nosso negócio. Sua capacidade de antecipar desafios nos deu enorme tranquilidade." },
    ],
  },
  contact: {
    eyebrow: "§ 08 · Conversar com a Kelly",
    title: "The Coral Rock Village",
    address: "1301 Milan Avenue · Coral Gables",
    price: "US$ 3.200.000",
    included: "O que inclui",
    bullets: [
      "Quatro Cottages — 677 sq.ft. cada, em pedra coral oolítica",
      "Cottage #5 — 804 sq.ft. + expansão aprovada de 1.000 sq.ft.",
      "Estrutura Histórica — espaço multi-possibilidades, aprovado para restauração",
      "13.140 sq.ft. de terreno",
      "Designação Local Historic Landmark",
    ],
    formTitle: "Preencha para conversar com a Kelly:",
    fields: { name: "Nome completo", email: "E-mail", phone: "Telefone (com código do país)" },
    submit: "Falar com Kelly Belem",
    whatsapp: "ou abra direto no WhatsApp →",
    waMsg: "Olá, vim do site e gostaria de negociar The Coral Rock Village.",
  },
  footer: { rights: "© 2026 · 1301 Milan Avenue · Coral Gables, FL" },
};

export const ES: Dict = {
  nav: {
    history: "Historia",
    property: "Propiedad",
    investment: "Inversión",
    kelly: "Kelly",
    cta: "Hablar con Kelly",
  },
  hero: {
    location: "Coral Gables, Florida",
    price: "US$ 3.200.000",
    h1a: "Cinco Cottages independientes",
    h1b: "en un lote de 13.140 sqft.",
    h1c: "Por primera vez en el mercado en dos décadas.",
    sub: "Una propiedad histórica de 1929. Cinco estructuras en piedra coral oolítica.",
    ctaPrimary: "Hablar con Kelly Belem",
    ctaSecondary: "Conocer la propiedad →",
    rail1: "Vol. I · Edición 2026",
    rail2: "1301 Milan Avenue",
    rail3: "Local Historic Landmark",
  },
  history: {
    eyebrow: "§ 02 · La Historia",
    h2a: "Construida en 1929",
    h2b: "para la Universidad",
    h2c: "de Miami.",
    p1: "Warren Zinsmaster compró la Madrid House directamente al equipo de desarrollo de George Merrick en 1924. Cuatro años después, encargó al arquitecto E. Dean Parmelee la expansión del conjunto en cinco estructuras de piedra coral oolítica, originalmente concebidas para alojar a los profesores visitantes de la recién fundada Universidad de Miami. Zinsmaster se convirtió más tarde en el primer controller y profesor de contabilidad de la institución. Las iniciales que talló en las puertas y placas de cada cottage permanecen intactas hasta hoy, ofreciendo una conexión duradera con los orígenes de la propiedad.",
    p2: "Para los años 2000, el conjunto ya había permanecido más de siete décadas, llevando consigo un rico legado arquitectónico e histórico. En 2007, la propiedad fue oficialmente designada como Local Historic Landmark por el Coral Gables Historic Preservation Board.",
  },
  property: {
    eyebrow: "§ 03 · La Propiedad",
    h2a: "Cinco cottages históricos independientes",
    h2b: "en el corazón de",
    h2c: "Coral Gables.",
  },
  cottages: [
    { id: "c1", name: "Cottage 1", meta: "677 sq.ft. · 1 hab. · 1 baño",
      body: "677 sq.ft. · 1 habitación · 1 baño · kitchenette · walking closet · sala de estar · porche privado." },
    { id: "c2", name: "Cottage 2", meta: "677 sq.ft. · 1 hab. · 1 baño",
      body: "677 sq.ft. · 1 habitación · 1 baño · kitchenette · walking closet · sala de estar · porche privado." },
    { id: "c3", name: "Cottage 3", meta: "677 sq.ft. · 1 hab. · 1 baño",
      body: "677 sq.ft. · 1 habitación · 1 baño · kitchenette · walking closet · sala de estar · porche privado." },
    { id: "c4", name: "Cottage 4", meta: "677 sq.ft. · 1 hab. · 1 baño",
      body: "677 sq.ft. · 1 habitación · 1 baño · kitchenette · walking closet · sala de estar · porche privado." },
    { id: "c5", name: "Cottage 5", meta: "804 sq.ft. · 2 hab. · 2 baños",
      body: "804 sq.ft. · 2 habitaciones · 2 baños · cocina · sala de estar · closet." },
    { id: "ruina", name: "The Common Areas", meta: "Arcadas de piedra coral · Terraza rooftop",
      body: "Las áreas comunes, enmarcadas por arcadas de piedra coral y patios ajardinados, te transportan a otra época. Una terraza rooftop inspirada en el Park Güell de Barcelona ofrece un escenario único, perfecto para reuniones íntimas y eventos memorables. Una estructura adicional, aprobada para restauración, presenta posibilidades infinitas como sala de medios, estudio, espacio para eventos o incluso otro cottage privado." },
  ],
  tax: {
    eyebrow: "§ 04 · Beneficios Fiscales de Propiedades Históricas",
    h2a: "El patrimonio histórico en EE.UU.",
    h2b: "tiene su propio régimen tributario.",
    sub: "Carácter atemporal con ventajas financieras significativas.",
    body: "Poseer una propiedad histórica ofrece no solo un carácter atemporal, sino también ventajas financieras significativas.\n\nLas viviendas históricas designadas pueden calificar para incentivos sobre el property tax, incluyendo exenciones parciales sobre el valor de mejoras aprobadas. Estos programas ayudan a reducir la carga tributaria total mientras preservan la integridad original de la propiedad.\n\nEn algunos casos, los trabajos de restauración también pueden ser elegibles para beneficios fiscales adicionales, dependiendo de las directrices locales.\n\nMás allá del aspecto financiero, las propiedades históricas tienden a mantener su valor a largo plazo debido a su singularidad y disponibilidad limitada — convirtiéndose tanto en una elección de estilo de vida como en una inversión estratégica.",
    disclaimer: DISCLAIMER_ES,
  },
  invest: {
    eyebrow: "§ 05 · Oportunidad de Generación de Ingresos",
    h2a: "Cinco unidades.",
    h2b: "Múltiples flujos de ingresos.",
    body: "Esta propiedad presenta una oportunidad atractiva para quienes buscan tanto riqueza cultural como retorno de inversión.\n\nCon la posibilidad de ser alquilada por períodos de seis meses o más, ofrece un flujo de ingresos estable y confiable manteniendo flexibilidad para uso personal. Ya sea posicionada como residencia estacional o alquiler de largo plazo, la propiedad es especialmente atractiva para inquilinos que valoran el arte, la historia y el carácter arquitectónico.\n\nSu versatilidad permite a los propietarios maximizar la ocupación y generar ingresos consistentes, convirtiéndola en una opción ideal para inversionistas o compradores que buscan compensar los costos de propiedad.\n\nUna combinación rara de patrimonio y rendimiento, donde su propiedad trabaja para usted.",
    disclaimer: DISCLAIMER_ES,
  },
  kelly: {
    eyebrow: "§ 06 · Quién representa esta propiedad",
    name: "Kelly Belem.",
    sub: "Top Producer · Master Agent · Agent of the Year — Keller Williams.",
    p1: "Nacida en Brasil y radicada en los Estados Unidos, Kelly construyó su trayectoria combinando una década de experiencia en corporaciones multinacionales — con título en Administración y MBA en Marketing — con la precisión y discreción que exige el mercado inmobiliario de alto nivel. Su especialización en ventas, posicionamiento estratégico y desarrollo de producto se transfirió naturalmente al sector inmobiliario, donde hoy representa a compradores y vendedores en transacciones de alto valor en el sur de Florida.",
    p2: "Reconocida como Top Producer en South Florida, y premiada como Master Agent y Agent of the Year por Keller Williams, Kelly construyó una reputación anclada no solo en resultados, sino en el calibre del servicio que entrega. Su filosofía es simple e innegociable: cada cliente es representado con intención, cuidado y estrategia diseñada exclusivamente para sus objetivos.",
    badges: ["Keller Williams Realty", "Top Producer · S. Florida", "Master Agent", "Agent of the Year"],
  },
  reviews: {
    eyebrow: "§ 07 · Google Reviews",
    h2a: "Lo que dicen los clientes sobre",
    h2b: "Kelly Belem",
    items: [
      { name: "M & I", ctx: "Compradores · South Florida",
        quote: "Trabajar con Kelly fue productivo y agradable. Nos dio atención total en cada interacción, yendo consistentemente más allá. Competencia, dedicación, confianza y profesionalismo — una profesional completa." },
      { name: "Vendedores · 14940 Egan Lane", ctx: "Venta en mercado lento",
        quote: "En dos semanas teníamos múltiples ofertas y vendimos muy cerca del precio de lista. Kelly sabe cómo posicionar y vender una casa eficazmente, incluso en mercado lento." },
      { name: "Compradores · 8787 SW 107th St", ctx: "Adquisición con estructura personalizada",
        quote: "Kelly tuvo un papel crítico en la estructuración de los términos del acuerdo. Su capacidad de anticipar desafíos nos dio enorme tranquilidad." },
    ],
  },
  contact: {
    eyebrow: "§ 08 · Hablar con Kelly",
    title: "The Coral Rock Village",
    address: "1301 Milan Avenue · Coral Gables",
    price: "US$ 3.200.000",
    included: "Qué incluye",
    bullets: [
      "Cuatro Cottages — 677 sq.ft. cada uno, en piedra coral oolítica",
      "Cottage #5 — 804 sq.ft. + expansión aprobada de 1.000 sq.ft.",
      "Estructura Histórica — espacio multi-posibilidades, aprobado para restauración",
      "13.140 sq.ft. de lote",
      "Designación Local Historic Landmark",
    ],
    formTitle: "Complete para hablar con Kelly:",
    fields: { name: "Nombre completo", email: "E-mail", phone: "Teléfono (con código de país)" },
    submit: "Hablar con Kelly Belem",
    whatsapp: "o abra directamente en WhatsApp →",
    waMsg: "Hola, vengo de la web y me gustaría negociar The Coral Rock Village.",
  },
  footer: { rights: "© 2026 · 1301 Milan Avenue · Coral Gables, FL" },
};

const DICTS: Record<Lang, Dict> = { en: EN, pt: PT, es: ES };

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: EN,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored && stored in DICTS) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return <I18nCtx.Provider value={{ lang, setLang, t: DICTS[lang] }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
