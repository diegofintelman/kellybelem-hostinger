import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "pt" | "es";

type Dict = typeof EN;

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
    price: "US$ 3,500,000",
    h1a: "An entire block.",
    h1b: "Five cottages.",
    h1c: "First time on the market in two decades.",
    sub: "A 1929 historic estate. Five oolitic coral stone structures. One single title.",
    ctaPrimary: "Speak with Kelly Belem",
    ctaSecondary: "Discover the property →",
    rail1: "Vol. I · 2025 Edition",
    rail2: "1301 Milan Avenue",
    rail3: "Local Historic Landmark",
  },
  history: {
    eyebrow: "§ 02 · The History",
    h2a: "Built in 1929",
    h2b: "for the University",
    h2c: "of Miami.",
    sub: "Restored with an authorial vision by Gladys Margarita Diaz.",
    p1: "Warren Zinsmaster purchased Madrid House directly from George Merrick's development team in 1924. Four years later, he commissioned architect E. Dean Parmelee to expand the compound: five oolitic coral stone structures conceived to house visiting professors of the newly founded University of Miami. Zinsmaster became the institution's first controller and accounting professor.",
    p2: "The initials he carved into the doors and plaques of each cottage remain intact to this day. By the 2000s, the property had survived seven decades but was in advanced deterioration. It was then that Gladys Margarita Diaz, an award-winning architect and urban designer, took on its restoration — recovering the grotto character of the original landscape, the marble floors, exposed wood beams, and 1924 handmade tiles.",
    p3: "In 2007, Diaz launched the Coral Rock Artist-in-Residence program on the property during Art Basel. Reuters and Associated Press covered the compound. HGTV selected Cottage 4 for the program",
    p3b: "Small Space, Big Style.",
    p3c: "That same year marked the property's inclusion among the Local Historic Landmarks of the Coral Gables Historic Preservation Board.",
  },
  property: {
    eyebrow: "§ 03 · The Property",
    h2a: "Five cottages.",
    h2b: "An entire block.",
    h2c: "One single title.",
  },
  cottages: [
    { id: "c1", name: "Cottage 1", meta: "650 sq.ft. · West Garden",
      body: "Tiny house loft in coral stone, with verandas. Spacious entry patio and private garden in the back. Faces the West Garden. Original quarry tile floors." },
    { id: "c2", name: "Cottage 2", meta: "650 sq.ft. · East Garden",
      body: "Tiny house loft facing the East Garden, with a terrazzo dance floor and fountain. Small living area and rear terrace." },
    { id: "c3", name: "Cottage 3", meta: "650 sq.ft. · Ruin Access",
      body: "Marble floors, granite island, wood cabinets, Fisher Paykel dishwasher. Direct access to The Ruin in the back." },
    { id: "c4", name: "Cottage 4", meta: "650 sq.ft. · HGTV Featured",
      body: "Marble floors, stone island, wood cabinets. Selected by HGTV for the program Small Space, Big Style. Direct access to the rooftop terrace." },
    { id: "ruina", name: "The Ruin & Lounge Areas", meta: "1929 · Cultural space + lounges",
      body: "Former four-car garage from 1929, roofless since the 1970s. Today an open-air cultural space surrounded by coral stone arcades, garden courtyards, and a mosaic-tiled rooftop lounge. Approved for restoration as a media room and event hall." },
  ],
  tax: {
    eyebrow: "§ 04 · Tax Benefits",
    h2a: "U.S. historic property",
    h2b: "has its own tax regime.",
    sub: "This property qualifies for all of them.",
    items: [
      ["1031 Exchange", "Defer capital gains tax by exchanging another investment property for a Coral Rock Village unit — preserving 100% of capital for immediate reinvestment."],
      ["100% Bonus Depreciation", "Full first-year deduction for eligible improvements and installations — including artistic amenities and community build-outs."],
      ["20% Pass-Through Deduction", "Permanent 20% deduction on net rental income via LLC, S-Corp, or syndicate structure."],
      ["Section 179 Expensing", "Immediate expensing of furniture, equipment, and energy-efficiency improvements."],
      ["Historic Tax Freeze", "Property tax freeze for ten years due to the historic designation — application in process."],
    ],
    disclaimer: "Tax information is estimated based on current legislation and should be confirmed with a qualified professional. Each case depends on the acquisition structure.",
  },
  invest: {
    eyebrow: "§ 05 · Investment",
    h2a: "Five units.",
    h2b: "Multiple revenue streams.",
    sub: "Projected operating surplus: US$ 110,843 / year.",
    p: "The configuration of five structures under a single title allows multiple simultaneous revenue streams — all in long-term lease, as per Coral Gables regulations.",
    rows: [
      ["Potential annual revenue", "US$ 153,000"],
      ["Operating expenses", "US$ 42,157"],
      ["Projected surplus / year", "US$ 110,843"],
      ["HOA per unit / month", "US$ 628"],
      ["Property tax per unit / year", "US$ 3,000"],
    ] as [string, string][],
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
      { name: "Marisa & Ivando Junqueira", ctx: "Buyers · South Florida",
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
    price: "US$ 3,500,000",
    included: "What's included",
    bullets: [
      "Madrid House — 1,227 sq.ft. + approved 1,046 sq.ft. expansion",
      "Four Cottages — 650 sq.ft. each, in oolitic coral stone",
      "Bungalow — 919 sq.ft. + approved 751 sq.ft. expansion",
      "The Ruin — cultural space, approved for restoration",
      "23,640 sq.ft. lot (full city block)",
      "Local Historic Landmark designation · Tax freeze in process",
    ],
    formTitle: "Fill out to speak with Kelly:",
    fields: { name: "Full name", email: "E-mail", phone: "Phone (with country code)" },
    submit: "Speak with Kelly Belem",
    whatsapp: "or open directly on WhatsApp →",
    waMsg: "Olá, vim do site e gostaria de negociar The Coral Rock Village.",
  },
  footer: { rights: "© 2025 · 1301 Milan Avenue · Coral Gables, FL" },
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
    price: "US$ 3.500.000",
    h1a: "Uma quadra inteira.",
    h1b: "Cinco cottages.",
    h1c: "Primeira vez no mercado em duas décadas.",
    sub: "Uma propriedade histórica de 1929. Cinco estruturas em pedra coral oolítica. Um único título.",
    ctaPrimary: "Falar com Kelly Belem",
    ctaSecondary: "Conhecer a propriedade →",
    rail1: "Vol. I · Edição 2025",
    rail2: "1301 Milan Avenue",
    rail3: "Local Historic Landmark",
  },
  history: {
    eyebrow: "§ 02 · A História",
    h2a: "Construída em 1929",
    h2b: "para a Universidade",
    h2c: "de Miami.",
    sub: "Restaurada com olhar autoral por Gladys Margarita Diaz.",
    p1: "Warren Zinsmaster comprou a Madrid House diretamente da equipe de desenvolvimento de George Merrick em 1924. Quatro anos depois, encomendou ao arquiteto E. Dean Parmelee a expansão do conjunto: cinco estruturas em pedra coral oolítica concebidas para hospedar os professores visitantes da Universidade de Miami, recém-fundada. Zinsmaster tornou-se o primeiro controller e professor de contabilidade da instituição.",
    p2: "As iniciais que ele entalhou nas portas e nas placas de cada cottage permanecem intactas até hoje. Nos anos 2000, a propriedade havia sobrevivido a sete décadas mas estava em estado avançado de deterioração. Foi então que Gladys Margarita Diaz, arquiteta e designer urbana premiada, assumiu a restauração — recuperando o caráter de gruta da paisagem original, os pisos de mármore, as vigas de madeira expostas e os azulejos manuais de 1924.",
    p3: "Em 2007, Diaz lançou na propriedade o programa Coral Rock Artist-in-Residence durante a Art Basel. Reuters e Associated Press cobriram o conjunto. HGTV selecionou o Cottage 4 para o programa",
    p3b: "Small Space, Big Style.",
    p3c: "Esse mesmo ano marcou também a inclusão da propriedade entre os Local Historic Landmarks do Coral Gables Historic Preservation Board.",
  },
  property: {
    eyebrow: "§ 03 · A Propriedade",
    h2a: "Cinco cottages.",
    h2b: "Um quarteirão inteiro.",
    h2c: "Um único título.",
  },
  cottages: [
    { id: "c1", name: "Cottage 1", meta: "650 sq.ft. · West Garden",
      body: "Tiny house loft em pedra coral, com varandas. Pátio de entrada amplo e jardim privativo nos fundos. Voltado para o West Garden. Pisos originais em quarry tile." },
    { id: "c2", name: "Cottage 2", meta: "650 sq.ft. · East Garden",
      body: "Tiny house loft voltado para o East Garden, com pista de dança em terrazzo e fonte. Pequena área de estar e terraço nos fundos." },
    { id: "c3", name: "Cottage 3", meta: "650 sq.ft. · Acesso à Ruína",
      body: "Pisos de mármore, ilha em granito, gabinetes de madeira, lava-louças Fisher Paykel. Acesso direto à Ruína nos fundos." },
    { id: "c4", name: "Cottage 4", meta: "650 sq.ft. · HGTV Featured",
      body: "Pisos de mármore, ilha em pedra, gabinetes de madeira. Selecionado pelo HGTV para Small Space, Big Style. Acesso direto ao terraço do rooftop." },
    { id: "ruina", name: "A Ruína e Áreas de Lounge", meta: "1929 · Espaço cultural + lounges",
      body: "Antiga garagem de quatro carros, sem telhado desde os anos 1970. Hoje é um espaço cultural a céu aberto cercado por arcadas de pedra coral, pátios ajardinados e um lounge no rooftop revestido em mosaico. Aprovada para restauração como media room e sala de eventos." },
  ],
  tax: {
    eyebrow: "§ 04 · Benefícios Fiscais",
    h2a: "Patrimônio histórico nos EUA",
    h2b: "tem regime tributário próprio.",
    sub: "Esta propriedade qualifica para todos eles.",
    items: [
      ["1031 Exchange", "Diferimento de imposto sobre ganho de capital ao trocar outra propriedade de investimento por uma unidade do Coral Rock Village — preservando 100% do capital para reinvestimento imediato."],
      ["100% Bonus Depreciation", "Dedução integral, no primeiro ano, de melhorias e instalações elegíveis — incluindo amenidades artísticas e build-outs comunitários."],
      ["20% Pass-Through Deduction", "Dedução permanente de 20% sobre a renda líquida de aluguel via LLC, S-Corp ou estrutura de sindicato."],
      ["Section 179 Expensing", "Despesa imediata de mobiliário, equipamentos e melhorias de eficiência energética."],
      ["Historic Tax Freeze", "Congelamento do Property tax por dez anos em razão da designação histórica — em processo de aplicação."],
    ],
    disclaimer: "As informações fiscais são estimativas baseadas em legislação vigente e devem ser confirmadas com profissional qualificado. Cada caso depende da estrutura de aquisição.",
  },
  invest: {
    eyebrow: "§ 05 · Investimento",
    h2a: "Cinco unidades.",
    h2b: "Múltiplos fluxos de receita.",
    sub: "Superávit operacional projetado: US$ 110.843 / ano.",
    p: "A configuração de cinco estruturas em um único título permite múltiplos fluxos de receita simultâneos — todos em locação de longa duração, conforme a legislação de Coral Gables.",
    rows: [
      ["Receita anual potencial", "US$ 153.000"],
      ["Despesas operacionais", "US$ 42.157"],
      ["Superávit projetado / ano", "US$ 110.843"],
      ["HOA por unidade / mês", "US$ 628"],
      ["Property tax por unidade / ano", "US$ 3.000"],
    ],
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
      { name: "Marisa & Ivando Junqueira", ctx: "Compradores · South Florida",
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
    price: "US$ 3.500.000",
    included: "O que inclui",
    bullets: [
      "Madrid House — 1.227 sq.ft. + expansão aprovada de 1.046 sq.ft.",
      "Quatro Cottages — 650 sq.ft. cada, em pedra coral oolítica",
      "Bungalow — 919 sq.ft. + expansão aprovada de 751 sq.ft.",
      "A Ruína — espaço cultural com aprovação para restauração",
      "23.640 sq.ft. de terreno (quarteirão completo)",
      "Designação Local Historic Landmark · Tax freeze em processo",
    ],
    formTitle: "Preencha para conversar com a Kelly:",
    fields: { name: "Nome completo", email: "E-mail", phone: "Telefone (com código do país)" },
    submit: "Falar com Kelly Belem",
    whatsapp: "ou abra direto no WhatsApp →",
    waMsg: "Olá, vim do site e gostaria de negociar The Coral Rock Village.",
  },
  footer: { rights: "© 2025 · 1301 Milan Avenue · Coral Gables, FL" },
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
    price: "US$ 3.500.000",
    h1a: "Una manzana entera.",
    h1b: "Cinco cottages.",
    h1c: "Por primera vez en el mercado en dos décadas.",
    sub: "Una propiedad histórica de 1929. Cinco estructuras en piedra coral oolítica. Un único título.",
    ctaPrimary: "Hablar con Kelly Belem",
    ctaSecondary: "Conocer la propiedad →",
    rail1: "Vol. I · Edición 2025",
    rail2: "1301 Milan Avenue",
    rail3: "Local Historic Landmark",
  },
  history: {
    eyebrow: "§ 02 · La Historia",
    h2a: "Construida en 1929",
    h2b: "para la Universidad",
    h2c: "de Miami.",
    sub: "Restaurada con mirada autoral por Gladys Margarita Diaz.",
    p1: "Warren Zinsmaster compró la Madrid House directamente al equipo de desarrollo de George Merrick en 1924. Cuatro años después, encargó al arquitecto E. Dean Parmelee la expansión del conjunto: cinco estructuras en piedra coral oolítica concebidas para alojar a los profesores visitantes de la recién fundada Universidad de Miami. Zinsmaster se convirtió en el primer controller y profesor de contabilidad de la institución.",
    p2: "Las iniciales que talló en las puertas y placas de cada cottage permanecen intactas hasta hoy. En los años 2000, la propiedad había sobrevivido siete décadas pero estaba en avanzado deterioro. Fue entonces cuando Gladys Margarita Diaz, arquitecta y diseñadora urbana premiada, asumió la restauración — recuperando el carácter de gruta del paisaje original, los pisos de mármol, las vigas de madera expuestas y los azulejos hechos a mano de 1924.",
    p3: "En 2007, Diaz lanzó en la propiedad el programa Coral Rock Artist-in-Residence durante Art Basel. Reuters y Associated Press cubrieron el conjunto. HGTV seleccionó el Cottage 4 para el programa",
    p3b: "Small Space, Big Style.",
    p3c: "Ese mismo año marcó la inclusión de la propiedad entre los Local Historic Landmarks del Coral Gables Historic Preservation Board.",
  },
  property: {
    eyebrow: "§ 03 · La Propiedad",
    h2a: "Cinco cottages.",
    h2b: "Una manzana entera.",
    h2c: "Un único título.",
  },
  cottages: [
    { id: "c1", name: "Cottage 1", meta: "650 sq.ft. · West Garden",
      body: "Tiny house loft en piedra coral, con verandas. Patio de entrada amplio y jardín privado en la parte trasera. Frente al West Garden. Pisos originales en quarry tile." },
    { id: "c2", name: "Cottage 2", meta: "650 sq.ft. · East Garden",
      body: "Tiny house loft frente al East Garden, con pista de baile en terrazzo y fuente. Pequeña área de estar y terraza trasera." },
    { id: "c3", name: "Cottage 3", meta: "650 sq.ft. · Acceso a la Ruina",
      body: "Pisos de mármol, isla de granito, gabinetes de madera, lavavajillas Fisher Paykel. Acceso directo a la Ruina al fondo." },
    { id: "c4", name: "Cottage 4", meta: "650 sq.ft. · HGTV Featured",
      body: "Pisos de mármol, isla de piedra, gabinetes de madera. Seleccionado por HGTV para Small Space, Big Style. Acceso directo a la terraza del rooftop." },
    { id: "ruina", name: "La Ruina y Áreas Lounge", meta: "1929 · Espacio cultural + lounges",
      body: "Antiguo garaje de cuatro autos, sin techo desde los años 1970. Hoy es un espacio cultural al aire libre rodeado por arcadas de piedra coral, patios ajardinados y un lounge en la azotea revestido en mosaico. Aprobado para restauración como media room y sala de eventos." },
  ],
  tax: {
    eyebrow: "§ 04 · Beneficios Fiscales",
    h2a: "El patrimonio histórico en EE.UU.",
    h2b: "tiene su propio régimen tributario.",
    sub: "Esta propiedad califica para todos.",
    items: [
      ["1031 Exchange", "Diferimiento del impuesto sobre ganancias de capital al intercambiar otra propiedad de inversión por una unidad del Coral Rock Village — preservando el 100% del capital para reinversión inmediata."],
      ["100% Bonus Depreciation", "Deducción íntegra, en el primer año, de mejoras e instalaciones elegibles — incluyendo amenidades artísticas y build-outs comunitarios."],
      ["20% Pass-Through Deduction", "Deducción permanente del 20% sobre la renta neta de alquiler vía LLC, S-Corp o estructura de sindicato."],
      ["Section 179 Expensing", "Gasto inmediato de mobiliario, equipos y mejoras de eficiencia energética."],
      ["Historic Tax Freeze", "Congelamiento del Property tax por diez años por la designación histórica — en proceso de aplicación."],
    ],
    disclaimer: "La información fiscal es estimada según la legislación vigente y debe confirmarse con un profesional calificado. Cada caso depende de la estructura de adquisición.",
  },
  invest: {
    eyebrow: "§ 05 · Inversión",
    h2a: "Cinco unidades.",
    h2b: "Múltiples flujos de ingresos.",
    sub: "Superávit operativo proyectado: US$ 110.843 / año.",
    p: "La configuración de cinco estructuras bajo un único título permite múltiples flujos de ingresos simultáneos — todos en arrendamiento de larga duración, según la legislación de Coral Gables.",
    rows: [
      ["Ingreso anual potencial", "US$ 153.000"],
      ["Gastos operativos", "US$ 42.157"],
      ["Superávit proyectado / año", "US$ 110.843"],
      ["HOA por unidad / mes", "US$ 628"],
      ["Property tax por unidad / año", "US$ 3.000"],
    ],
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
      { name: "Marisa & Ivando Junqueira", ctx: "Compradores · South Florida",
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
    price: "US$ 3.500.000",
    included: "Qué incluye",
    bullets: [
      "Madrid House — 1.227 sq.ft. + expansión aprobada de 1.046 sq.ft.",
      "Cuatro Cottages — 650 sq.ft. cada uno, en piedra coral oolítica",
      "Bungalow — 919 sq.ft. + expansión aprobada de 751 sq.ft.",
      "La Ruina — espacio cultural, aprobado para restauración",
      "23.640 sq.ft. de lote (manzana completa)",
      "Designación Local Historic Landmark · Tax freeze en proceso",
    ],
    formTitle: "Complete para hablar con Kelly:",
    fields: { name: "Nombre completo", email: "E-mail", phone: "Teléfono (con código de país)" },
    submit: "Hablar con Kelly Belem",
    whatsapp: "o abra directamente en WhatsApp →",
    waMsg: "Olá, vim do site e gostaria de negociar The Coral Rock Village.",
  },
  footer: { rights: "© 2025 · 1301 Milan Avenue · Coral Gables, FL" },
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
