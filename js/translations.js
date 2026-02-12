// 1. O Dicionário de Traduções
const translations = {
    'pt': {
        // --- MENU ---
        'menu_home': 'Home',
        'menu_projects': 'Projetos',
        'menu_about': 'Sobre mim',
        'menu_contact': 'Contato',
        
        // --- HERO ---
        'hero_title': 'CRIANDO EXPERIÊNCIAS  CONECTANDO  PESSOAS',
        'hero_subtitle': 'PRODUCT DESIGN • WEB DESIGN • DEVELOPMENT',
        'btn_talk': 'Fale comigo',
        'btn_projects': 'Ver projetos',

        // --- PROJETOS ---
        'section_highlight_title': 'TRABALHOS EM DESTAQUE',
        'section_highlight_desc': 'Abaixo meus projetos em destaque. Para visualizar todos os meus projetos, clique abaixo em Todos os projetos.',
        'btn_all_projects': 'Todos os projetos',

        // --- SERVIÇOS GERAL ---
        'serv_help_title': 'Em que posso ajudar',
        'serv_main_title': 'SERVIÇOS',
        'serv_desc': 'Soluções digitais para produtos que precisam sair do papel, evoluir e escalar — sem depender de times grandes.',
        'word_includes': 'Inclui:',

        // --- SERVIÇO 1 (UX) ---
        'serv_1_title': 'UX & Product Design',
        'serv_1_desc': 'Atuo em todo o ciclo do produto, desde a descoberta do problema até a validação da solução, garantindo decisões orientadas ao usuário e aos objetivos do negócio.',
        
        // --- SERVIÇO 2 (UI) ---
        'serv_2_title': 'UI & Visual Design',
        'serv_2_desc': 'Crio interfaces funcionais, acessíveis e visualmente consistentes, focadas em usabilidade, clareza e escalabilidade. Trabalho com design systems para garantir eficiência.',

        // --- SERVIÇO 3 (FRONT) ---
        'serv_3_title': 'Front-end & No-Code Development',
        'serv_3_desc': 'Implemento interfaces com fidelidade ao design, unindo código e no-code para entregar soluções funcionais, performáticas e prontas para uso real.',

        // --- SERVIÇO 4 (WEBSITES) ---
        'serv_4_title': 'Websites & MVPs',
        'serv_4_desc': 'Desenvolvo websites e MVPs rápidos para validar ideias, comunicar propostas de valor e acelerar lançamentos.',

        // --- FAQ ---
        'faq_title': 'FAQ',
        'faq_1_question': 'Quem é Brenda Tavares?',
        'faq_1_answer': 'Sou brasileira, estudo e trabalho com UX, desenvolvimento e product design há mais de 3 anos. Meu objetivo é somar com projetos e sonhos de pessoas do mundo todo.',
        
        'faq_2_question': 'Com o que de fato eu trabalho? E com que eu não trabalho?',
        'faq_2_answer': 'Trabalho com Product Design (End-to-end), UI/UX, Design Systems e Front-end. Não trabalho com marketing digital ou gestão de tráfego.',

        'faq_3_question': 'Como posso contatá-la?',
        'faq_3_answer': 'Você pode entrar em contato através do botão "Contato" no menu, ou pelas minhas redes sociais (LinkedIn e Behance). Costumo responder em até 24h úteis.',

        // --- FOOTER ---
        'footer_explore': 'Explorar',
        'footer_contact': 'Contato',
        'footer_connect': 'Conectar',
        'footer_copy_email': 'Copiar e-mail',
        'footer_rights': '© Brenda Tavares - Todos os direitos reservados',

        // --- PÁGINA DE CONTATO ---
        'contact_headline': 'Estou ansiosa para construir um mundo digital coeso...',
        'contact_subheadline': 'Deixe seus dados abaixo e veja sua visão ganhar forma.',
        'contact_email_intro': 'Se preferir enviar um e-mail:',
        
        // Formulário Labels (Títulos)
        'form_label_name': 'Seu nome',
        'form_label_email': 'Seu email',
        'form_label_prop': 'Sua proposta',
        'form_label_services': 'Serviços de interesse',
        
        // Formulário Placeholders (Texto dentro da caixa)
        'form_ph_name': 'Nome completo',
        'form_ph_email': 'Seu endereço de email',
        'form_ph_message': 'Quais são os objetivos, requisitos...',
        
        // Botão
        'btn_send': 'Enviar',


        // --- PÁGINA SOBRE MIM (ABOUT) ---
        'about_call_me': 'ME CHAME DE',
        
        // Bio (Com HTML tags para negrito)
        'about_bio_p1': 'Olá, eu sou a Brenda. Sou uma Product Designer e Desenvolvedora Front-end que atua na intersecção entre a necessidade do usuário, a estratégia de negócio e a viabilidade técnica. Com formação em Análise e Desenvolvimento de Sistemas, minha abordagem vai além do visual: eu projeto experiências que são, ao mesmo tempo, esteticamente sofisticadas e tecnicamente escaláveis.',
        'about_bio_p2': 'Participei de projetos de alto impacto, incluindo sistemas premiados de transparência governamental e soluções financeiras que reduziram em 40% o tempo de operação manual de equipes. Tenho vasta experiência no ciclo completo do produto (End-to-End), utilizando metodologias ágeis e tecnologias como FlutterFlow e React para traduzir problemas complexos em produtos funcionais.',
        'about_bio_p3': 'Vinda de uma família que une criatividade e gestão, acredito que o design de sucesso é aquele que simplifica a vida das pessoas enquanto posiciona marcas como líderes em seus mercados.',

        // Valores
        'values_title': 'Compromisso destemido é o  fundamento do meu trabalho.',
        
        'value_1_title': 'Empatia em primeiro lugar',
        'value_1_desc': 'Design é a ponte entre necessidades humanas e objetivos de negócio. Meu processo começa ouvindo, não apenas o usuário, mas a essência da empresa. Acredito que a verdadeira empatia nasce de entender o "porquê" antes do "como".',
        
        'value_2_title': 'Nossas identidades são diversas, mas nossa visão é compartilhada',
        'value_2_desc': 'Inovação não acontece em silos. Minha formação técnica me permite falar a mesma língua dos desenvolvedores e stakeholders. Trabalho para que o design não seja apenas um protótipo, mas um roteiro claro e viável.',
        
        'value_3_title': 'Debriefing. Aprimoramento. Escala. Expansão',
        'value_3_desc': 'Um produto nunca está pronto; ele evolui. Utilizo métricas e feedbacks reais para iterar e refinar soluções. Meu foco é criar sistemas de design (Design Systems) que permitam que o produto cresça sem perder a consistência.',
        
        'value_4_title': 'Não nos limitamos a projetar. Abrimos caminhos',
        'value_4_desc': 'Aproveito minha base em análise de sistemas para encarar desafios complexos como oportunidades de simplificação. Onde outros veem barreiras técnicas, eu vejo caminhos para criar soluções lógicas e intuitivas.',


        // --- PROJETO: RECICLO ---
        'reciclo_hero_title': 'Sobre o  Projeto',
        'reciclo_intro': 'O Re-cicloé uma plataforma inovadora de economia circular desenvolvida pela Prefeitura de Fortaleza. O projeto atua na logística de coleta seletiva porta-a-porta, utilizando micromobilidade sustentável (triciclos elétricos) para conectar cidadãos e empresas às associações de catadores. Atuei como UX/UI Designer, fazendo parte do time que foi responsável por traduzir um modelo de serviço público complexo em uma interface simplificada, focada em promover a inclusão socioeconômica dos catadores e elevar o índice de reciclagem da capital cearense.',
        
        // Detalhes Laterais
        'project_label_client': 'Cliente',
        'project_label_services': 'Serviços',
        'project_label_role': 'Meu papel',
        'reciclo_services_list': 'Product DiscoveryInterface Design (UI)UX ResearchPrototipagem Interativa',
        
        // Narrativa (Desafio, Entregáveis, etc)
        'reciclo_challenge_title': 'O desafio',
        'reciclo_challenge_text': 'O maior desafio técnico foi a heterogeneidade dos usuários. Precisamos projetar um ecossistema que atendesse simultaneamente a três realidades: o Catador (que opera em campo e exige baixíssima carga cognitiva), o Cidadão (CPF) (que busca conveniência extrema) e a Empresa (CNPJ) (que necessita de previsibilidade e comprovação de impacto). Nossa missão foi unificar essas necessidades em um fluxo contínuo, onde o agendamento fosse realizado em segundos e a gestão logística fosse transparente e eficaz.',
        
        'reciclo_deliverables_title': 'Principais entregáveis',
        'reciclo_deliverables_text': 'Foi entregue um projeto de experiência end-to-end, composto por: User Flows específicos para cada tipo de perfil, Protótipos de alta fidelidade validados para uso em dispositivos móveis, e uma estrutura de Arquitetura de Informação que organiza o agendamento, o rastreio da coleta e a destinação correta dos resíduos. O foco foi garantir que o sistema não tivesse barreiras de entrada, estimulando a adoção da cultura de reciclagem em toda a cidade.',
        
        'reciclo_uxui_title': 'Design de sites (UX/UI)',
        'reciclo_uxui_text': 'Foi utilizada uma linguagem visual clara, tátil e amigável. A interface foi desenhada com componentes de alta acessibilidade, como botões grandes e ícones autoexplicativos, fundamentais para o uso do catador durante a rota. A paleta de cores e a iconografia foram pensadas para comunicar sustentabilidade e modernidade, transformando a interface e fluxos de usuários finais em jornadas legítimas de confiança e organização.',
        
        'reciclo_dev_title': 'Desenvolvimento',
        'reciclo_dev_text': 'Trabalhei em colaboração próxima com a equipe de engenharia para garantir a viabilidade técnica do design. Estruturei os arquivos para um handoff sem atritos, fornecendo um Design System documentado que facilitou a implementação do front-end e a integração com o painel administrativo em Django.',

        // Impacto & Métricas
        'reciclo_impact_title': 'IMPACTO & APRENDIZADOS',
        
        'reciclo_metric_1_title': 'Dignidade e Renda',
        'reciclo_metric_1_desc': 'Inclusão da Base da Pirâmide. Ao formalizar e facilitar a coleta via triciclos elétricos, o projeto removeu o estigma social e o esforço físico exaustivo, garantindo uma fonte de renda estável e o reconhecimento desses profissionais como agentes ambientais essenciais para Fortaleza.',
        
        'reciclo_metric_2_title': 'Gamificação como Mudança de Hábito',
        'reciclo_metric_2_desc': 'Aprendi que a tecnologia sozinha não recicla nada; o design precisa motivar. Usar elementos de gamificação (como o conceito "Reciclou, Ganhou") foi fundamental para transformar uma tarefa chata em um hábito prazeroso e recompensador para o cidadão.',
        
        'reciclo_metric_3_title': 'Eficiência e Incentivos',
        'reciclo_metric_3_desc': 'Viabilidade da Economia Circular. Estrategicamente alinhado à Lei de Incentivo à Reciclagem (14.260/21), o projeto contribuiu para um ecossistema capaz de captar investimentos massivos (com projeções de R$ 140M), provando que o design sustentável é altamente rentável.',
        
        'reciclo_metric_4_title': 'Design para Contextos Extremos',
        'reciclo_metric_4_desc': 'Projetar para o catador me ensinou sobre usabilidade em condições adversas. A interface precisa ser legível e tátil o suficiente para ser usada rapidamente durante as rotas. Simplicidade aqui não é estética, é ferramenta de trabalho.',
        
        'reciclo_metric_5_title': 'Conformidade e Escala',
        'reciclo_metric_5_desc': 'Redução de Resíduos em Aterros. Através de uma interface focada em agendamento rápido, potencializamos a aplicação da Política Nacional de Resíduos Sólidos (PNRS). A facilidade de separação e coleta porta-a-porta aumentou o índice de reciclagem municipal, preservando recursos naturais e transformando o que seria "lixo" em novos insumos industriais de forma escalável.',
        
        'reciclo_metric_6_title': 'Intermediação Público-Privada',
        'reciclo_metric_6_desc': 'Este projeto me ensinou a projetar fluxos que atendem simultaneamente às exigências burocráticas do governo (Pessoa Jurídica/Lei) e à necessidade de conveniência do usuário comum (Pessoa Física), unificando interesses distintos em uma única jornada fluida.',

        // Seções Extras
        'reciclo_user_title': 'O usuário',
        'reciclo_user_text': 'O sucesso do Re-ciclo depende da harmonia entre três atores fundamentais. Para projetar uma solução que realmente transformasse a gestão de resíduos em Fortaleza, mergulhamos no dia a dia do Afonso (a força operacional que busca dignidade), do Marcelo (o cidadão que busca conveniência) e da Júlia (o negócio que busca eficiência logística). O desafio do design foi criar uma interface que eliminasse a fricção entre esses perfis, garantindo que a tecnologia atuasse como o elo invisível que transforma descarte em valor social e ambiental.',
        
        'reciclo_structure_title': 'Estrutura do  projeto',
        'reciclo_structure_text': 'O sitemap do Re-ciclo foi projetado para simplificar a jornada do descarte sustentável. Estruturamos a navegação em módulos que primeiro educam o usuário ("Conheça") para depois facilitar a ação direta ("Participe"). A segmentação entre Pessoa Física e Jurídica no fluxo de acesso é fundamental para garantir que as funcionalidades operacionais sejam personalizadas para cada perfil, otimizando a logística de coleta e a experiência de gestão de resíduos.',
        
        'reciclo_ui_title': 'Design de interface  do usuário',
        'reciclo_ui_text': 'O veredito visual do Re-ciclo é a modernização da sustentabilidade. Através de uma tipografia amigável e uma paleta cromática diversificada, criamos uma interface que comunica energia e responsabilidade social. O foco esteve na criação de uma linguagem visual proprietária, onde a iconografia detalhada e os componentes arredondados convidam o usuário à ação, fortalecendo a cultura da economia circular através de um design centrado no ser humano e na eficiência operacional.',
        
        'reciclo_wireframe_title': 'Wireframe de alta  fidelidade',
        'reciclo_wireframe_text': 'A etapa de alta fidelidade para desktop foi projetada para ser o centro de controle da reciclagem em Fortaleza. O foco principal foi a consolidação de dados e transparência: criamos dashboards que exibem métricas reais de impacto social e ambiental (tonelagens coletadas e renda gerada).',
        
        'reciclo_mobile_title': 'Wireframe de alta  fidelidade: mobile',
        'reciclo_mobile_text': 'O design mobile do Re-ciclo foi concebido sob a premissa da baixa fricção e usabilidade tátil. Para o cidadão comum, o fluxo de agendamento foi otimizado para ser concluído em poucos toques, eliminando barreiras cognitivas.'
    },

    'en': {
        // ... (Mantenha tudo o que já existe do Index) ...

        // --- CONTACT PAGE ---
        'contact_headline': 'I look forward to building a cohesive digital world...',
        'contact_subheadline': 'Leave your details below and see your vision take shape.',
        'contact_email_intro': 'If you prefer to send an email:',
        
        // Form Labels
        'form_label_name': 'Your name',
        'form_label_email': 'Your email',
        'form_label_prop': 'Your proposal',
        'form_label_services': 'Services of interest',
        
        // Form Placeholders
        'form_ph_name': 'Full name',
        'form_ph_email': 'Your email address',
        'form_ph_message': 'What are the goals, requirements...',
        
        // Button
        'btn_send': 'Send',

        // --- PÁGINA TODOS OS PROJETOS ---
        'work_header_title': 'Meus trabalhos',
        
        // Tags dos Projetos (Etiquetas pequenas)
        'tag_ux_web': 'UX/UI • WEBSITE',
        'tag_branding_pd_dev': 'BRANDING • PRODUCT DESIGN • DEVELOPMENT',
        'tag_ux_web_gov': 'UX/UI • WEBSITE • GOVTECH',
        'tag_branding_pd_gov_dev': 'BRANDING • PRODUCT DESIGN • GOVTECH • DEVELOPMENT',
        'tag_pd_web_gov': 'PRODUCT DESIGN • WEBSITE • GOVTECH',
        'tag_web_ux_gov': 'WEBSITE • UX/UI DESIGN • GOVTECH',

        // CTA Final (Parte inferior)
        // Note o uso de HTML dentro da tradução para manter a cor escura no span
        'cta_help_title': 'PRECISA DE AJUDA  COM UM PROJETO DE DESIGN?',
        'cta_contact_btn': 'Entre em contato'
        
    },

    'en': {
        // --- MENU ---
        'menu_home': 'Home',
        'menu_projects': 'Projects',
        'menu_about': 'About me',
        'menu_contact': 'Contact',

        // --- HERO ---
        'hero_title': 'CREATING EXPERIENCES  CONNECTING  PEOPLE',
        'hero_subtitle': 'PRODUCT DESIGN • WEB DESIGN • DEVELOPMENT',
        'btn_talk': 'Let\'s talk',
        'btn_projects': 'View projects',

        // --- PROJETOS ---
        'section_highlight_title': 'FEATURED  WORK',
        'section_highlight_desc': 'Below are my featured projects. To view all my projects, click on All projects below.',
        'btn_all_projects': 'All projects',

        // --- SERVIÇOS GERAL ---
        'serv_help_title': 'How can I help',
        'serv_main_title': 'SERVICES',
        'serv_desc': 'Digital solutions for products that need to get off the paper, evolve, and scale — without relying on large teams.',
        'word_includes': 'Includes:',

        // --- SERVIÇO 1 (UX) ---
        'serv_1_title': 'UX & Product Design',
        'serv_1_desc': 'I work on the entire product cycle, from problem discovery to solution validation, ensuring decisions driven by the user and business goals.',
        'serv_1_item_1': 'UX Research & discovery',
        'serv_1_item_2': 'Journey mapping (onboarding, activation, retention)',
        'serv_1_item_3': 'Information architecture',
        'serv_1_item_4': 'User flows',
        'serv_1_item_5': 'Wireframes & prototypes (low → high fidelity)',
        'serv_1_item_6': 'Usability testing & validation',

        // --- SERVIÇO 2 (UI) ---
        'serv_2_title': 'UI & Visual Design',
        'serv_2_desc': 'I create functional, accessible, and visually consistent interfaces focused on usability, clarity, and scalability. I work with design systems to ensure efficiency.',
        'serv_2_item_1': 'UI Design for digital products',
        'serv_2_item_2': 'Design system (creation or evolution)',
        'serv_2_item_3': 'Visual componentization',
        'serv_2_item_4': 'Responsive design',
        'serv_2_item_5': 'Accessibility applied to the product',

        // --- SERVIÇO 3 (FRONT) ---
        'serv_3_title': 'Front-end & No-Code Development',
        'serv_3_desc': 'I implement interfaces with design fidelity, combining code and no-code to deliver functional, performant solutions ready for real use.',
        'serv_3_item_1': 'HTML, CSS, JavaScript, SCSS & Bootstrap',
        'serv_3_item_2': 'Implementation of responsive interfaces',
        'serv_3_item_3': 'FlutterFlow (apps & web apps)',
        'serv_3_item_4': 'API Integrations (GET / POST)',
        'serv_3_item_5': 'Fine-tuning between design & development',

        // --- SERVIÇO 4 (WEBSITES) ---
        'serv_4_title': 'Websites & MVPs',
        'serv_4_desc': 'I develop fast websites and MVPs to validate ideas, communicate value propositions, and accelerate launches.',
        'serv_4_item_1': 'Websites in Webflow',
        'serv_4_item_2': 'Prototyping & functional MVPs',
        'serv_4_item_3': 'Landing pages for validation',
        'serv_4_item_4': 'Content structuring & UX',
        'serv_4_item_5': 'Essential technical SEO & performance',

        // --- FAQ ---
        'faq_title': 'FAQ',
        'faq_1_question': 'Who is Brenda Tavares?',
        'faq_1_answer': 'I\'m Brazilian, studying and working with UX, development, and product design for over 3 years. My goal is to add value to projects and dreams of people worldwide.',

        'faq_2_question': 'What do I actually work with? And what don\'t I?',
        'faq_2_answer': 'I work with Product Design (End-to-end), UI/UX, Design Systems, and Front-end. I do not work with digital marketing or traffic management.',

        'faq_3_question': 'How can I contact you?',
        'faq_3_answer': 'You can contact me via the "Contact" button in the menu or through my social media (LinkedIn and Behance). I usually reply within 24 business hours.',

        // --- FOOTER ---
        'footer_explore': 'Explore',
        'footer_contact': 'Contact',
        'footer_connect': 'Connect',
        'footer_copy_email': 'Copy email',
        'footer_rights': '© Brenda Tavares - All rights reserved',

        // --- CONTACT PAGE ---
        'contact_headline': 'I look forward to building a cohesive digital world...',
        'contact_subheadline': 'Leave your details below and see your vision take shape.',
        'contact_email_intro': 'If you prefer to send an email:',
        
        // Form Labels
        'form_label_name': 'Your name',
        'form_label_email': 'Your email',
        'form_label_prop': 'Your proposal',
        'form_label_services': 'Services of interest',
        
        // Form Placeholders
        'form_ph_name': 'Full name',
        'form_ph_email': 'Your email address',
        'form_ph_message': 'What are the goals, requirements...',
        
        // Button
        'btn_send': 'Send',


        // --- ABOUT ME PAGE ---
        'about_call_me': 'CALL ME',

        'about_bio_p1': 'Hi, I\'m Brenda. I am a Product Designer and Front-end Developer working at the intersection of user needs, business strategy, and technical feasibility. With a degree in Systems Analysis and Development, my approach goes beyond visuals: I design experiences that are both aesthetically sophisticated and technically scalable.',
        'about_bio_p2': 'I have participated in high-impact projects, including award-winning government transparency systems and financial solutions that reduced team manual operation time by 40%. I have extensive experience in the full product cycle (End-to-End), using agile methodologies and technologies like FlutterFlow and React to translate complex problems into functional products.',
        'about_bio_p3': 'Coming from a family that unites creativity and management, I believe that successful design is one that simplifies people\'s lives while positioning brands as leaders in their markets.',

        'values_title': 'Fearless commitment is the  foundation of my work.',
        
        'value_1_title': 'Empathy first',
        'value_1_desc': 'Design is the bridge between human needs and business goals. My process starts by listening, not just to the user, but to the essence of the company. I believe true empathy comes from understanding the "why" before the "how".',
        
        'value_2_title': 'Our identities are diverse, but our vision is shared',
        'value_2_desc': 'Innovation doesn\'t happen in silos. My technical background allows me to speak the same language as developers and stakeholders. I work to ensure design is not just a prototype, but a clear and viable roadmap.',
        
        'value_3_title': 'Debriefing. Improvement. Scale. Expansion',
        'value_3_desc': 'A product is never finished; it evolves. I use real metrics and feedback to iterate and refine solutions. My focus is on creating Design Systems that allow the product to grow without losing consistency.',
        
        'value_4_title': 'We don\'t limit ourselves to designing. We open paths',
        'value_4_desc': 'I leverage my background in systems analysis to face complex challenges as opportunities for simplification. Where others see technical barriers, I see paths to create logical and intuitive solutions.',

        // ... (Mantenha o conteúdo anterior) ...

        // --- ALL PROJECTS PAGE ---
        'work_header_title': 'My work',

        // Project Tags
        'tag_ux_web': 'UX/UI • WEBSITE',
        'tag_branding_pd_dev': 'BRANDING • PRODUCT DESIGN • DEVELOPMENT',
        'tag_ux_web_gov': 'UX/UI • WEBSITE • GOVTECH',
        'tag_branding_pd_gov_dev': 'BRANDING • PRODUCT DESIGN • GOVTECH • DEVELOPMENT',
        'tag_pd_web_gov': 'PRODUCT DESIGN • WEBSITE • GOVTECH',
        'tag_web_ux_gov': 'WEBSITE • UX/UI DESIGN • GOVTECH',

        // CTA Final
        'cta_help_title': 'NEED HELP  WITH A DESIGN PROJECT?',
        'cta_contact_btn': 'Get in touch',


        // --- PROJECT: RECICLO ---
        'reciclo_hero_title': 'About the  Project',
        'reciclo_intro': 'The Re-ciclo is an innovative circular economy platform developed by the City of Fortaleza. The project operates in door-to-door selective collection logistics, using sustainable micromobility (electric tricycles) to connect citizens and companies to waste picker associations. I acted as a UX/UI Designer, part of the team responsible for translating a complex public service model into a simplified interface, focused on promoting socioeconomic inclusion for pickers and raising the recycling rate in the capital.',
        
        // Side Details
        'project_label_client': 'Client',
        'project_label_services': 'Services',
        'project_label_role': 'My role',
        'reciclo_services_list': 'Product DiscoveryInterface Design (UI)UX ResearchInteractive Prototyping',
        
        // Narrative
        'reciclo_challenge_title': 'The Challenge',
        'reciclo_challenge_text': 'The biggest technical challenge was user heterogeneity. We needed to design an ecosystem that simultaneously catered to three realities: the Picker (operating in the field, requiring extremely low cognitive load), the Citizen (seeking extreme convenience), and the Company (requiring predictability and impact proof). Our mission was to unify these needs into a seamless flow, where scheduling takes seconds and logistics management is transparent and effective.',
        
        'reciclo_deliverables_title': 'Key Deliverables',
        'reciclo_deliverables_text': 'An end-to-end experience project was delivered, consisting of: Specific User Flows for each profile, High-fidelity Prototypes validated for mobile use, and an Information Architecture structure that organizes scheduling, collection tracking, and correct waste disposal. The focus was ensuring the system had no entry barriers, stimulating the adoption of recycling culture citywide.',
        
        'reciclo_uxui_title': 'Site Design (UX/UI)',
        'reciclo_uxui_text': 'A clear, tactile, and friendly visual language was used. The interface was designed with high-accessibility components, such as large buttons and self-explanatory icons, crucial for waste picker use during routes. The color palette and iconography were designed to communicate sustainability and modernity, transforming the interface and end-user flows into legitimate journeys of trust and organization.',
        
        'reciclo_dev_title': 'Development',
        'reciclo_dev_text': 'I worked in close collaboration with the engineering team to ensure the design\'s technical feasibility. I structured files for a frictionless handoff, providing a documented Design System that facilitated front-end implementation and integration with the Django administrative panel.',

        // Impact & Metrics
        'reciclo_impact_title': 'IMPACT & LEARNINGS',
        
        'reciclo_metric_1_title': 'Dignity and Income',
        'reciclo_metric_1_desc': 'Inclusion of the Base of the Pyramid. By formalizing and facilitating collection via electric tricycles, the project removed social stigma and exhausting physical effort, ensuring a stable income source and recognizing these professionals as essential environmental agents for Fortaleza.',
        
        'reciclo_metric_2_title': 'Gamification as Habit Change',
        'reciclo_metric_2_desc': 'I learned that technology alone recycles nothing; design must motivate. Using gamification elements (like the "Recycle & Win" concept) was fundamental to transforming a boring task into a pleasurable and rewarding habit for the citizen.',
        
        'reciclo_metric_3_title': 'Efficiency and Incentives',
        'reciclo_metric_3_desc': 'Circular Economy Viability. Strategically aligned with the Recycling Incentive Law, the project contributed to an ecosystem capable of attracting massive investments (projected R$ 140M), proving that sustainable design is highly profitable.',
        
        'reciclo_metric_4_title': 'Design for Extreme Contexts',
        'reciclo_metric_4_desc': 'Designing for the waste picker taught me about usability in adverse conditions. The interface needs to be readable and tactile enough to be used quickly during routes. Simplicity here is not aesthetic; it is a work tool.',
        
        'reciclo_metric_5_title': 'Compliance and Scale',
        'reciclo_metric_5_desc': 'Reduction of Landfill Waste. Through an interface focused on quick scheduling, we leveraged the application of the National Solid Waste Policy. The ease of separation and door-to-door collection increased the municipal recycling rate, preserving natural resources and transforming "trash" into new industrial inputs scalably.',
        
        'reciclo_metric_6_title': 'Public-Private Intermediation',
        'reciclo_metric_6_desc': 'This project taught me to design flows that simultaneously meet government bureaucratic requirements and the common user\'s need for convenience, unifying distinct interests into a single fluid journey.',

        // Extra Sections
        'reciclo_user_title': 'The User',
        'reciclo_user_text': 'Re-ciclo\'s success depends on harmony between three fundamental actors. To design a solution that truly transformed waste management in Fortaleza, we dove into the daily lives of Afonso (operational force seeking dignity), Marcelo (citizen seeking convenience), and Júlia (business seeking logistical efficiency). The design challenge was creating an interface that eliminated friction between these profiles, ensuring technology acted as the invisible link transforming disposal into social and environmental value.',
        
        'reciclo_structure_title': 'Project  Structure',
        'reciclo_structure_text': 'Re-ciclo\'s sitemap was designed to simplify the sustainable disposal journey. We structured navigation into modules that first educate the user ("Know") and then facilitate direct action ("Participate"). Segmentation between Individuals and Companies in the access flow is fundamental to ensuring operational features are personalized for each profile, optimizing collection logistics and waste management experience.',
        
        'reciclo_ui_title': 'User Interface  Design',
        'reciclo_ui_text': 'Re-ciclo\'s visual verdict is the modernization of sustainability. Through friendly typography and a diverse chromatic palette, we created an interface communicating energy and social responsibility. The focus was on creating a proprietary visual language, where detailed iconography and rounded components invite user action, strengthening circular economy culture through human-centered design and operational efficiency.',
        
        'reciclo_wireframe_title': 'High Fidelity  Wireframe',
        'reciclo_wireframe_text': 'The high-fidelity desktop stage was designed to be the control center for recycling in Fortaleza. The main focus was data consolidation and transparency: creating dashboards displaying real social and environmental impact metrics (collected tonnage and generated income).',
        
        'reciclo_mobile_title': 'High Fidelity:  Mobile',
        'reciclo_mobile_text': 'Re-ciclo\'s mobile design was conceived under the premise of low friction and tactile usability. For the common citizen, the scheduling flow was optimized to be completed in a few taps, eliminating cognitive barriers.'
    },

    'es': {
        // --- MENU ---
        'menu_home': 'Inicio',
        'menu_projects': 'Proyectos',
        'menu_about': 'Sobre mí',
        'menu_contact': 'Contacto',

        // --- HERO ---
        'hero_title': 'CREANDO EXPERIÊNCIAS CONECTANDO PESSOAS',
        'hero_subtitle': 'DISEÑO DE PRODUCTO • DISEÑO WEB • DESARROLLO',
        'btn_talk': 'Hablemos',
        'btn_projects': 'Ver proyectos',

        // --- PROJETOS ---
        'section_highlight_title': 'TRABAJOS  DESTACADOS',
        'section_highlight_desc': 'A continuación, mis proyectos destacados. Para ver todos mis proyectos, haga clic en Todos los proyectos.',
        'btn_all_projects': 'Todos los proyectos',

        // --- SERVIÇOS GERAL ---
        'serv_help_title': 'En qué puedo ayudar',
        'serv_main_title': 'SERVICIOS',
        'serv_desc': 'Soluciones digitales para productos que necesitan salir del papel, evolucionar y escalar, sin depender de grandes equipos.',
        'word_includes': 'Incluye:',

        // --- SERVIÇO 1 (UX) ---
        'serv_1_title': 'UX & Product Design',
        'serv_1_desc': 'Actúo en todo el ciclo del producto, desde el descubrimiento del problema hasta la validación de la solución, garantizando decisiones orientadas al usuario y al negocio.',
        'serv_1_item_1': 'UX Research e discovery',
        'serv_1_item_2': 'Mapeo de viajes (onboarding, activación y retención)',
        'serv_1_item_3': 'Arquitectura de la información',
        'serv_1_item_4': 'Flujos de usuario',
        'serv_1_item_5': 'Wireframes y prototipos (baja → alta fidelidad)',
        'serv_1_item_6': 'Pruebas de usabilidad y validación',
        

        // --- SERVIÇO 2 (UI) ---
        'serv_2_title': 'UI & Visual Design',
        'serv_2_desc': 'Creo interfaces funcionales, accesibles y visualmente consistentes, enfocadas en usabilidad y claridad. Trabajo con sistemas de diseño para garantizar eficiencia.',
        'serv_2_item_1': 'Diseño UI para productos digitales',
        'serv_2_item_2': 'Sistema de diseño (creación o evolución)',
        'serv_2_item_3': 'Componentización visual',
        'serv_2_item_4': 'Diseño responsivo',
        'serv_2_item_5': 'Accesibilidad aplicada al producto',

        // --- SERVIÇO 3 (FRONT) ---
        'serv_3_title': 'Front-end & No-Code Development',
        'serv_3_desc': 'Implemento interfaces con fidelidad al diseño, uniendo código y no-code para entregar soluciones funcionales, performantes y listas para uso real.',
        'serv_3_item_1': 'HTML, CSS, JavaScript, SCSS y Bootstrap',
        'serv_3_item_2': 'Implementación de interfaces responsivas',
        'serv_3_item_3': 'FlutterFlow (apps y web apps)',
        'serv_3_item_4': 'Integraciones vía API (GET / POST)',
        'serv_3_item_5': 'Ajustes finos entre diseño y desarrollo',

        // --- SERVIÇO 4 (WEBSITES) ---
        'serv_4_title': 'Websites & MVPs',
        'serv_4_desc': 'Desarrollo sitios web y MVPs rápidos para validar ideas, comunicar propuestas de valor y acelerar lanzamientos.',
        'serv_4_item_1': 'Sitios web en Webflow',
        'serv_4_item_2': 'Prototipado y MVPs funcionales',
        'serv_4_item_3': 'Landing pages para validación',
        'serv_4_item_4': 'Estructuración de contenido y UX',
        'serv_4_item_5': 'SEO técnico esencial y rendimiento',

        // --- FAQ ---
        'faq_title': 'Preguntas Frecuentes',
        'faq_1_question': '¿Quién es Brenda Tavares?',
        'faq_1_answer': 'Soy brasileña, estudio y trabajo con UX, desarrollo y diseño de productos desde hace más de 3 años. Mi objetivo es sumar a proyectos y sueños de personas de todo el mundo.',

        'faq_2_question': '¿Con qué trabajo realmente? ¿Y con qué no?',
        'faq_2_answer': 'Trabajo con Diseño de Producto (End-to-end), UI/UX, Design Systems y Front-end. No trabajo con marketing digital ni gestión de tráfico.',

        'faq_3_question': '¿Cómo puedo contactarte?',
        'faq_3_answer': 'Puedes contactarme a través del botón "Contacto" en el menú o por mis redes sociales (LinkedIn y Behance). Suelo responder dentro de las 24 horas hábiles.',

        // --- FOOTER ---
        'footer_explore': 'Explorar',
        'footer_contact': 'Contacto',
        'footer_connect': 'Conectar',
        'footer_copy_email': 'Copiar correo',
        'footer_rights': '© Brenda Tavares - Todos los derechos reservados',

        // --- PÁGINA DE CONTACTO ---
        'contact_headline': 'Estoy ansiosa por construir un mundo digital cohesivo...',
        'contact_subheadline': 'Deja tus datos a continuación y ve cómo tu visión toma forma.',
        'contact_email_intro': 'Si prefieres enviar un correo:',
        
        // Form Labels
        'form_label_name': 'Tu nombre',
        'form_label_email': 'Tu correo',
        'form_label_prop': 'Tu propuesta',
        'form_label_services': 'Servicios de interés',
        
        // Form Placeholders
        'form_ph_name': 'Nombre completo',
        'form_ph_email': 'Tu dirección de correo',
        'form_ph_message': 'Cuáles son los objetivos, requisitos...',
        
        // Button
        'btn_send': 'Enviar',

        // --- PÁGINA SOBRE MÍ ---
        'about_call_me': 'LLÁMAME',

        'about_bio_p1': 'Hola, soy Brenda. Soy una Product Designer y Desarrolladora Front-end que actúa en la intersección entre la necesidad del usuario, la estrategia de negocio y la viabilidad técnica. Con formación en Análisis y Desarrollo de Sistemas, mi enfoque va más allá de lo visual: diseño experiencias que son, al mismo tiempo, estéticamente sofisticadas y técnicamente escalables.',
        'about_bio_p2': 'He participado en proyectos de alto impacto, incluidos sistemas premiados de transparencia gubernamental y soluciones financieras que redujeron en un 40% el tiempo de operación manual de equipos.Tengo amplia experiencia en el ciclo completo del producto (End-to-End), utilizando metodologías ágiles y tecnologías como FlutterFlow y React para traducir problemas complejos en productos funcionales.',
        'about_bio_p3': 'Viniendo de una familia que une creatividad y gestión, creo que el diseño exitoso es aquel que simplifica la vida de las personas mientras posiciona a las marcas como líderes en sus mercados.',

        'values_title': 'El compromiso intrépido es el  fundamento de mi trabajo.',
        
        'value_1_title': 'Empatía en primer lugar',
        'value_1_desc': 'El diseño es el puente entre las necesidades humanas y los objetivos comerciales. Mi proceso comienza escuchando, no solo al usuario, sino la esencia de la empresa. Creo que la verdadera empatía nace de entender el "por qué" antes del "cómo".',
        
        'value_2_title': 'Nuestras identidades son diversas, pero nuestra visión es compartida',
        'value_2_desc': 'La innovación no ocurre en silos. Mi formación técnica me permite hablar el mismo idioma que los desarrolladores y stakeholders. Trabajo para que el diseño no sea solo un prototipo, sino una hoja de ruta clara y viable.',
        
        'value_3_title': 'Debriefing. Mejora. Escala. Expansión',
        'value_3_desc': 'Un producto nunca está terminado; evoluciona. Utilizo métricas y feedbacks reales para iterar y refinar soluciones. Mi enfoque es crear sistemas de diseño (Design Systems) que permitan que el producto crezca sin perder consistencia.',
        
        'value_4_title': 'No nos limitamos a diseñar. Abrimos caminos',
        'value_4_desc': 'Aprovecho mi base en análisis de sistemas para enfrentar desafíos complejos como oportunidades de simplificación. Donde otros ven barreras técnicas, yo veo caminos para crear soluciones lógicas e intuitivas.',

        // --- PÁGINA TODOS LOS PROYECTOS ---
        'work_header_title': 'Mis trabajos',

        // Etiquetas de Proyectos
        'tag_ux_web': 'UX/UI • SITIO WEB',
        'tag_branding_pd_dev': 'BRANDING • DISEÑO DE PRODUCTO • DESARROLLO',
        'tag_ux_web_gov': 'UX/UI • SITIO WEB • GOVTECH',
        'tag_branding_pd_gov_dev': 'BRANDING • DISEÑO DE PRODUCTO • GOVTECH • DESARROLLO',
        'tag_pd_web_gov': 'DISEÑO DE PRODUCTO • SITIO WEB • GOVTECH',
        'tag_web_ux_gov': 'SITIO WEB • DISEÑO UX/UI • GOVTECH',

        // CTA Final
        'cta_help_title': '¿NECESITAS AYUDA  CON UN PROYECTO DE DISEÑO?',
        'cta_contact_btn': 'Ponte en contacto',

        // ... (Español) ...
        'reciclo_hero_title': 'Sobre el  Proyecto',
        'reciclo_intro': 'El Re-ciclo es una plataforma innovadora de economía circular desarrollada por el Ayuntamiento de Fortaleza. El proyecto actúa en la logística de recolección selectiva puerta a puerta, utilizando micromovilidad sostenible (triciclos eléctricos) para conectar ciudadanos y empresas con asociaciones de recolectores. Actué como Diseñadora UX/UI, siendo parte del equipo responsable de traducir un modelo de servicio público complejo en una interfaz simplificada, enfocada en promover la inclusión socioeconómica de los recolectores y elevar el índice de reciclaje de la capital.',
        
        'project_label_client': 'Cliente',
        'project_label_services': 'Servicios',
        'project_label_role': 'Mi rol',
        'reciclo_services_list': 'Descubrimiento de ProductoDiseño de Interfaz (UI)Investigación UXPrototipado Interactivo',
        
        'reciclo_challenge_title': 'El Desafío',
        'reciclo_challenge_text': 'El mayor desafío técnico fue la heterogeneidad de los usuarios. Necesitábamos diseñar un ecosistema que atendiera simultáneamente tres realidades: el Recolector (que opera en campo y exige carga cognitiva bajísima), el Ciudadano (que busca conveniencia extrema) y la Empresa (que necesita previsibilidad y prueba de impacto). Nuestra misión fue unificar estas necesidades en un flujo continuo, donde la programación se realizara en segundos y la gestión logística fuera transparente y eficaz.',
        
        'reciclo_deliverables_title': 'Principales Entregables',
        'reciclo_deliverables_text': 'Se entregó un proyecto de experiencia end-to-end, compuesto por: Flujos de Usuario específicos para cada perfil, Prototipos de alta fidelidad validados para uso móvil, y una estructura de Arquitectura de Información que organiza la programación, el rastreo de la recolección y el destino correcto de los residuos. El foco fue garantizar que el sistema no tuviera barreras de entrada, estimulando la adopción de la cultura de reciclaje en toda la ciudad.',
        
        'reciclo_uxui_title': 'Diseño del Sitio (UX/UI)',
        'reciclo_uxui_text': 'Se utilizó un lenguaje visual claro, táctil y amigable. La interfaz fue diseñada con componentes de alta accesibilidad, como botones grandes e íconos autoexplicativos, fundamentales para el uso del recolector durante la ruta. La paleta de colores y la iconografía fueron pensadas para comunicar sostenibilidad y modernidad, transformando la interfaz y los flujos de usuarios finales en jornadas legítimas de confianza y organización.',
        
        'reciclo_dev_title': 'Desarrollo',
        'reciclo_dev_text': 'Trabajé en estrecha colaboración con el equipo de ingeniería para garantizar la viabilidad técnica del diseño. Estructuré los archivos para un handoff sin fricciones, proporcionando un Design System documentado que facilitó la implementación del front-end y la integración con el panel administrativo en Django.',

        'reciclo_impact_title': 'IMPACTO Y APRENDIZAJES',
        
        'reciclo_metric_1_title': 'Dignidad e Ingresos',
        'reciclo_metric_1_desc': 'Inclusión de la Base de la Pirámide. Al formalizar y facilitar la recolección vía triciclos eléctricos, el proyecto eliminó el estigma social y el esfuerzo físico exhaustivo, garantizando una fuente de ingresos estable y el reconocimiento de estos profesionales como agentes ambientales esenciales.',
        
        'reciclo_metric_2_title': 'Gamificación como Cambio de Hábito',
        'reciclo_metric_2_desc': 'Aprendí que la tecnología por sí sola no recicla nada; el diseño debe motivar. Usar elementos de gamificación (como el concepto "Recicla y Gana") fue fundamental para transformar una tarea aburrida en un hábito placentero y gratificante para el ciudadano.',
        
        'reciclo_metric_3_title': 'Eficiencia e Incentivos',
        'reciclo_metric_3_desc': 'Viabilidad de la Economía Circular. Estratégicamente alineado a la Ley de Incentivo al Reciclaje, el proyecto contribuyó a un ecosistema capaz de captar inversiones masivas, demostrando que el diseño sostenible es altamente rentable.',
        
        'reciclo_metric_4_title': 'Diseño para Contextos Extremos',
        'reciclo_metric_4_desc': 'Diseñar para el recolector me enseñó sobre usabilidad en condiciones adversas. La interfaz necesita ser legible y táctil para ser usada rápidamente durante las rutas. La simplicidad aquí no es estética, es herramienta de trabajo.',
        
        'reciclo_metric_5_title': 'Cumplimiento y Escala',
        'reciclo_metric_5_desc': 'Reducción de Residuos en Vertederos. A través de una interfaz enfocada en programación rápida, potenciamos la aplicación de la Política Nacional de Residuos Sólidos. La facilidad de separación aumentó el índice de reciclaje municipal, preservando recursos naturales y transformando "basura" en nuevos insumos industriales de forma escalable.',
        
        'reciclo_metric_6_title': 'Intermediación Público-Privada',
        'reciclo_metric_6_desc': 'Este proyecto me enseñó a diseñar flujos que atienden simultáneamente las exigencias burocráticas del gobierno y la necesidad de conveniencia del usuario común, unificando intereses distintos en una única jornada fluida.',

        'reciclo_user_title': 'El Usuario',
        'reciclo_user_text': 'El éxito de Re-ciclo depende de la armonía entre tres actores fundamentales. Para diseñar una solución que realmente transformara la gestión de residuos en Fortaleza, nos sumergimos en el día a día de Afonso, Marcelo y Júlia. El desafío del diseño fue crear una interfaz que eliminara la fricción entre estos perfiles.',
        
        'reciclo_structure_title': 'Estructura del  Proyecto',
        'reciclo_structure_text': 'El sitemap de Re-ciclo fue diseñado para simplificar la jornada del descarte sostenible. Estructuramos la navegación en módulos que primero educan al usuario y luego facilitan la acción directa. La segmentación entre Persona Física y Jurídica es fundamental para garantizar funcionalidades personalizadas.',
        
        'reciclo_ui_title': 'Diseño de Interfaz  de Usuario',
        'reciclo_ui_text': 'El veredicto visual de Re-ciclo es la modernización de la sostenibilidad. A través de una tipografía amigable y una paleta cromática diversa, creamos una interfaz que comunica energía y responsabilidad social, fortaleciendo la cultura de la economía circular.',
        
        'reciclo_wireframe_title': 'Wireframe de Alta  Fidelidad',
        'reciclo_wireframe_text': 'La etapa de alta fidelidad para escritorio fue diseñada para ser el centro de control del reciclaje. El foco principal fue la consolidación de datos y transparencia: creamos dashboards que muestran métricas reales de impacto social y ambiental.',
        
        'reciclo_mobile_title': 'Wireframe de Alta  Fidelidad: Móvil',
        'reciclo_mobile_text': 'El diseño móvil de Re-ciclo fue concebido bajo la premisa de baja fricción y usabilidad táctil. Para el ciudadano común, el flujo de programación fue optimizado para completarse en pocos toques, eliminando barreras cognitivas.'
    }
};

// ... Mantenha o resto da função changeLanguage abaixo ...

// 2. A Função que faz a mágica
function changeLanguage(lang) {
    // Guarda a preferência do usuário no navegador (para não resetar se ele der F5)
    localStorage.setItem('selectedLang', lang);

    // Atualiza o texto do botão do Dropdown (ex: muda de PT para EN)
    const langLabel = document.getElementById('current-lang');
    if (langLabel) {
        langLabel.innerText = lang.toUpperCase(); 
        // Se quiser mudar o ícone da bandeira também, teria que ter lógica aqui, 
        // mas só o texto (PT/EN/ES) já funciona bem com seu layout.
    }

    // Busca todos os elementos que têm o atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');

    // Para cada elemento, troca o texto pelo que está no dicionário
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Verifica se existe tradução para aquela chave
        if (translations[lang] && translations[lang][key]) {
            // Se for um input (tipo o placeholder do formulário), usa placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Se for texto normal
                element.innerText = translations[lang][key];
            }
        }
    });
}

// 3. Carregar a língua salva quando a página abrir
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se já tem algo salvo, se não, usa 'pt' como padrão
    const savedLang = localStorage.getItem('selectedLang') || 'pt';
    changeLanguage(savedLang);
});