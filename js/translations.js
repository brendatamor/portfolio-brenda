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
        'ponte_mobile_text_2': 'Adaptamos a densidade de informações para evitar sobrecarga em telas menores, garantindo que o fluxo de inscrição e os conteúdos de educação permaneçam fluidos e acessíveis em qualquer dispositivo. O resultado é uma interface moderna, leve e tecnicamente escalável, pronta para proporcionar um handoff sem atritos para o desenvolvimento.',


        // --- PROJETO: PII CKAN ---
        'pii_hero_title': 'Sobre o  Projeto',
        'pii_intro': 'O PII CKAN é uma solução de governança e privacidade de dados desenvolvida em parceria com a Citinova para o ecossistema de Dados Abertos de Fortaleza. A ferramenta atua como um scanner inteligente que automatiza a detecção de informações pessoalmente identificáveis (PII) em datasets massivos. O projeto foi vencedor do 1º lugar no Prêmio Fortaleza no Controle (categoria Transparência), sendo reconhecido por sua eficácia em garantir que a transparência pública caminhe lado a lado com a proteção à privacidade dos cidadãos.',
        
        // Detalhes
        'pii_client_value': 'CITINOVA, Maurício Bezerra (Autor do projeto)  Fortaleza, CE - BRA',
        'pii_services_list': 'Engenharia de RequisitosUX/UI DesignFront-end DevelopmentQA & Testes de Segurança',
        'pii_role_value': 'Product Designer & Front-end Developer',

        // Narrativa
        'pii_challenge_title': 'O desafio',
        'pii_challenge_text': 'Com a implementação da LGPD, servidores públicos enfrentaram um dilema crítico: como manter portais de dados brutos sem expor indevidamente CPFs, telefones e endereços? O desafio era técnico e operacional, pois a revisão manual de milhões de registros era humanamente impossível. Minha missão foi ajudar a conceber uma ferramenta que auditasse arquivos em diversos formatos (CSV, PDF, XLSX) e entregasse um diagnóstico preciso para mitigar riscos jurídicos e éticos antes da publicação.',
        
        'pii_deliverables_title': 'Principais entregáveis',
        'pii_deliverables_text': 'Foi entregue uma solução técnica robusta composta por: Modelagem de Processos para varredura de arquivos, Engine de busca baseada em Expressões Regulares (Regex), Interface de Relatório Diagnóstico (Reporting UI) e documentação técnica completa para o ecossistema Open Source. A ferramenta permite que o administrador identifique instantaneamente em qual arquivo e linha os dados sensíveis estão localizados, acelerando o ciclo de auditoria em mais de 100%. Além disso, UX/UI bem definidos de acordo com o usuário final, design system bem elaborado, reduzindo fricções e curvas de aprendizado.',
        
        'pii_uxui_title': 'Design de sites (UX/UI)',
        'pii_uxui_text': 'O design de interface do PII CKAN foi focado em visualização de dados e clareza técnica. Projetar relatórios para ferramentas de linha de comando (CLI) exige uma hierarquia rigorosa para que o usuário não se sinta sobrecarregado. Utilizei uma estética limpa e funcional, focada em sinalizar estados de alerta e segurança. A arquitetura de informação foi desenhada para facilitar a triagem de incidentes, garantindo que mesmo usuários com perfil administrativo pudessem interpretar os resultados técnicos da varredura, independente do seu grau de senioridade com dados e relacionados.',
        
        'pii_dev_title': 'Desenvolvimento',
        'pii_dev_text': 'Fui responsável pelo desenvolvimento do front-end da primeira versão da aplicação, focando na fidelidade visual e performance de leitura. Transformei os dados brutos processados pelo motor em Python em uma interface de relatório amigável. Atuei diretamente no levantamento de requisitos técnicos junto aos especialistas de dados, garantindo que o front-end consumisse corretamente as informações do sistema e oferecesse uma experiência de diagnóstico resiliente e escalável para o ambiente CKAN.',

        // Impacto
        'pii_impact_title': 'IMPACTO & APRENDIZADOS',
        
        'pii_metric_1_title': 'Segurança e Privacidade  (LGPD)',
        'pii_metric_1_desc': 'Risco de Exposição Mitigado. A ferramenta garantiu uma camada de proteção proativa, impedindo que dados sensíveis (PII) fossem publicados inadvertidamente. O impacto direto foi a blindagem jurídica e ética do município, assegurando que a transparência pública não comprometa o direito à privacidade dos cidadãos conforme a LGPD.',
        
        'pii_metric_2_title': 'Eficiência de Auditoria',
        'pii_metric_2_desc': 'Otimização do Ciclo de Publicação. Antes do PII CKAN, a revisão de datasets massivos era um processo manual e passível de falhas humanas. A automação permitiu que volumes massivos de dados fossem escaneados em minutos, devolvendo tempo valioso aos servidores e acelerando a atualização do portal Dados Abertos.',
        
        'pii_metric_3_title': 'Qualidade dos Dados Abertos',
        'pii_metric_3_desc': 'Padronização de Transparência. O uso da ferramenta elevou o nível de maturidade dos dados enviados pelas secretarias. Ao fornecer um relatório claro de erros, o sistema educou os servidores sobre as melhores práticas de tratamento de dados, resultando em um portal de Dados Abertos muito mais íntegro e confiável para a população.',
        
        'pii_metric_4_title': 'Reconhecimento Técnico  (O Prêmio)',
        'pii_metric_4_desc': 'Selo de Excelência em Inovação. A conquista do 1º lugar no Prêmio Fortaleza no Controle serve como a métrica máxima de validação. O projeto foi auditado e premiado por uma comissão de especialistas da USP e UFC, comprovando sua eficácia técnica e seu valor inestimável para a administração pública.',
        
        'pii_metric_5_title': 'A ponte entre Código e LGPD.',
        'pii_metric_5_desc': 'Reduzir a fricção para os colaboradores. Este projeto me permitiu entender como traduzir leis complexas (como a LGPD) em lógica de programação (Regex e Python). Foi meu maior exercício de transpor requisitos jurídicos para uma interface técnica simplificada.',
        
        'pii_metric_6_title': 'Colaboração em Projetos Open Source.',
        'pii_metric_6_desc': 'Boa documentação é essencial. Participar de um projeto de código aberto para o governo me ensinou sobre a importância de criar interfaces escaláveis e documentações claras, permitindo que outros órgãos repliquem a solução com facilidade.',

        // Seções Extras
        'pii_user_title': 'O usuário',
        'pii_user_text': 'O design do PII CKAN nasceu do diagnóstico de um "gargalo" invisível: a revisão de dados pessoais em arquivos brutos (CSV, PDF, XLSX). Apresentamos o Ricardo, um gestor de dados pragmático que vê sua produtividade limitada por processos lentos e burocráticos. O mapeamento de sua jornada revelou a necessidade crítica de um "filtro de segurança" proativo. O foco do projeto foi transformar o medo do erro humano em uma experiência de auditoria rápida, intuitiva e tecnicamente robusta, devolvendo tempo e segurança institucional ao usuário.',
        
        'pii_structure_title': 'Estrutura do  projeto',
        'pii_structure_text': 'Para transformar uma ferramenta de script (Python) em uma plataforma intuitiva, projetei uma estrutura baseada na visibilidade de processos e auditoria. O objetivo foi garantir que o gestor de dados tenha controle total sobre as varreduras de segurança, desde a configuração dos parâmetros até o veredito final do relatório.',
        
        'pii_wireframe_low_title': 'WIREFRAMES',
        'pii_wireframe_low_text': 'Para o PII CKAN, utilizei wireframes de média fidelidade para validar a hierarquia de navegação antes da implementação. O foco foi criar um workflow de auditoria de ponta a ponta. Projetei fluxos onde o usuário pudesse configurar uma varredura massiva em poucos cliques, selecionando padrões específicos da LGPD (como CPF e endereços). A inclusão de um Histórico de Relatórios (Tasks) permite que o gestor tenha uma visão retrospectiva da conformidade de dados, transformando uma tarefa técnica exaustiva em um processo de gestão ágil, seguro e escalável.',

        'pii_ui_title': 'Design de interface  do usuário',
        'pii_ui_text': 'O desafio visual do PII CKAN foi transformar um processo de auditoria técnica em uma experiência intuitiva e segura. Para isso, desenvolvi um Design System focado em semântica visual, onde cada cor desempenha um papel crítico na tomada de decisão do gestor.',
        'pii_ui_list': ' Paleta de Cores Funcional:  Utilizei o Teal (#0C87B3) como cor primária para transmitir tecnologia e estabilidade. O uso do Vermelho (#FF0000) e do Verde (#057E03) é estritamente funcional, sinalizando instantaneamente arquivos com vazamento de dados (Alerta) ou conjuntos de dados em conformidade (Seguro).  Tipografia Sistêmica (Inter):  A escolha da família Inter foi estratégica. Por ser uma fonte desenhada especificamente para interfaces de computador, ela garante uma legibilidade excepcional em tabelas densas, logs técnicos e relatórios complexos, reduzindo a fadiga visual do usuário.  Componentização Modular:  Desenvolvi botões e cards com estados claros (Solid e Outline), permitindo um handoff ágil e escalável. Essa estrutura modular garante que o sistema possa crescer com novas funcionalidades sem perder a consistência visual ou técnica.',

        'pii_wireframe_hi_title': 'Wireframe de alta  fidelidade',
        'pii_wireframe_hi_text_1': 'A etapa de alta fidelidade do PII CKAN foi desenhada para oferecer máxima transparência sobre processos de backend. Como varreduras de dados massivos podem levar tempo, o foco da interface foi manter o usuário informado através de loops de feedback contínuos: barras de progresso dinâmicas, contadores de evidências em tempo real e sinalização clara de estados (Buscando, Finalizado ou Erro).',
        'pii_wireframe_hi_text_2': 'Projetei a experiência para ser "error-proof" (à prova de erros). Um exemplo crítico é o modal de cancelamento de busca, que evita ações acidentais em processos custosos computacionalmente. Transformamos parâmetros técnicos de configuração (como URLs de portal e diretórios de arquivos) em formulários intuitivos com validação imediata, garantindo que o gestor de dados tenha o controle total da ferramenta sem necessidade de conhecimento em programação.'
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
        'ponte_mobile_text_2': 'We adapted information density to avoid overload on smaller screens, ensuring the enrollment flow and education contents remain fluid and accessible on any device. The result is a modern, lightweight, and technically scalable interface, ready to provide a frictionless handoff for development.',


        // --- PROJECT: PII CKAN ---
        'pii_hero_title': 'About the  Project',
        'pii_intro': 'The PII CKAN is a data governance and privacy solution developed in partnership with Citinova for the Fortaleza Open Data ecosystem. The tool acts as an intelligent scanner automating the detection of Personally Identifiable Information (PII) in massive datasets. The project was the 1st place winner of the Fortaleza on Control Award (Transparency category), recognized for its effectiveness in ensuring public transparency walks hand in hand with citizen privacy protection.',
        
        // Details
        'pii_client_value': 'CITINOVA, Maurício Bezerra (Project Author)  Fortaleza, CE - BRA',
        'pii_services_list': 'Requirements EngineeringUX/UI DesignFront-end DevelopmentQA & Security Testing',
        'pii_role_value': 'Product Designer & Front-end Developer',

        // Narrative
        'pii_challenge_title': 'The Challenge',
        'pii_challenge_text': 'With LGPD (GDPR) implementation, public servants faced a critical dilemma: how to maintain raw data portals without improperly exposing Social Security numbers, phones, and addresses? The challenge was technical and operational, as manually reviewing millions of records was humanly impossible. My mission was to help conceive a tool that audited files in various formats (CSV, PDF, XLSX) and delivered a precise diagnostic to mitigate legal and ethical risks before publication.',
        
        'pii_deliverables_title': 'Key Deliverables',
        'pii_deliverables_text': 'A robust technical solution was delivered comprising: Process Modeling for file scanning, Search Engine based on Regular Expressions (Regex), Diagnostic Reporting Interface (Reporting UI), and complete technical documentation for the Open Source ecosystem. The tool allows administrators to instantly identify in which file and line sensitive data are located, accelerating the audit cycle by over 100%. Furthermore, well-defined UX/UI tailored to the end-user and a polished design system reduced friction and learning curves.',
        
        'pii_uxui_title': 'Site Design (UX/UI)',
        'pii_uxui_text': 'PII CKAN\'s interface design focused on data visualization and technical clarity. Designing reports for Command Line Interface (CLI) tools requires rigorous hierarchy so the user doesn\'t feel overwhelmed. I used a clean and functional aesthetic, focused on signaling alert and safety states. Information architecture was designed to facilitate incident triage, ensuring even administrative users could interpret technical scan results, regardless of their data seniority.',
        
        'pii_dev_title': 'Development',
        'pii_dev_text': 'I was responsible for the front-end development of the application\'s first version, focusing on visual fidelity and reading performance. I transformed raw data processed by the Python engine into a user-friendly report interface. I worked directly on technical requirement gathering with data specialists, ensuring the front-end correctly consumed system information and offered a resilient and scalable diagnostic experience for the CKAN environment.',

        // Impact
        'pii_impact_title': 'IMPACT & LEARNINGS',
        
        'pii_metric_1_title': 'Security & Privacy  (LGPD)',
        'pii_metric_1_desc': 'Mitigated Exposure Risk. The tool ensured a proactive protection layer, preventing sensitive data (PII) from being inadvertently published. The direct impact was the municipality\'s legal and ethical shielding, ensuring public transparency does not compromise citizens\' right to privacy under LGPD.',
        
        'pii_metric_2_title': 'Audit Efficiency',
        'pii_metric_2_desc': 'Publication Cycle Optimization. Before PII CKAN, reviewing massive datasets was a manual process prone to human error. Automation allowed massive data volumes to be scanned in minutes, returning valuable time to public servants and accelerating Open Data portal updates.',
        
        'pii_metric_3_title': 'Open Data Quality',
        'pii_metric_3_desc': 'Transparency Standardization. Using the tool raised the maturity level of data submitted by departments. By providing a clear error report, the system educated servants on best data treatment practices, resulting in a much more integral and reliable Open Data portal for the population.',
        
        'pii_metric_4_title': 'Technical Recognition  (The Award)',
        'pii_metric_4_desc': 'Innovation Excellence Seal. Winning 1st place in the Fortaleza on Control Award serves as the ultimate validation metric. The project was audited and awarded by a commission of specialists from USP and UFC, proving its technical effectiveness and invaluable worth to public administration.',
        
        'pii_metric_5_title': 'The Bridge between Code & LGPD.',
        'pii_metric_5_desc': 'Reducing friction for collaborators. This project allowed me to understand how to translate complex laws (like LGPD) into programming logic (Regex and Python). It was my greatest exercise in transposing legal requirements into a simplified technical interface.',
        
        'pii_metric_6_title': 'Open Source Collaboration.',
        'pii_metric_6_desc': 'Good documentation is essential. Participating in an open-source project for the government taught me the importance of creating scalable interfaces and clear documentation, allowing other agencies to replicate the solution easily.',

        // Extra Sections
        'pii_user_title': 'The User',
        'pii_user_text': 'PII CKAN\'s design was born from diagnosing an invisible "bottleneck": reviewing personal data in raw files (CSV, PDF, XLSX). We introduce Ricardo, a pragmatic data manager whose productivity is limited by slow and bureaucratic processes. Mapping his journey revealed the critical need for a proactive "security filter". The project focus was to transform the fear of human error into a fast, intuitive, and technically robust audit experience, returning time and institutional security to the user.',
        
        'pii_structure_title': 'Project  Structure',
        'pii_structure_text': 'To transform a script tool (Python) into an intuitive platform, I designed a structure based on process visibility and auditability. The goal was to ensure the data manager has full control over security scans, from parameter configuration to the final report verdict.',
        
        'pii_wireframe_low_title': 'WIREFRAMES',
        'pii_wireframe_low_text': 'For PII CKAN, I used mid-fidelity wireframes to validate navigation hierarchy before implementation. The focus was creating an end-to-end audit workflow. I designed flows where the user could configure a massive scan in a few clicks, selecting specific LGPD patterns (like SSN/CPF and addresses). Including a Report History (Tasks) allows the manager a retrospective view of data compliance, transforming an exhausting technical task into an agile, safe, and scalable management process.',

        'pii_ui_title': 'User Interface  Design',
        'pii_ui_text': 'PII CKAN\'s visual challenge was transforming a technical audit process into an intuitive and safe experience. For this, I developed a Design System focused on visual semantics, where each color plays a critical role in manager decision-making.',
        'pii_ui_list': ' Functional Color Palette:  I used Teal (#0C87B3) as the primary color to convey technology and stability. The use of Red (#FF0000) and Green (#057E03) is strictly functional, instantly signaling files with data leakage (Alert) or compliant datasets (Safe).  Systemic Typography (Inter):  Choosing the Inter family was strategic. Being a font designed specifically for computer interfaces, it ensures exceptional readability in dense tables, technical logs, and complex reports, reducing user visual fatigue.  Modular Componentization:  I developed buttons and cards with clear states (Solid and Outline), allowing for an agile and scalable handoff. This modular structure ensures the system can grow with new features without losing visual or technical consistency.',

        'pii_wireframe_hi_title': 'High Fidelity  Wireframe',
        'pii_wireframe_hi_text_1': 'PII CKAN\'s high-fidelity stage was designed to offer maximum transparency regarding backend processes. Since massive data scans can take time, the interface focus was keeping the user informed through continuous feedback loops: dynamic progress bars, real-time evidence counters, and clear state signaling (Searching, Finished, or Error).',
        'pii_wireframe_hi_text_2': 'I designed the experience to be "error-proof". A critical example is the scan cancellation modal, which prevents accidental actions in computationally expensive processes. We transformed technical configuration parameters (like portal URLs and file directories) into intuitive forms with immediate validation, ensuring the data manager has full tool control without needing programming knowledge.'
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
        'ponte_mobile_text_2': 'Adaptamos la densidad de información para evitar sobrecarga en pantallas más pequeñas, garantizando que el flujo de inscripción y los contenidos de educación permanezcan fluidos y accesibles en cualquier dispositivo. El resultado es una interfaz moderna, ligera y técnicamente escalable, lista para proporcionar un handoff sin fricciones para el desarrollo.',


        // --- PROYECTO: PII CKAN ---
        'pii_hero_title': 'Sobre el  Proyecto',
        'pii_intro': 'El PII CKAN es una solución de gobernanza y privacidad de datos desarrollada en colaboración con Citinova para el ecosistema de Datos Abiertos de Fortaleza. La herramienta actúa como un escáner inteligente que automatiza la detección de información personalmente identificable (PII) en conjuntos de datos masivos. El proyecto fue ganador del 1er lugar en el Premio Fortaleza en el Control (categoría Transparencia), reconocido por su eficacia en garantizar que la transparencia pública camine junto a la protección de la privacidad de los ciudadanos.',
        
        // Detalles
        'pii_client_value': 'CITINOVA, Maurício Bezerra (Autor del proyecto)  Fortaleza, CE - BRA',
        'pii_services_list': 'Ingeniería de RequisitosDiseño UX/UIDesarrollo Front-endQA & Pruebas de Seguridad',
        'pii_role_value': 'Diseñadora de Producto & Desarrolladora Front-end',

        // Narrativa
        'pii_challenge_title': 'El Desafío',
        'pii_challenge_text': 'Con la implementación de la LGPD (RGPD), los funcionarios públicos enfrentaron un dilema crítico: ¿cómo mantener portales de datos brutos sin exponer indebidamente números de identificación, teléfonos y direcciones? El desafío era técnico y operativo, ya que la revisión manual de millones de registros era humanamente imposible. Mi misión fue ayudar a concebir una herramienta que auditara archivos en diversos formatos (CSV, PDF, XLSX) y entregara un diagnóstico preciso para mitigar riesgos legales y éticos antes de la publicación.',
        
        'pii_deliverables_title': 'Principales Entregables',
        'pii_deliverables_text': 'Se entregó una solución técnica robusta compuesta por: Modelado de Procesos para escaneo de archivos, Motor de búsqueda basado en Expresiones Regulares (Regex), Interfaz de Informe de Diagnóstico (Reporting UI) y documentación técnica completa para el ecosistema Open Source. La herramienta permite que el administrador identifique instantáneamente en qué archivo y línea se encuentran los datos sensibles, acelerando el ciclo de auditoría en más del 100%. Además, UX/UI bien definidos según el usuario final y un sistema de diseño pulido redujeron la fricción y las curvas de aprendizaje.',
        
        'pii_uxui_title': 'Diseño del Sitio (UX/UI)',
        'pii_uxui_text': 'El diseño de interfaz de PII CKAN se centró en la visualización de datos y claridad técnica. Diseñar informes para herramientas de línea de comandos (CLI) exige una jerarquía rigurosa para que el usuario no se sienta abrumado. Utilicé una estética limpia y funcional, enfocada en señalar estados de alerta y seguridad. La arquitectura de información fue diseñada para facilitar la clasificación de incidentes, garantizando que incluso usuarios con perfil administrativo pudieran interpretar los resultados técnicos del escaneo, independientemente de su antigüedad en datos.',
        
        'pii_dev_title': 'Desarrollo',
        'pii_dev_text': 'Fui responsable del desarrollo front-end de la primera versión de la aplicación, enfocándome en la fidelidad visual y rendimiento de lectura. Transformé los datos brutos procesados por el motor en Python en una interfaz de informe amigable. Trabajé directamente en el levantamiento de requisitos técnicos junto a especialistas de datos, garantizando que el front-end consumiera correctamente la información del sistema y ofreciera una experiencia de diagnóstico resiliente y escalable para el entorno CKAN.',

        // Impacto
        'pii_impact_title': 'IMPACTO Y APRENDIZAJES',
        
        'pii_metric_1_title': 'Seguridad y Privacidad  (LGPD)',
        'pii_metric_1_desc': 'Riesgo de Exposición Mitigado. La herramienta garantizó una capa de protección proactiva, impidiendo que datos sensibles (PII) fueran publicados inadvertidamente. El impacto directo fue el blindaje jurídico y ético del municipio, asegurando que la transparencia pública no comprometa el derecho a la privacidad de los ciudadanos según la LGPD.',
        
        'pii_metric_2_title': 'Eficiencia de Auditoría',
        'pii_metric_2_desc': 'Optimización del Ciclo de Publicación. Antes de PII CKAN, la revisión de conjuntos de datos masivos era un proceso manual propenso a errores humanos. La automatización permitió escanear volúmenes masivos de datos en minutos, devolviendo tiempo valioso a los funcionarios y acelerando la actualización del portal de Datos Abiertos.',
        
        'pii_metric_3_title': 'Calidad de Datos Abiertos',
        'pii_metric_3_desc': 'Estandarización de Transparencia. El uso de la herramienta elevó el nivel de madurez de los datos enviados por las secretarías. Al proporcionar un informe claro de errores, el sistema educó a los funcionarios sobre las mejores prácticas de tratamiento de datos, resultando en un portal de Datos Abiertos mucho más íntegro y confiable para la población.',
        
        'pii_metric_4_title': 'Reconocimiento Técnico  (El Premio)',
        'pii_metric_4_desc': 'Sello de Excelencia en Innovación. Ganar el 1er lugar en el Premio Fortaleza en el Control sirve como la métrica máxima de validación. El proyecto fue auditado y premiado por una comisión de especialistas de la USP y UFC, demostrando su eficacia técnica y su valor inestimable para la administración pública.',
        
        'pii_metric_5_title': 'El Puente entre Código y LGPD.',
        'pii_metric_5_desc': 'Reducir la fricción para los colaboradores. Este proyecto me permitió entender cómo traducir leyes complejas (como la LGPD) en lógica de programación (Regex y Python). Fue mi mayor ejercicio de transponer requisitos jurídicos a una interfaz técnica simplificada.',
        
        'pii_metric_6_title': 'Colaboración en Open Source.',
        'pii_metric_6_desc': 'La buena documentación es esencial. Participar en un proyecto de código abierto para el gobierno me enseñó la importancia de crear interfaces escalables y documentación clara, permitiendo que otros organismos repliquen la solución fácilmente.',

        // Secciones Extras
        'pii_user_title': 'El Usuario',
        'pii_user_text': 'El diseño de PII CKAN nació del diagnóstico de un "cuello de botella" invisible: la revisión de datos personales en archivos brutos (CSV, PDF, XLSX). Presentamos a Ricardo, un gestor de datos pragmático cuya productividad está limitada por procesos lentos y burocráticos. El mapeo de su viaje reveló la necesidad crítica de un "filtro de seguridad" proactivo. El enfoque del proyecto fue transformar el miedo al error humano en una experiencia de auditoría rápida, intuitiva y técnicamente robusta, devolviendo tiempo y seguridad institucional al usuario.',
        
        'pii_structure_title': 'Estructura del  Proyecto',
        'pii_structure_text': 'Para transformar una herramienta de script (Python) en una plataforma intuitiva, diseñé una estructura basada en la visibilidad de procesos y auditabilidad. El objetivo fue garantizar que el gestor de datos tenga control total sobre los escaneos de seguridad, desde la configuración de parámetros hasta el veredicto final del informe.',
        
        'pii_wireframe_low_title': 'WIREFRAMES',
        'pii_wireframe_low_text': 'Para PII CKAN, utilicé wireframes de fidelidad media para validar la jerarquía de navegación antes de la implementación. El enfoque fue crear un flujo de trabajo de auditoría de extremo a extremo. Diseñé flujos donde el usuario pudiera configurar un escaneo masivo en pocos clics, seleccionando patrones específicos de LGPD (como DNI y direcciones). La inclusión de un Historial de Informes (Tasks) permite al gestor una visión retrospectiva del cumplimiento de datos, transformando una tarea técnica exhaustiva en un proceso de gestión ágil, seguro y escalable.',

        'pii_ui_title': 'Diseño de Interfaz  de Usuario',
        'pii_ui_text': 'El desafío visual de PII CKAN fue transformar un proceso de auditoría técnica en una experiencia intuitiva y segura. Para ello, desarrollé un Sistema de Diseño enfocado en semántica visual, donde cada color juega un papel crítico en la toma de decisiones del gestor.',
        'pii_ui_list': ' Paleta de Colores Funcional:  Utilicé el Verde Azulado (#0C87B3) como color primario para transmitir tecnología y estabilidad. El uso del Rojo (#FF0000) y del Verde (#057E03) es estrictamente funcional, señalando instantáneamente archivos con fuga de datos (Alerta) o conjuntos de datos en cumplimiento (Seguro).  Tipografía Sistémica (Inter):  La elección de la familia Inter fue estratégica. Al ser una fuente diseñada específicamente para interfaces de computadora, garantiza una legibilidad excepcional en tablas densas, registros técnicos e informes complejos, reduciendo la fatiga visual del usuario.  Componentización Modular:  Desarrollé botones y tarjetas con estados claros (Sólido y Contorno), permitiendo un handoff ágil y escalable. Esta estructura modular garantiza que el sistema pueda crecer con nuevas funcionalidades sin perder consistencia visual o técnica.',

        'pii_wireframe_hi_title': 'Wireframe de Alta  Fidelidad',
        'pii_wireframe_hi_text_1': 'La etapa de alta fidelidad de PII CKAN fue diseñada para ofrecer máxima transparencia sobre los procesos de backend. Dado que los escaneos de datos masivos pueden tomar tiempo, el enfoque de la interfaz fue mantener al usuario informado a través de bucles de retroalimentación continuos: barras de progreso dinámicas, contadores de evidencia en tiempo real y señalización clara de estados (Buscando, Finalizado o Error).',
        'pii_wireframe_hi_text_2': 'Diseñé la experiencia para ser "a prueba de errores". Un ejemplo crítico es el modal de cancelación de escaneo, que evita acciones accidentales en procesos computacionalmente costosos. Transformamos parámetros técnicos de configuración (como URLs de portal y directorios de archivos) en formularios intuitivos con validación inmediata, garantizando que el gestor de datos tenga el control total de la herramienta sin necesidad de conocimientos de programación.'

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