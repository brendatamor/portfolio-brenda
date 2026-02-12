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
        'reciclo_mobile_text': 'O design mobile do Re-ciclo foi concebido sob a premissa da baixa fricção e usabilidade tátil. Para o cidadão comum, o fluxo de agendamento foi otimizado para ser concluído em poucos toques, eliminando barreiras cognitivas.',

        // --- PROJETO: PONTE DE ENCONTRO ---
        'ponte_hero_title': 'Sobre o  Projeto',
        'ponte_intro': 'O Ponte de Encontro é uma plataforma vital desenvolvida para a FUNCI (Fundação da Criança e da Família Cidadã) em parceria com a Citinova. O projeto centraliza o serviço especializado de abordagem social em Fortaleza, facilitando a identificação e o acolhimento de crianças e adolescentes em situação de vulnerabilidade. Como minha primeira experiência liderando um projeto, coordenei todo o ciclo de desenvolvimento, desde a escuta ativa das necessidades da FUNCI até a entrega técnica de um sistema que atua como ponte direta entre o cidadão e a rede socioassistencial.',
        
        // Detalhes
        'ponte_client_value': 'FUNCI  Fortaleza, CE - BRA',
        'ponte_services_list': 'Liderança de ProjetoUX/UI DesignFront-end DevelopmentAdmin Experience (AX)',
        'ponte_role_value': 'Project Lead & Front-end Developer',

        // Narrativa
        'ponte_challenge_title': 'O desafio',
        'ponte_challenge_text': 'O maior desafio foi a simplificação da complexidade. Projetos governamentais costumam ter requisitos densos e burocráticos. Minha missão foi traduzir essas necessidades em uma interface que estimulasse a ação do cidadão. Sabemos que a população evita plataformas complexas, especialmente para ações sociais. Por isso, o foco técnico foi remover qualquer barreira cognitiva, garantindo que o ato de denunciar ou pedir ajuda fosse rápido, intuitivo e acessível para qualquer nível de letramento digital.',
        
        'ponte_deliverables_title': 'Principais entregáveis',
        'ponte_deliverables_text': 'Entregamos um ecossistema completo focado em agilidade e transparência: um portal de denúncias mobile-first com fluxos simplificados, uma ferramenta de consulta de protocolos em tempo real e um Painel Administrativo robusto para a gestão das equipes volantes. Desenvolvi fluxogramas de processos que garantiram que, do clique inicial ao atendimento da criança, não houvesse gargalos de informação, transformando o sistema em uma ferramenta de trabalho ágil para os educadores sociais.',
        
        'ponte_uxui_title': 'Design de sites (UX/UI)',
        'ponte_uxui_text': 'Construí uma interface baseada no objetivo de não ter fricções ou curvas de aprendizado. Utilizei uma paleta de cores acolhedora e tipografia legível para passar segurança e seriedade. Cada elemento de UI foi validado para garantir rapidez na inserção de dados. O design aqui não é apenas estética, mas essencialmente funcional para um sistema com uso intuitivo. A arquitetura foi pensada para que o usuário sinta que "fazer o bem é fácil", utilizando componentes táteis e formulários inteligentes que reduzem o tempo de preenchimento.',
        
        'ponte_dev_title': 'Desenvolvimento',
        'ponte_dev_text': 'Neste projeto, atuei intensamente no desenvolvimento técnico, utilizando um stack moderno composto por Node.js, Webpack e SCSS para garantir um front-end performático e modularizado. A estrutura foi construída sobre o Bootstrap para assegurar responsividade total, já que a maioria das interações ocorre via mobile nas ruas. No back-end, utilizamos Django, o que nos permitiu criar uma interface administrativa (Admin) customizada para a FUNCI, facilitando o gerenciamento de dados complexos com a segurança que um projeto público exige.',

        // Impacto
        'ponte_impact_title': 'IMPACTOS & APRENDIZADOS',
        
        'ponte_metric_1_title': 'Eficiência na Abordagem',
        'ponte_metric_1_desc': 'Aumento na Agilidade de Denúncia. Ao projetar uma interface mobile-first focada em baixa fricção, reduzimos o tempo médio de preenchimento do formulário de denúncia. Isso permitiu que cidadãos realizassem o reporte em segundos, garantindo que a equipe volante recebesse os dados em tempo real e agisse com maior precisão geográfica.',
        
        'ponte_metric_2_title': 'Alcance Social e Visibilidade',
        'ponte_metric_2_desc': '+680 Identificações Realizadas. O sistema atuou como um facilitador técnico para o registro de crianças e adolescentes acompanhados. A clareza visual e a facilidade de consulta de protocolos geraram uma maior confiança da população no canal oficial, resultando em um aumento direto no número de acolhimentos e atendimentos sociais documentados.',
        
        'ponte_metric_3_title': 'Educação e Direitos Humanos',
        'ponte_metric_3_desc': 'Democratização da Informação. Além da ferramenta de denúncia, o portal tornou-se um hub de consulta de direitos. Registramos um alto volume de acessos às seções informativas sobre o Estatuto da Criança e do Adolescente (ECA) e leis municipais, educando a população sobre as condições que configuram violação de direitos.',
        
        'ponte_metric_4_title': 'Digitalização e Rastreabilidade',
        'ponte_metric_4_desc': 'Fim do Gap de Dados. A migração do processo manual para o sistema administrativo (Django Admin) que desenvolvemos permitiu a rastreabilidade total de cada caso. Agora, a FUNCI possui métricas reais para planejar políticas públicas baseadas em locais de maior incidência e tipos de ocorrência mais frequentes.',
        
        'ponte_metric_5_title': 'A Importância do Admin',
        'ponte_metric_5_desc': 'Projetar o lado administrativo para os educadores sociais foi tão vital quanto o portal público. Criar dashboards simples para quem está no campo de batalha é o que realmente faz a operação ser sustentável.',
        
        'ponte_metric_6_title': 'Design como facilitador & liderança',
        'ponte_metric_6_desc': 'Aprendi que, em projetos sociais, o design serve para construir uma ponte de confiança entre o cidadão e o governo, e liderar este projeto me ensinou a gerenciar expectativas de stakeholders públicos e a garantir um bom e adequado desenvolvimento.',

        // Seções Extras
        'ponte_user_title': 'O usuário',
        'ponte_user_text_1': 'Para projetar o Ponte de Encontro, foi necessário olhar para duas realidades distintas. De um lado, a criança e o adolescente, o beneficiário final que vive em um ciclo de invisibilidade e privação de direitos. Do outro, o cidadão ativo, representado pelo Alberto, que sente o incômodo social, mas muitas vezes não age por medo da burocracia.',
        'ponte_user_text_2': 'O mapeamento destas personas revelou que o sucesso do projeto dependia de remover a fricção exacerbada e curva de aprendizados do sistema. Alberto precisa de um gatilho de denúncia instantâneo e seguro para que a criança deixe de ser invisível. O design foi concebido para ser o elo mais curto e humano possível entre a vontade de ajudar e a ação do poder público.',
        
        'ponte_structure_title': 'Estrutura do  projeto',
        'ponte_structure_text': 'Para um projeto de abordagem social, a arquitetura de informação deve ser o caminho mais curto entre a percepção de uma violação e a ação protetiva. Projetei uma estrutura enxuta e intuitiva, eliminando ruídos para que o cidadão possa agir no momento exato da necessidade.',
        
        'ponte_wireframe_low_title': 'WIREFRAMES INICIAIS',
        'ponte_wireframe_low_text': 'Na etapa de wireframes de média fidelidade, meu foco como Lead do Projeto foi a remoção de barreiras cognitivas. Projetar para o serviço social exige que o cidadão não precise gastar energia pensando "como usar", mas sim focar na ação de ajudar. Estruturei a hierarquia de informações priorizando o fluxo de denúncia e consulta, validando a disposição dos elementos antes da aplicação da identidade visual. O foco técnico esteve em:',
        'ponte_wireframe_low_list': ' Formulários Simplificados: Agrupamento lógico de campos para reduzir o tempo de preenchimento. Navegação Mobile-First: Garantia de que todos os componentes fossem táteis e funcionais para o uso em trânsito, ambiente onde a maioria das abordagens e denúncias ocorrem.',

        'ponte_ui_title': 'Design de interface  do usuário',
        'ponte_ui_text_1': 'O desafio visual do Ponte de Encontro foi equilibrar a seriedade de um serviço público com a sensibilidade exigida pelos direitos humanos. Projetei um Style Guide focado em alta visibilidade e acolhimento, garantindo que a interface fosse, ao mesmo tempo, um alerta para a sociedade e um porto seguro para quem busca ajuda.',
        'ponte_ui_list': 'Cores Estratégicas: A paleta utiliza o Laranja (#DF9A14) e o Amarelo (#FFCC00) para evocar atenção e energia, garantindo que o portal se destaque como uma ferramenta de utilidade pública. O Azul (#2B5FC5) foi inserido para trazer o contraponto de confiança e credibilidade institucional. Tipografia Dinâmica:  Combinei a fonte Righteous nos títulos, pois pela sua personalidade moderna e marcante, com a Roboto nos textos de leitura, garantindo acessibilidade e fluidez na absorção de informações densas sobre leis e protocolos.  Iconografia Humanizada:  Desenvolvi um conjunto de ícones ilustrados que facilitam a identificação rápida das causas (trabalho infantil, exploração, etc). Essa escolha reduz o impacto psicológico do tema, tornando a navegação mais amigável e intuitiva para o cidadão.',

        'ponte_wireframe_hi_title': 'Wireframe de alta  fidelidade',
        'ponte_wireframe_hi_text': 'A etapa de alta fidelidade traduziu o compromisso social do Ponte de Encontro em uma interface de alto impacto e baixa fricção. Utilizei o Design System para garantir que a navegação fosse acolhedora, mas extremamente funcional. O foco principal foi a hierarquia visual: o botão de denúncia e as informações sobre direitos infantis ganharam destaque imediato, guiando o cidadão de forma linear. Implementamos ferramentas de acessibilidade nativas e uma arquitetura de informação que organiza desde a conscientização até o monitoramento administrativo via Django.',
        'ponte_label_desktop_web': 'Wireframes - desktop (Website)',
        'ponte_label_desktop_admin': 'Wireframes - desktop (Admin)',

        'ponte_mobile_title': 'Wireframe de alta  fidelidade: mobile',
        'ponte_mobile_text_1': 'Como a maioria das interações de denúncia ocorre em trânsito, a versão mobile foi o coração do projeto. Foquei em um design altamente tátil e responsivo, otimizando formulários densos para preenchimento rápido. O objetivo técnico foi reduzir o tempo de interação para que o relato de violação de direitos ocorra no momento exato da observação. O resultado é uma ferramenta leve, performática e inclusiva, garantindo que a tecnologia atue como um facilitador imediato de proteção social na palma da mão.',
        'ponte_mobile_text_2': 'Adaptamos a densidade de informações para evitar sobrecarga em telas menores, garantindo que o fluxo de inscrição e os conteúdos de educação permaneçam fluidos e acessíveis em qualquer dispositivo. O resultado é uma interface moderna, leve e tecnicamente escalável, pronta para proporcionar um handoff sem atritos para o desenvolvimento.'
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
        'reciclo_mobile_text': 'Re-ciclo\'s mobile design was conceived under the premise of low friction and tactile usability. For the common citizen, the scheduling flow was optimized to be completed in a few taps, eliminating cognitive barriers.',

        // --- PROJECT: PONTE DE ENCONTRO ---
        'ponte_hero_title': 'About the  Project',
        'ponte_intro': 'The  Ponte de Encontro is a vital platform developed for FUNCI (Foundation for the Child and Family Citizen) in partnership with Citinova. The project centralizes the specialized social outreach service in Fortaleza, facilitating the identification and shelter of vulnerable children and adolescents. As my first experience leading a project, I coordinated the entire development cycle, from active listening to FUNCI\'s needs to the technical delivery of a system that acts as a direct bridge between the citizen and the social assistance network.',
        
        // Details
        'ponte_client_value': 'FUNCI  Fortaleza, CE - BRA',
        'ponte_services_list': 'Project LeadershipUX/UI DesignFront-end DevelopmentAdmin Experience (AX)',
        'ponte_role_value': 'Project Lead & Front-end Developer',

        // Narrative
        'ponte_challenge_title': 'The Challenge',
        'ponte_challenge_text': 'The biggest challenge was simplifying complexity. Government projects often have dense and bureaucratic requirements. My mission was to translate these needs into an interface that stimulated citizen action. We know the population avoids complex platforms, especially for social actions. Therefore, the technical focus was to remove any cognitive barrier, ensuring the act of reporting or asking for help was fast, intuitive, and accessible for any level of digital literacy.',
        
        'ponte_deliverables_title': 'Key Deliverables',
        'ponte_deliverables_text': 'We delivered a complete ecosystem focused on agility and transparency: a mobile-first reporting portal with simplified flows, a real-time protocol query tool, and a robust Administrative Panel for mobile team management. I developed process flowcharts ensuring that, from the initial click to the child\'s assistance, there were no information bottlenecks, transforming the system into an agile work tool for social educators.',
        
        'ponte_uxui_title': 'Site Design (UX/UI)',
        'ponte_uxui_text': 'I built an interface based on the goal of having no friction or learning curves. I used a welcoming color palette and legible typography to convey safety and seriousness. Each UI element was validated to ensure speed in data entry. The design here is not just aesthetic, but essentially functional for intuitive system use. The architecture was designed so the user feels that "doing good is easy," using tactile components and smart forms that reduce completion time.',
        
        'ponte_dev_title': 'Development',
        'ponte_dev_text': 'In this project, I worked intensely on technical development, using a modern stack composed of Node.js, Webpack, and SCSS to ensure a performant and modular front-end. The structure was built on Bootstrap to ensure total responsiveness, as most interactions occur via mobile on the streets. On the back-end, we used Django, allowing us to create a customized administrative interface (Admin) for FUNCI, facilitating complex data management with the security a public project demands.',

        // Impact
        'ponte_impact_title': 'IMPACTS & LEARNINGS',
        
        'ponte_metric_1_title': 'Approach Efficiency',
        'ponte_metric_1_desc': 'Increase in Reporting Agility. By designing a mobile-first interface focused on low friction, we reduced the average time to complete the reporting form. This allowed citizens to report in seconds, ensuring the mobile team received data in real-time and acted with greater geographic precision.',
        
        'ponte_metric_2_title': 'Social Reach and Visibility',
        'ponte_metric_2_desc': '+680 Identifications Made. The system acted as a technical facilitator for registering accompanied children and adolescents. Visual clarity and ease of protocol consultation generated greater public trust in the official channel, resulting in a direct increase in the number of documented shelters and social services.',
        
        'ponte_metric_3_title': 'Education and Human Rights',
        'ponte_metric_3_desc': 'Information Democratization. Beyond the reporting tool, the portal became a rights consultation hub. We recorded a high volume of access to informative sections about the Child and Adolescent Statute (ECA) and municipal laws, educating the population on conditions constituting rights violations.',
        
        'ponte_metric_4_title': 'Digitization and Traceability',
        'ponte_metric_4_desc': 'End of Data Gap. Migrating the manual process to the administrative system (Django Admin) we developed allowed full traceability of each case. Now, FUNCI has real metrics to plan public policies based on high-incidence locations and most frequent occurrence types.',
        
        'ponte_metric_5_title': 'The Importance of Admin',
        'ponte_metric_5_desc': 'Designing the administrative side for social educators was as vital as the public portal. Creating simple dashboards for those on the battlefield is what truly makes the operation sustainable.',
        
        'ponte_metric_6_title': 'Design as Facilitator & Leadership',
        'ponte_metric_6_desc': 'I learned that, in social projects, design serves to build a bridge of trust between the citizen and the government, and leading this project taught me to manage public stakeholder expectations and ensure good and adequate development.',

        // Extra Sections
        'ponte_user_title': 'The User',
        'ponte_user_text_1': 'To design Ponte de Encontro, it was necessary to look at two distinct realities. On one side, the child and adolescent, the final beneficiary living in a cycle of invisibility and rights deprivation. On the other, the active citizen, represented by Alberto, who feels social discomfort but often does not act due to fear of bureaucracy.',
        'ponte_user_text_2': 'Mapping these personas revealed that the project\'s success depended on removing exaggerated friction and system learning curves. Alberto needs an instant and safe reporting trigger for the child to stop being invisible. The design was conceived to be the shortest and most human link possible between the will to help and public power action.',
        
        'ponte_structure_title': 'Project  Structure',
        'ponte_structure_text': 'For a social outreach project, information architecture must be the shortest path between perceiving a violation and protective action. I designed a lean and intuitive structure, eliminating noise so the citizen can act at the exact moment of need.',
        
        'ponte_wireframe_low_title': 'INITIAL WIREFRAMES',
        'ponte_wireframe_low_text': 'In the mid-fidelity wireframe stage, my focus as Project Lead was removing cognitive barriers. Designing for social service requires the citizen not to spend energy thinking "how to use," but focusing on the action of helping. I structured the information hierarchy prioritizing the reporting and query flow, validating element layout before visual identity application. Technical focus was on:',
        'ponte_wireframe_low_list': ' Simplified Forms: Logical grouping of fields to reduce completion time. Mobile-First Navigation: Ensuring all components were tactile and functional for on-the-go use, the environment where most approaches and reports occur.',

        'ponte_ui_title': 'User Interface  Design',
        'ponte_ui_text_1': 'The visual challenge of Ponte de Encontro was balancing the seriousness of a public service with the sensitivity required by human rights. I designed a Style Guide focused on high visibility and welcoming, ensuring the interface was both an alert to society and a safe harbor for those seeking help.',
        'ponte_ui_list': ' Strategic Colors: The palette uses Orange (#DF9A14) and Yellow (#FFCC00) to evoke attention and energy, ensuring the portal stands out as a public utility tool. Blue (#2B5FC5) was inserted to bring the counterpoint of trust and institutional credibility.  Dynamic Typography: I combined Righteous font in titles, for its modern and striking personality, with Roboto in reading texts, ensuring accessibility and fluidity in absorbing dense information about laws and protocols.  Humanized Iconography: I developed a set of illustrated icons facilitating quick identification of causes (child labor, exploitation, etc). This choice reduces the psychological impact of the theme, making navigation friendlier and more intuitive for the citizen.',

        'ponte_wireframe_hi_title': 'High Fidelity  Wireframe',
        'ponte_wireframe_hi_text': 'The high-fidelity stage translated Ponte de Encontro\'s social commitment into a high-impact, low-friction interface. I used the Design System to ensure navigation was welcoming but extremely functional. The main focus was visual hierarchy: the report button and child rights information gained immediate prominence, guiding the citizen linearly. We implemented native accessibility tools and an information architecture organizing everything from awareness to administrative monitoring via Django.',
        'ponte_label_desktop_web': 'Wireframes - desktop (Website)',
        'ponte_label_desktop_admin': 'Wireframes - desktop (Admin)',

        'ponte_mobile_title': 'High Fidelity:  Mobile',
        'ponte_mobile_text_1': 'Since most reporting interactions occur in transit, the mobile version was the project\'s heart. I focused on a highly tactile and responsive design, optimizing dense forms for quick completion. The technical objective was to reduce interaction time so the rights violation report occurs at the exact moment of observation. The result is a lightweight, performant, and inclusive tool, ensuring technology acts as an immediate social protection facilitator in the palm of the hand.',
        'ponte_mobile_text_2': 'We adapted information density to avoid overload on smaller screens, ensuring the enrollment flow and education contents remain fluid and accessible on any device. The result is a modern, lightweight, and technically scalable interface, ready to provide a frictionless handoff for development.'
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
        'reciclo_mobile_text': 'El diseño móvil de Re-ciclo fue concebido bajo la premisa de baja fricción y usabilidad táctil. Para el ciudadano común, el flujo de programación fue optimizado para completarse en pocos toques, eliminando barreras cognitivas.',


        // --- PROYECTO: PONTE DE ENCONTRO ---
        'ponte_hero_title': 'Sobre el  Proyecto',
        'ponte_intro': 'El Ponte de Encontro es una plataforma vital desarrollada para la FUNCI (Fundación del Niño y la Familia Ciudadana) en asociación con Citinova. El proyecto centraliza el servicio especializado de abordaje social en Fortaleza, facilitando la identificación y acogida de niños y adolescentes en situación de vulnerabilidad. Como mi primera experiencia liderando un proyecto, coordiné todo el ciclo de desarrollo, desde la escucha activa de las necesidades de la FUNCI hasta la entrega técnica de un sistema que actúa como puente directo entre el ciudadano y la red socioasistencial.',
        
        // Detalles
        'ponte_client_value': 'FUNCI  Fortaleza, CE - BRA',
        'ponte_services_list': 'Liderazgo de ProyectoDiseño UX/UIDesarrollo Front-endAdmin Experience (AX)',
        'ponte_role_value': 'Líder de Proyecto & Desarrolladora Front-end',

        // Narrativa
        'ponte_challenge_title': 'El Desafío',
        'ponte_challenge_text': 'El mayor desafío fue la simplificación de la complejidad. Los proyectos gubernamentales suelen tener requisitos densos y burocráticos. Mi misión fue traducir estas necesidades en una interfaz que estimulara la acción del ciudadano. Sabemos que la población evita plataformas complejas, especialmente para acciones sociales. Por eso, el enfoque técnico fue eliminar cualquier barrera cognitiva, garantizando que el acto de denunciar o pedir ayuda fuera rápido, intuitivo y accesible para cualquier nivel de alfabetización digital.',
        
        'ponte_deliverables_title': 'Principales Entregables',
        'ponte_deliverables_text': 'Entregamos un ecosistema completo enfocado en agilidad y transparencia: un portal de denuncias mobile-first con flujos simplificados, una herramienta de consulta de protocolos en tiempo real y un Panel Administrativo robusto para la gestión de equipos móviles. Desarrollé flujogramas de procesos que garantizaron que, desde el clic inicial hasta la atención del niño, no hubiera cuellos de botella de información, transformando el sistema en una herramienta de trabajo ágil para los educadores sociales.',
        
        'ponte_uxui_title': 'Diseño del Sitio (UX/UI)',
        'ponte_uxui_text': 'Construí una interfaz basada en el objetivo de no tener fricciones o curvas de aprendizaje. Utilicé una paleta de colores acogedora y tipografía legible para transmitir seguridad y seriedad. Cada elemento de UI fue validado para garantizar rapidez en la inserción de datos. El diseño aquí no es solo estético, sino esencialmente funcional para un sistema con uso intuitivo. La arquitectura fue pensada para que el usuario sienta que "hacer el bien es fácil", utilizando componentes táctiles y formularios inteligentes que reducen el tiempo de llenado.',
        
        'ponte_dev_title': 'Desarrollo',
        'ponte_dev_text': 'En este proyecto, actué intensamente en el desarrollo técnico, utilizando un stack moderno compuesto por Node.js, Webpack y SCSS para garantizar un front-end de alto rendimiento y modularizado. La estructura fue construida sobre Bootstrap para asegurar responsabilidad total, ya que la mayoría de las interacciones ocurren vía móvil en las calles. En el back-end, utilizamos Django, lo que nos permitió crear una interfaz administrativa (Admin) personalizada para la FUNCI, facilitando la gestión de datos complejos con la seguridad que exige un proyecto público.',

        // Impacto
        'ponte_impact_title': 'IMPACTOS Y APRENDIZAJES',
        
        'ponte_metric_1_title': 'Eficiencia en el Abordaje',
        'ponte_metric_1_desc': 'Aumento en la Agilidad de Denuncia. Al diseñar una interfaz mobile-first enfocada en baja fricción, redujimos el tiempo promedio de llenado del formulario de denuncia. Esto permitió que los ciudadanos realizaran el reporte en segundos, garantizando que el equipo móvil recibiera los datos en tiempo real y actuara con mayor precisión geográfica.',
        
        'ponte_metric_2_title': 'Alcance Social y Visibilidad',
        'ponte_metric_2_desc': '+680 Identificaciones Realizadas. El sistema actuó como un facilitador técnico para el registro de niños y adolescentes acompañados. La claridad visual y la facilidad de consulta de protocolos generaron una mayor confianza de la población en el canal oficial, resultando en un aumento directo en el número de acogimientos y atenciones sociales documentadas.',
        
        'ponte_metric_3_title': 'Educación y Derechos Humanos',
        'ponte_metric_3_desc': 'Democratización de la Información. Además de la herramienta de denuncia, el portal se convirtió en un hub de consulta de derechos. Registramos un alto volumen de accesos a las secciones informativas sobre el Estatuto del Niño y del Adolescente (ECA) y leyes municipales, educando a la población sobre las condiciones que configuran violación de derechos.',
        
        'ponte_metric_4_title': 'Digitalización y Trazabilidad',
        'ponte_metric_4_desc': 'Fin del Gap de Datos. La migración del proceso manual al sistema administrativo (Django Admin) que desarrollamos permitió la trazabilidad total de cada caso. Ahora, la FUNCI posee métricas reales para planificar políticas públicas basadas en lugares de mayor incidencia y tipos de ocurrencia más frecuentes.',
        
        'ponte_metric_5_title': 'La Importancia del Admin',
        'ponte_metric_5_desc': 'Diseñar el lado administrativo para los educadores sociales fue tan vital como el portal público. Crear dashboards simples para quienes están en el campo de batalla es lo que realmente hace que la operación sea sostenible.',
        
        'ponte_metric_6_title': 'Diseño como facilitador y liderazgo',
        'ponte_metric_6_desc': 'Aprendí que, en proyectos sociales, el diseño sirve para construir un puente de confianza entre el ciudadano y el gobierno, y liderar este proyecto me enseñó a gestionar expectativas de stakeholders públicos y garantizar un buen y adecuado desarrollo.',

        // Secciones Extras
        'ponte_user_title': 'El Usuario',
        'ponte_user_text_1': 'Para diseñar el Ponte de Encontro, fue necesario mirar dos realidades distintas. Por un lado, el niño y el adolescente, el beneficiario final que vive en un ciclo de invisibilidad y privación de derechos. Por otro, el ciudadano activo, representado por Alberto, que siente la incomodidad social, pero muchas veces no actúa por miedo a la burocracia.',
        'ponte_user_text_2': 'El mapeo de estas personas reveló que el éxito del proyecto dependía de eliminar la fricción exacerbada y curva de aprendizaje del sistema. Alberto necesita un gatillo de denuncia instantáneo y seguro para que el niño deje de ser invisible. El diseño fue concebido para ser el eslabón más corto y humano posible entre la voluntad de ayudar y la acción del poder público.',
        
        'ponte_structure_title': 'Estructura del  Proyecto',
        'ponte_structure_text': 'Para un proyecto de abordaje social, la arquitectura de información debe ser el camino más corto entre la percepción de una violación y la acción protectora. Diseñé una estructura ágil e intuitiva, eliminando ruidos para que el ciudadano pueda actuar en el momento exacto de la necesidad.',
        
        'ponte_wireframe_low_title': 'WIREFRAMES INICIALES',
        'ponte_wireframe_low_text': 'En la etapa de wireframes de fidelidad media, mi enfoque como Líder del Proyecto fue la eliminación de barreras cognitivas. Diseñar para el servicio social exige que el ciudadano no necesite gastar energía pensando "cómo usar", sino enfocarse en la acción de ayudar. Estructuré la jerarquía de información priorizando el flujo de denuncia y consulta, validando la disposición de los elementos antes de la aplicación de la identidad visual. El enfoque técnico estuvo en:',
        'ponte_wireframe_low_list': ' Formularios Simplificados: Agrupación lógica de campos para reducir el tiempo de llenado. Navegación Mobile-First: Garantía de que todos los componentes fueran táctiles y funcionales para el uso en tránsito, ambiente donde ocurren la mayoría de los abordajes y denuncias.',

        'ponte_ui_title': 'Diseño de Interfaz  de Usuario',
        'ponte_ui_text_1': 'El desafío visual de Ponte de Encontro fue equilibrar la seriedad de un servicio público con la sensibilidad exigida por los derechos humanos. Diseñé una Guía de Estilo enfocada en alta visibilidad y acogida, garantizando que la interfaz fuera, al mismo tiempo, una alerta para la sociedad y un puerto seguro para quienes buscan ayuda.',
        'ponte_ui_list': ' Colores Estratégicos: La paleta utiliza el Naranja (#DF9A14) y el Amarillo (#FFCC00) para evocar atención y energía, garantizando que el portal se destaque como una herramienta de utilidad pública. El Azul (#2B5FC5) se insertó para traer el contrapunto de confianza y credibilidad institucional.  Tipografía Dinámica:  Combiné la fuente Righteous en los títulos, por su personalidad moderna y llamativa, con Roboto en los textos de lectura, garantizando accesibilidad y fluidez en la absorción de información densa sobre leyes y protocolos.  Iconografía Humanizada:  Desarrollé un conjunto de íconos ilustrados que facilitan la identificación rápida de las causas (trabajo infantil, explotación, etc). Esta elección reduce el impacto psicológico del tema, haciendo la navegación más amigable e intuitiva para el ciudadano.',

        'ponte_wireframe_hi_title': 'Wireframe de Alta  Fidelidad',
        'ponte_wireframe_hi_text': 'La etapa de alta fidelidad tradujo el compromiso social de Ponte de Encontro en una interfaz de alto impacto y baja fricción. Utilicé el Design System para garantizar que la navegación fuera acogedora, pero extremadamente funcional. El foco principal fue la jerarquía visual: el botón de denuncia y la información sobre derechos infantiles ganaron destaque inmediato, guiando al ciudadano de forma lineal. Implementamos herramientas de accesibilidad nativas y una arquitectura de información que organiza desde la concienciación hasta el monitoreo administrativo vía Django.',
        'ponte_label_desktop_web': 'Wireframes - escritorio (Sitio web)',
        'ponte_label_desktop_admin': 'Wireframes - escritorio (Admin)',

        'ponte_mobile_title': 'Wireframe de Alta  Fidelidad: Móvil',
        'ponte_mobile_text_1': 'Como la mayoría de las interacciones de denuncia ocurren en tránsito, la versión móvil fue el corazón del proyecto. Me enfoqué en un diseño altamente táctil y responsivo, optimizando formularios densos para llenado rápido. El objetivo técnico fue reducir el tiempo de interacción para que el relato de violación de derechos ocurra en el momento exacto de la observación. El resultado es una herramienta ligera, de alto rendimiento e inclusiva, garantizando que la tecnología actúe como un facilitador inmediato de protección social en la palma de la mano.',
        'ponte_mobile_text_2': 'Adaptamos la densidad de información para evitar sobrecarga en pantallas más pequeñas, garantizando que el flujo de inscripción y los contenidos de educación permanezcan fluidos y accesibles en cualquier dispositivo. El resultado es una interfaz moderna, ligera y técnicamente escalable, lista para proporcionar un handoff sin fricciones para el desarrollo.'

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