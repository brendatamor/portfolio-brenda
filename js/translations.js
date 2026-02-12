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
        'reciclo_hero_title': 'Sobre o <br> Projeto',
        'reciclo_intro': 'O <span class="text-success">Re-ciclo</span> é uma plataforma inovadora de economia circular desenvolvida pela Prefeitura de Fortaleza. O projeto atua na logística de coleta seletiva porta-a-porta, utilizando micromobilidade sustentável (triciclos elétricos) para conectar cidadãos e empresas às associações de catadores. Atuei como UX/UI Designer, fazendo parte do time que foi responsável por traduzir um modelo de serviço público complexo em uma interface simplificada, focada em promover a inclusão socioeconômica dos catadores e elevar o índice de reciclagem da capital cearense.',
        
        // Detalhes Laterais
        'project_label_client': 'Cliente',
        'project_label_services': 'Serviços',
        'project_label_role': 'Meu papel',
        'reciclo_services_list': '<li>Product Discovery</li><li>Interface Design (UI)</li><li>UX Research</li><li>Prototipagem Interativa</li>',
        
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
        'reciclo_impact_title': 'IMPACTO & <br>APRENDIZADOS',
        
        'reciclo_metric_1_title': 'Dignidade e Renda',
        'reciclo_metric_1_desc': '<strong>Inclusão da Base da Pirâmide.</strong> Ao formalizar e facilitar a coleta via triciclos elétricos, o projeto removeu o estigma social e o esforço físico exaustivo, garantindo uma fonte de renda estável e o reconhecimento desses profissionais como agentes ambientais essenciais para Fortaleza.',
        
        'reciclo_metric_2_title': 'Gamificação como Mudança de Hábito',
        'reciclo_metric_2_desc': 'Aprendi que a tecnologia sozinha não recicla nada; o design precisa motivar. Usar elementos de gamificação (como o conceito "Reciclou, Ganhou") foi fundamental para transformar uma tarefa chata em um hábito prazeroso e recompensador para o cidadão.',
        
        'reciclo_metric_3_title': 'Eficiência e Incentivos',
        'reciclo_metric_3_desc': '<strong>Viabilidade da Economia Circular.</strong> Estrategicamente alinhado à Lei de Incentivo à Reciclagem (14.260/21), o projeto contribuiu para um ecossistema capaz de captar investimentos massivos (com projeções de R$ 140M), provando que o design sustentável é altamente rentável.',
        
        'reciclo_metric_4_title': 'Design para Contextos Extremos',
        'reciclo_metric_4_desc': 'Projetar para o catador me ensinou sobre usabilidade em condições adversas. A interface precisa ser legível e tátil o suficiente para ser usada rapidamente durante as rotas. Simplicidade aqui não é estética, é ferramenta de trabalho.',
        
        'reciclo_metric_5_title': 'Conformidade e Escala',
        'reciclo_metric_5_desc': '<strong>Redução de Resíduos em Aterros.</strong> Através de uma interface focada em agendamento rápido, potencializamos a aplicação da Política Nacional de Resíduos Sólidos (PNRS). A facilidade de separação e coleta porta-a-porta aumentou o índice de reciclagem municipal, preservando recursos naturais e transformando o que seria "lixo" em novos insumos industriais de forma escalável.',
        
        'reciclo_metric_6_title': 'Intermediação Público-Privada',
        'reciclo_metric_6_desc': 'Este projeto me ensinou a projetar fluxos que atendem simultaneamente às exigências burocráticas do governo (Pessoa Jurídica/Lei) e à necessidade de conveniência do usuário comum (Pessoa Física), unificando interesses distintos em uma única jornada fluida.',

        // Seções Extras
        'reciclo_user_title': 'O usuário',
        'reciclo_user_text': 'O sucesso do Re-ciclo depende da harmonia entre três atores fundamentais. Para projetar uma solução que realmente transformasse a gestão de resíduos em Fortaleza, mergulhamos no dia a dia do Afonso (a força operacional que busca dignidade), do Marcelo (o cidadão que busca conveniência) e da Júlia (o negócio que busca eficiência logística). O desafio do design foi criar uma interface que eliminasse a fricção entre esses perfis, garantindo que a tecnologia atuasse como o elo invisível que transforma descarte em valor social e ambiental.',
        
        'reciclo_structure_title': 'Estrutura do <br> projeto',
        'reciclo_structure_text': 'O sitemap do Re-ciclo foi projetado para simplificar a jornada do descarte sustentável. Estruturamos a navegação em módulos que primeiro educam o usuário ("Conheça") para depois facilitar a ação direta ("Participe"). A segmentação entre Pessoa Física e Jurídica no fluxo de acesso é fundamental para garantir que as funcionalidades operacionais sejam personalizadas para cada perfil, otimizando a logística de coleta e a experiência de gestão de resíduos.',
        
        'reciclo_ui_title': 'Design de interface <br> do usuário',
        'reciclo_ui_text': 'O veredito visual do Re-ciclo é a modernização da sustentabilidade. Através de uma tipografia amigável e uma paleta cromática diversificada, criamos uma interface que comunica energia e responsabilidade social. O foco esteve na criação de uma linguagem visual proprietária, onde a iconografia detalhada e os componentes arredondados convidam o usuário à ação, fortalecendo a cultura da economia circular através de um design centrado no ser humano e na eficiência operacional.',
        
        'reciclo_wireframe_title': 'Wireframe de alta <br> fidelidade',
        'reciclo_wireframe_text': 'A etapa de alta fidelidade para desktop foi projetada para ser o centro de controle da reciclagem em Fortaleza. O foco principal foi a consolidação de dados e transparência: criamos dashboards que exibem métricas reais de impacto social e ambiental (tonelagens coletadas e renda gerada).',
        
        'reciclo_mobile_title': 'Wireframe de alta <br> fidelidade: mobile',
        'reciclo_mobile_text': 'O design mobile do Re-ciclo foi concebido sob a premissa da baixa fricção e usabilidade tátil. Para o cidadão comum, o fluxo de agendamento foi otimizado para ser concluído em poucos toques, eliminando barreiras cognitivas.',

        // --- PROJETO: PONTE DE ENCONTRO ---
        'ponte_hero_title': 'Sobre o <br> Projeto',
        'ponte_intro': 'O <span class="text-primary">Ponte de Encontro</span> é uma plataforma vital desenvolvida para a FUNCI (Fundação da Criança e da Família Cidadã) em parceria com a Citinova. O projeto centraliza o serviço especializado de abordagem social em Fortaleza, facilitando a identificação e o acolhimento de crianças e adolescentes em situação de vulnerabilidade. Como minha primeira experiência liderando um projeto, coordenei todo o ciclo de desenvolvimento, desde a escuta ativa das necessidades da FUNCI até a entrega técnica de um sistema que atua como ponte direta entre o cidadão e a rede socioassistencial.',
        
        // Detalhes
        'ponte_client_value': 'FUNCI <br> Fortaleza, CE - BRA',
        'ponte_services_list': '<li>Liderança de Projeto</li><li>UX/UI Design</li><li>Front-end Development</li><li>Admin Experience (AX)</li>',
        'ponte_role_value': 'Project Lead & Front-end Developer',

        // Narrativa
        'ponte_challenge_title': 'O desafio',
        'ponte_challenge_text': 'O maior desafio foi a <span class="text-dark">simplificação da complexidade</span>. Projetos governamentais costumam ter requisitos densos e burocráticos. Minha missão foi traduzir essas necessidades em uma interface que estimulasse a ação do cidadão. Sabemos que a população evita plataformas complexas, especialmente para ações sociais. Por isso, o foco técnico foi remover qualquer barreira cognitiva, garantindo que o ato de denunciar ou pedir ajuda fosse rápido, intuitivo e acessível para qualquer nível de letramento digital.',
        
        'ponte_deliverables_title': 'Principais entregáveis',
        'ponte_deliverables_text': 'Entregamos um ecossistema completo focado em <span class="text-dark">agilidade e transparência</span>: um portal de denúncias mobile-first com fluxos simplificados, uma ferramenta de consulta de protocolos em tempo real e um <span class="text-dark">Painel Administrativo robusto</span> para a gestão das equipes volantes. Desenvolvi fluxogramas de processos que garantiram que, do clique inicial ao atendimento da criança, não houvesse gargalos de informação, transformando o sistema em uma ferramenta de trabalho ágil para os educadores sociais.',
        
        'ponte_uxui_title': 'Design de sites (UX/UI)',
        'ponte_uxui_text': 'Construí uma interface baseada no objetivo de não ter <span class="text-dark">fricções</span> ou <span class="text-dark">curvas de aprendizado</span>. Utilizei uma paleta de cores acolhedora e tipografia legível para passar segurança e seriedade. Cada elemento de UI foi validado para garantir rapidez na inserção de dados. O design aqui não é apenas estética, mas essencialmente funcional para um sistema com uso intuitivo. A arquitetura foi pensada para que o usuário sinta que "fazer o bem é fácil", utilizando componentes táteis e formulários inteligentes que reduzem o tempo de preenchimento.',
        
        'ponte_dev_title': 'Desenvolvimento',
        'ponte_dev_text': 'Neste projeto, atuei intensamente no desenvolvimento técnico, utilizando um stack moderno composto por <span class="text-dark">Node.js, Webpack e SCSS</span> para garantir um front-end performático e modularizado. A estrutura foi construída sobre o <span class="text-dark">Bootstrap</span> para assegurar responsividade total, já que a maioria das interações ocorre via mobile nas ruas. No back-end, utilizamos <span class="text-dark">Django</span>, o que nos permitiu criar uma interface administrativa (Admin) customizada para a FUNCI, facilitando o gerenciamento de dados complexos com a segurança que um projeto público exige.',

        // Impacto
        'ponte_impact_title': 'IMPACTOS & APRENDIZADOS',
        
        'ponte_metric_1_title': 'Eficiência na Abordagem',
        'ponte_metric_1_desc': '<strong>Aumento na Agilidade de Denúncia.</strong> Ao projetar uma interface mobile-first focada em baixa fricção, reduzimos o tempo médio de preenchimento do formulário de denúncia. Isso permitiu que cidadãos realizassem o reporte em segundos, garantindo que a equipe volante recebesse os dados em tempo real e agisse com maior precisão geográfica.',
        
        'ponte_metric_2_title': 'Alcance Social e Visibilidade',
        'ponte_metric_2_desc': '<strong>+680 Identificações Realizadas.</strong> O sistema atuou como um facilitador técnico para o registro de crianças e adolescentes acompanhados. A clareza visual e a facilidade de consulta de protocolos geraram uma maior confiança da população no canal oficial, resultando em um aumento direto no número de acolhimentos e atendimentos sociais documentados.',
        
        'ponte_metric_3_title': 'Educação e <br>Direitos Humanos',
        'ponte_metric_3_desc': '<strong>Democratização da Informação.</strong> Além da ferramenta de denúncia, o portal tornou-se um hub de consulta de direitos. Registramos um alto volume de acessos às seções informativas sobre o Estatuto da Criança e do Adolescente (ECA) e leis municipais, educando a população sobre as condições que configuram violação de direitos.',
        
        'ponte_metric_4_title': 'Digitalização e Rastreabilidade',
        'ponte_metric_4_desc': '<strong>Fim do Gap de Dados.</strong> A migração do processo manual para o sistema administrativo (Django Admin) que desenvolvemos permitiu a rastreabilidade total de cada caso. Agora, a FUNCI possui métricas reais para planejar políticas públicas baseadas em locais de maior incidência e tipos de ocorrência mais frequentes.',
        
        'ponte_metric_5_title': 'A Importância do Admin',
        'ponte_metric_5_desc': 'Projetar o lado administrativo para os educadores sociais foi tão vital quanto o portal público. Criar dashboards simples para quem está no campo de batalha é o que realmente faz a operação ser sustentável.',
        
        'ponte_metric_6_title': 'Design como facilitador & liderança',
        'ponte_metric_6_desc': 'Aprendi que, em projetos sociais, o design serve para construir uma ponte de confiança entre o cidadão e o governo, e liderar este projeto me ensinou a gerenciar expectativas de stakeholders públicos e a garantir um bom e adequado desenvolvimento.',

        // Seções Extras
        'ponte_user_title': 'O usuário',
        'ponte_user_text_1': 'Para projetar o Ponte de Encontro, foi necessário olhar para duas realidades distintas. De um lado, <span class="text-dark">a criança e o adolescente</span>, o beneficiário final que vive em um ciclo de invisibilidade e privação de direitos. Do outro, o <span class="text-dark">cidadão ativo</span>, representado pelo Alberto, que sente o incômodo social, mas muitas vezes não age por medo da burocracia.',
        'ponte_user_text_2': 'O mapeamento destas personas revelou que o sucesso do projeto dependia de remover a <span class="text-dark">fricção exacerbada e curva de aprendizados do sistema</span>. Alberto precisa de um gatilho de denúncia instantâneo e seguro para que a criança deixe de ser invisível. O design foi concebido para ser o elo mais curto e humano possível entre a vontade de ajudar e a ação do poder público.',
        
        'ponte_structure_title': 'Estrutura do <br> projeto',
        'ponte_structure_text': 'Para um projeto de abordagem social, a arquitetura de informação deve ser o caminho mais curto entre a percepção de uma violação e a ação protetiva. Projetei uma estrutura enxuta e intuitiva, eliminando ruídos para que o cidadão possa agir no momento exato da necessidade.',
        
        'ponte_wireframe_low_title': 'WIREFRAMES INICIAIS',
        'ponte_wireframe_low_text': 'Na etapa de wireframes de média fidelidade, meu foco como Lead do Projeto foi a remoção de barreiras cognitivas. Projetar para o serviço social exige que o cidadão não precise gastar energia pensando "como usar", mas sim focar na ação de ajudar. Estruturei a hierarquia de informações priorizando o fluxo de denúncia e consulta, validando a disposição dos elementos antes da aplicação da identidade visual. O foco técnico esteve em:',
        'ponte_wireframe_low_list': '<li class="project-intro-text mb-4"> <strong>Formulários Simplificados:</strong> Agrupamento lógico de campos para reduzir o tempo de preenchimento.</li><li class="project-intro-text mb-4"> <strong>Navegação Mobile-First:</strong> Garantia de que todos os componentes fossem táteis e funcionais para o uso em trânsito, ambiente onde a maioria das abordagens e denúncias ocorrem.</li>',

        'ponte_ui_title': 'Design de interface <br> do usuário',
        'ponte_ui_text_1': 'O desafio visual do Ponte de Encontro foi equilibrar a seriedade de um serviço público com a sensibilidade exigida pelos direitos humanos. Projetei um Style Guide focado em alta visibilidade e acolhimento, garantindo que a interface fosse, ao mesmo tempo, um alerta para a sociedade e um porto seguro para quem busca ajuda.',
        'ponte_ui_list': '<li class="project-intro-text mb-4"> <strong>Cores Estratégicas:</strong> A paleta utiliza o Laranja (#DF9A14) e o Amarelo (#FFCC00) para evocar atenção e energia, garantindo que o portal se destaque como uma ferramenta de utilidade pública. O Azul (#2B5FC5) foi inserido para trazer o contraponto de confiança e credibilidade institucional.</li> <li class="project-intro-text mb-4"> <strong>Tipografia Dinâmica: </strong> Combinei a fonte Righteous nos títulos, pois pela sua personalidade moderna e marcante, com a Roboto nos textos de leitura, garantindo acessibilidade e fluidez na absorção de informações densas sobre leis e protocolos.</li> <li class="project-intro-text mb-4"> <strong>Iconografia Humanizada: </strong> Desenvolvi um conjunto de ícones ilustrados que facilitam a identificação rápida das causas (trabalho infantil, exploração, etc). Essa escolha reduz o impacto psicológico do tema, tornando a navegação mais amigável e intuitiva para o cidadão.</li>',

        'ponte_wireframe_hi_title': 'Wireframe de alta <br> fidelidade',
        'ponte_wireframe_hi_text': 'A etapa de alta fidelidade traduziu o compromisso social do Ponte de Encontro em uma interface de alto impacto e baixa fricção. Utilizei o Design System para garantir que a navegação fosse acolhedora, mas extremamente funcional. O foco principal foi a hierarquia visual: o botão de denúncia e as informações sobre direitos infantis ganharam destaque imediato, guiando o cidadão de forma linear. Implementamos ferramentas de acessibilidade nativas e uma arquitetura de informação que organiza desde a conscientização até o monitoramento administrativo via Django.',
        'ponte_label_desktop_web': 'Wireframes - desktop (Website)',
        'ponte_label_desktop_admin': 'Wireframes - desktop (Admin)',

        'ponte_mobile_title': 'Wireframe de alta <br> fidelidade: mobile',
        'ponte_mobile_text_1': 'Como a maioria das interações de denúncia ocorre em trânsito, a versão mobile foi o coração do projeto. Foquei em um design altamente tátil e responsivo, otimizando formulários densos para preenchimento rápido. O objetivo técnico foi reduzir o tempo de interação para que o relato de violação de direitos ocorra no momento exato da observação. O resultado é uma ferramenta leve, performática e inclusiva, garantindo que a tecnologia atue como um facilitador imediato de proteção social na palma da mão.',
        'ponte_mobile_text_2': 'Adaptamos a densidade de informações para evitar sobrecarga em telas menores, garantindo que o fluxo de inscrição e os conteúdos de educação permaneçam fluidos e acessíveis em qualquer dispositivo. O resultado é uma interface moderna, leve e tecnicamente escalável, pronta para proporcionar um handoff sem atritos para o desenvolvimento.',


        // --- PROJETO: AJDC ---
        'ajdc_hero_title': 'Sobre o <br> Projeto',
        'ajdc_intro': 'O <strong class="text-primary">AJDC Clean Energy</strong> é um ecossistema de gestão inteligente desenvolvido sob medida para o setor de energia solar. O projeto nasceu com o desafio de centralizar processos administrativos que eram fragmentados, manuais e burocráticos, transformando-os em uma jornada digital fluida e intuitiva. Minha missão foi projetar uma interface que reduzisse a carga cognitiva da equipe financeira, integrando desde o cadastro dinâmico de clientes até a automação de faturas conectadas diretamente aos sistemas bancários. O resultado é uma ferramenta que não apenas organiza dados, mas acelera a geração de receita e oferece visibilidade estratégica em tempo real.',
        'ajdc_intro_2': 'Atuei desde a fase de Engenharia de Requisitos, mapeando processos internos e fluxos de usuário, até a entrega final do código. A solução centraliza o controle de faturas e boletos através de uma arquitetura baseada em APIs personalizadas, integrando automações via IA (n8n) para uma gestão financeira sem falhas humanas.',
        
        // Detalhes
        'ajdc_client_value': 'AJDC Clean Energy <br> Fortaleza, CE - BRA',
        'ajdc_services_list': '<li>Product Discovery & Strategy</li><li>UX/UI Design & Prototyping</li><li>Front-end Development</li><li>API Integration & Automation</li>',
        'ajdc_role_value': 'Product Designer & Front-end Developer',

        // Narrativa
        'ajdc_challenge_title': 'O desafio',
        'ajdc_challenge_text': 'Eliminar o "gargalo" operacional. A empresa perdia horas valiosas em preenchimentos manuais e consultas dispersas. O objetivo técnico era criar uma arquitetura de informação onde o administrador pudesse realizar ações complexas (como cadastrar clientes, fazer consultas, criar faturas, e ter acesso a métricas importantes) em poucos cliques, sem margem para erros.',
        
        'ajdc_deliverables_title': 'Principais entregáveis',
        'ajdc_deliverables_text': 'Cadastro de clientes e faturas, consultas relacionadas aos mesmos, desenvolvimento de um Dashboard Administrativo, fluxos de faturamento automatizados, sistema de filtros avançados para consulta de pagamentos e uma central de documentação/tutoriais integrada para facilitar o onboarding de novos colaboradores.',
        
        'ajdc_uxui_title': 'Design de sites (UX/UI)',
        'ajdc_uxui_text': 'Cada elemento visual foi pensado para minimizar erros operacionais, garantindo que a gestão de centenas de clientes e faturas fosse realizada de forma ágil e segura, reduzindo a curva de aprendizado e fricção para os usuários finais. O objetivo era alcançar eficiência máxima com o mínimo de esforço cognitivo.',
        
        'ajdc_dev_title': 'Desenvolvimento',
        'ajdc_dev_text': 'Fui responsável pela implementação completa do front-end utilizando FlutterFlow, garantindo fidelidade absoluta ao design e performance escalável. O diferencial técnico deste projeto foi a integração via APIs REST, onde trabalhei em colaboração direta com o desenvolvedor back-end para o consumo de dados em tempo real. Foi implementada toda a lógica de exibição de faturas e dashboards, além da estrutura da interface para interagir com automações de IA (n8n), entregando um produto funcional e pronto para operação.',

        // Impacto
        'ajdc_impact_title': 'IMPACTO & <br>APRENDIZADOS',
        
        'ajdc_metric_1_title': 'Agilidade Operacional',
        'ajdc_metric_1_desc': '<strong>Aumento de 300% na eficiência de cadastro.</strong> Através da unificação de ferramentas e automação de cálculos matemáticos complexos, o tempo médio para registro de clientes e faturas foi reduzido drasticamente, tornando o fluxo de trabalho 3x mais ágil e prático.',
        
        'ajdc_metric_2_title': 'Product Discovery <br>& Insights',
        'ajdc_metric_2_desc': '<strong>Redução de "Gargalos" Invisíveis.</strong> As entrevistas qualitativas com colaboradores permitiram mapear dores operacionais que não haviam sido diagnosticadas. O resultado foi a criação de funcionalidades inéditas que resolveram necessidades críticas de gestão antes negligenciadas.',
        
        'ajdc_metric_3_title': 'Satisfação do Usuário <br> (NPS Qualitativo)',
        'ajdc_metric_3_desc': '<strong>100% de Aprovação Interna.</strong> O sistema alcançou um índice de satisfação absoluta entre a equipe operacional e diretoria. A interface eliminou as nuances de erro e a resistência ao uso, sendo reconhecida como uma ferramenta "perfeita" para o dia a dia da empresa.',
        
        'ajdc_metric_4_title': 'Escalabilidade <br>de Dados',
        'ajdc_metric_4_desc': '<strong>Gestão Estratégica de Ativos.</strong> O lançamento permitiu um crescimento significativo na manutenção de dados vitais. Agora, a empresa possui visibilidade total sobre o número de clientes, fluxos de pagamentos e métricas financeiras, facilitando a tomada de decisão baseada em dados reais.',
        
        'ajdc_metric_5_title': 'Integridade <br>de Dados',
        'ajdc_metric_5_desc': '<strong>Zero Erros de Cálculo.</strong> Ao anular a necessidade de cálculos manuais e planilhas externas, o sistema garantiu 100% de integridade nas faturas geradas. Isso eliminou prejuízos financeiros causados por falhas humanas e retrabalho da equipe financeira.',

        // Seções Extras
        'ajdc_user_title': 'O usuário',
        'ajdc_user_text': 'Para que o AJDC não fosse apenas mais um software de gestão, utilizei metodologias de <strong>Product Discovery</strong> para mapear o comportamento real de quem opera o faturamento. Através de <strong>Needs Statements e Mapas de Empatia</strong>, consolidamos a proto-persona Jeice: o perfil que sintetiza os desafios de escala e automação do setor solar.',
        
        'ajdc_structure_title': 'Estrutura do <br> projeto',
        'ajdc_structure_text': 'Para transformar o pedido de automação do cliente em uma ferramenta robusta, projetei a estrutura do sistema focada em modularidade e controle total de dados. A arquitetura foi desenhada para centralizar o ciclo de vida do faturamento solar em um único ambiente, eliminando a dependência de planilhas externas e processos manuais. Foi desenvolvido um Sitemap estratégico que organiza o sistema em cinco pilares fundamentais:',
        'ajdc_structure_list_items': '<li class="project-intro-text mb-4"><strong>Gestão de Clientes:</strong> Fluxos completos de cadastro e consulta de dados sensíveis e endereçamentos.</li><li class="project-intro-text mb-4"><strong>Automação de Faturamento:</strong> Módulo core para criação, consulta e geração de remessas bancárias automatizadas.</li><li class="project-intro-text mb-4"><strong>Inteligência de Dados:</strong> Dashboard de métricas para visão macro do negócio e status de pagamentos.</li><li class="project-intro-text mb-4"><strong>Consultas Financeiras:</strong> Ferramenta de busca avançada com somatórios automáticos de pendências e recebidos.</li><li class="project-intro-text mb-4"><strong>Onboarding e Suporte:</strong> Uma seção dedicada de tutoriais interativos para cada funcionalidade, garantindo autonomia plena aos usuários e reduzindo a curva de aprendizado.</li>',
        'ajdc_structure_footer': 'O resultado é um ecossistema lógico onde o usuário navega com confiança, realizando ações complexas através de caminhos intuitivos e validados por fluxogramas de processos.',

        'ajdc_wireframe_low_title': 'WIREFRAMES & <br> arquitetura funcional',
        'ajdc_wireframe_low_text_1': 'Na etapa de wireframes, meu foco principal foi a organização de dados densos e a validação das regras de negócio do setor de energia solar. Dada a complexidade dos cálculos de faturamento e a diversidade de categorias de clientes, utilizei o design de média fidelidade para estruturar interfaces que priorizam a precisão e a velocidade de operação.',
        'ajdc_wireframe_low_text_2': 'Através de iterações constantes com stakeholders e usuários finais, refinei fluxos críticos como o cadastro de clientes, a geração automática de faturas e a consulta de pagamentos. Cada tela foi projetada para minimizar erros humanos, com elementos visuais que guiam o usuário através de processos complexos de forma intuitiva. O resultado é uma base sólida que sustenta a experiência do usuário, garantindo que cada interação seja eficiente e livre de ambiguidades.',

        'ajdc_ui_title': 'Design de interface <br> do usuário',
        'ajdc_ui_text': 'O design de interface do AJDC foi projetado para equilibrar a robustez de um sistema financeiro com a leveza de uma ferramenta moderna de energia limpa. O objetivo principal do Style Guide foi garantir consistência absoluta entre os módulos, facilitando o aprendizado da equipe e otimizando o fluxo de faturamento.',
        'ajdc_ui_list': '<li class="project-intro-text mb-4"> <strong>Cores e Semântica:</strong> A paleta utiliza tons de Azul Petróleo e Teals para transmitir estabilidade e profissionalismo, remetendo diretamente ao setor de energia sustentável. Utilizamos o Verde Esmeralda para estados de sucesso e o Coral Vibrante para alertas críticos, garantindo que o usuário identifique instantaneamente o status das faturas e processos.</li> <li class="project-intro-text mb-4"> <strong>Tipografia (Inter): </strong> Escolhi a família Inter por sua versatilidade sistêmica. Sua alta legibilidade em diferentes escalas foi fundamental para organizar tabelas densas e dashboards, mantendo uma hierarquia clara entre dados operacionais e métricas de decisão.</li> <li class="project-intro-text mb-4"> <strong>Componentização e Botões: </strong> Desenvolvi uma biblioteca de componentes modulares com estilos Solid e Outline. Essa abordagem não apenas melhora a experiência do usuário através da previsibilidade, mas também garantiu um handoff ágil para o desenvolvimento no FlutterFlow, permitindo a reutilização de elementos e a escalabilidade do sistema.</li> <li class="project-intro-text mb-4"> <strong>Iconografia: </strong> Utilizamos ícones minimalistas de traço limpo para auxiliar no reconhecimento cognitivo rápido das funcionalidades, reduzindo o tempo de resposta do administrador durante tarefas repetitivas.</li>',

        'ajdc_wireframe_hi_title': 'Wireframes: <br> alta fidelidade',
        'ajdc_wireframe_hi_text_1': 'A etapa de alta fidelidade traduziu a complexidade lógica do AJDC em uma interface de alta performance. O foco principal foi a criação de um ecossistema consistente, onde o administrador pode gerenciar centenas de faturas com o mínimo de cliques e esforço cognitivo.',
        'ajdc_wireframe_hi_text_2': 'Cada componente foi desenhado seguindo as diretrizes do Style Guide, garantindo que elementos críticos — como status de pagamento e alertas de vencimento — tenham destaque imediato, reduzindo drasticamente a margem de erro humano no faturamento.',

        'ajdc_mobile_title': 'Wireframe de alta <br> fidelidade: mobile',
        'ajdc_mobile_text_1': 'A versão mobile do AJDC foi projetada para ser a extensão de bolso do administrador. O desafio técnico foi adaptar fluxos densos de dados para telas reduzidas, priorizando a acessibilidade e a rapidez na consulta.',
        'ajdc_mobile_text_2': 'Através de um design responsivo e adaptativo, implementei o empilhamento inteligente de componentes e a simplificação de formulários extensos. Para garantir a segurança em processos críticos, como a geração de faturas, adotamos a estratégia de restringir certas funcionalidades ao ambiente desktop, enquanto o mobile atua como uma poderosa ferramenta de monitoramento e consulta rápida de status e métricas, permitindo que o gestor tenha o controle da operação na palma da mão, com total clareza visual.',


        // --- PROJETO: ELEVEIT ---
        'eleveit_hero_title': 'Sobre o <br> Projeto',
        'eleveit_intro_1': 'A <span class="text-green">eleveit</span> transforma a trajetória de jovens, conectando-os a um plano de desenvolvimento que torna seus sonhos realidade. Com a metodologia "Despertando Potenciais", oferecemos matching inteligente com PDI-e, educação financeira, capacitação e acesso a oportunidades de trabalho e empreendedorismo.',
        'eleveit_intro_2': 'A empresa precisava de um website responsivo que apresentasse sua proposta com clareza e fortalecesse sua presença digital. Como uma marca nova no mercado e voltada para educação e tecnologia, era essencial construir confiança, explicar seus serviços e criar um ponto de contato capaz de atrair e orientar jovens interessados no programa.',
        
        // Detalhes
        'eleveit_client_value': 'Eleveit <br> Fortaleza, CE - BRA',
        'eleveit_services_list': '<li>UX Research & Strategy</li><li>Arquitetura de Informação</li><li>Interface Design (UI)</li><li>Prototipagem Interativa</li>',
        'eleveit_role_value': 'Product Designer',

        // Narrativa
        'eleveit_challenge_title': 'O desafio',
        'eleveit_challenge_text': 'A Eleveit já possuía uma lógica interna robusta, mas faltava uma camada de experiência (UX) que convertesse o interesse inicial em ação. O desafio técnico era criar uma jornada linear para um público jovem e diverso, eliminando a sobrecarga cognitiva e transformando um ecossistema complexo em uma interface intuitiva e acolhedora.',
        
        'eleveit_deliverables_title': 'Principais entregáveis',
        'eleveit_deliverables_text': 'Como resultado do processo de design, entreguei um ecossistema completo focado em escala: UX Research detalhada, Sitemap e Fluxogramas de navegação, Wireframes de alta fidelidade e um Design System modular. O foco foi garantir que o produto não fosse apenas um site, mas uma ferramenta pronta para crescer junto com o negócio.',
        
        'eleveit_uxui_title': 'Design de sites (UX/UI)',
        'eleveit_uxui_text': 'A interface foi construída sobre os pilares da acessibilidade e modernidade. Utilizei a tipografia Inter por sua alta performance em leitura digital e uma paleta em degradê azul-verde para evocar tecnologia e confiança. A arquitetura de informação foi desenhada para construir autoridade logo nos primeiros segundos, priorizando o valor social da marca antes da conversão direta.',
        
        'eleveit_dev_title': 'Desenvolvimento',
        'eleveit_dev_text': 'Utilizei minha base em Análise de Sistemas para garantir um handoff sem atritos. A implementação foi realizada via FlutterFlow, focando em uma estrutura de código limpa e performance otimizada. Foi desenvolvido uma interface 100% responsiva, garantindo que a experiência fosse idêntica em qualquer dispositivo, integrando componentes dinâmicos que facilitam a gestão de conteúdo pela equipe da Eleveit.',

        // Impacto
        'eleveit_impact_title': 'IMPACTO',
        'eleveit_impact_subtitle': 'Tanto o lançamento inicial quanto as versões subsequentes produziram ótimos resultados...',
        
        'eleveit_metric_1_title': 'Rentável',
        'eleveit_metric_1_desc': '<strong>+45% de inscrições.</strong> O lançamento aumentou significativamente as inscrições.',
        
        'eleveit_metric_2_title': 'Impacto social',
        'eleveit_metric_2_desc': '<strong>200+ jovens alcançados.</strong> Projeto conectou pessoas ao programa.',
        
        'eleveit_metric_3_title': 'Engajamento',
        'eleveit_metric_3_desc': '<strong>+60% de tempo na página.</strong> A navegação otimizada aumentou a permanência.',
        
        'eleveit_metric_4_title': 'Reconhecimento',
        'eleveit_metric_4_desc': '<strong>NPS 80+.</strong> Usuários avaliaram positivamente a clareza e empatia.',
        
        'eleveit_metric_5_title': 'Conversão',
        'eleveit_metric_5_desc': '<strong>-35% na taxa de rejeição.</strong> A taxa de saída caiu e o engajamento cresceu.',
        
        'eleveit_metric_6_title': 'Crescimento',
        'eleveit_metric_6_desc': '<strong>+30% de tráfego orgânico.</strong> Boas práticas de SEO aumentaram o alcance.',

        // Seções Extras
        'eleveit_user_title': 'O usuário',
        'eleveit_user_text_1': 'Para construir uma solução que realmente resolva problemas de inclusão digital e empregabilidade, o design foi fundamentado em uma fase densa de UX Research. Através de técnicas de benchmark competitivo, entrevistas em profundidade e mapas de empatia, pudemos mergulhar nas barreiras psicológicas e técnicas enfrentadas por jovens em transição de carreira.',
        'eleveit_user_text_2': 'Esses processos permitiram consolidar padrões de comportamento e necessidades que culminaram na definição de nossa persona principal: o Péricles. Ele representa o perfil acadêmico-analítico que busca clareza e um roteiro linear para ingressar no mercado profissional. Abaixo, detalho como essa jornada de descoberta moldou as diretrizes do produto.',
        
        'eleveit_structure_title': 'Estrutura do <br> projeto',
        'eleveit_structure_text_1': 'Para organizar a navegação da landing page e garantir uma experiência fluida, foi desenvolvido um sitemap que define as principais páginas e o fluxo de interação do usuário. O objetivo foi simplificar o acesso às informações mais relevantes — Quem Somos, Dúvidas Frequentes e Fale Conosco — permitindo que o visitante encontre facilmente o que procura sem sobrecarga de conteúdo.',
        'eleveit_structure_text_2': 'O fluxograma representa o caminho ideal do usuário desde o acesso à página inicial até a conclusão de sua navegação nas seções principais. A ideia é oferecer uma jornada clara, objetiva e intuitiva, com poucos cliques entre o ponto de entrada e o objetivo final (obter informações ou entrar em contato).',
        
        'eleveit_wireframe_low_title': 'WIREFRAMES',
        'eleveit_wireframe_low_text': 'Na etapa de wireframes de baixa fidelidade, busquei estruturar a hierarquia das informações e validar o fluxo de navegação antes de aplicar a identidade visual da Eleveit. O foco esteve em definir a disposição dos elementos, o comportamento responsivo e a clareza da jornada do usuário entre as seções principais.',

        'eleveit_ui_title': 'Design de interface <br> do usuário',
        'eleveit_ui_intro': 'O style guide foi desenvolvido com o objetivo de garantir consistência visual e uma identidade moderna para a plataforma Eleveit. A escolha do degradê azul–verde transmite tecnologia e acessibilidade, reforçando a missão do projeto de conectar jovens ao futuro profissional.',
        'eleveit_ui_list': '<li class="project-intro-text mb-4"> <strong>Tipografia:</strong> A família Inter foi escolhida por seu excelente desempenho em telas digitais, legibilidade e estilo contemporâneo. As variações de peso e tamanho criam uma hierarquia clara entre títulos, subtítulos e textos.</li> <li class="project-intro-text mb-4"> <strong>Botões e Cards: </strong> Foram definidos dois estilos de botão (solid e outline) para criar contraste entre ações primárias e secundárias. Os cards seguem o mesmo padrão visual, utilizando cantos arredondados e sombras sutis para transmitir modernidade e profundidade.</li> <li class="project-intro-text mb-4"> <strong>Iconografia: </strong> Ícones minimalistas e universais reforçam a comunicação visual da interface, priorizando clareza e acessibilidade.</li>',

        'eleveit_wireframe_hi_title': 'Wireframe de alta <br> fidelidade',
        'eleveit_wireframe_hi_text': 'Nesta etapa, a identidade visual da Eleveit ganhou vida através de um Design System coeso. A escolha da tipografia Inter não foi apenas estética; sua legibilidade excepcional em telas digitais garante que o usuário absorva as informações sem fadiga visual.',

        'eleveit_mobile_title': 'Wireframe de alta <br> fidelidade: mobile',
        'eleveit_mobile_text_1': 'Como sabemos que o conceito de mobile first hoje é essencial, o foco no design responsivo foi prioridade. No mobile, a interface foi otimizada para navegação com um único polegar, mantendo elementos interativos em zonas de fácil alcance.',
        'eleveit_mobile_text_2': 'Adaptamos a densidade de informações para evitar sobrecarga em telas menores, garantindo que o fluxo de inscrição e os conteúdos de educação permaneçam fluidos e acessíveis em qualquer dispositivo. O resultado é uma interface moderna, leve e tecnicamente escalável, pronta para proporcionar um handoff sem atritos para o desenvolvimento.',




        // --- PROJETO: JD DIGITAL ---
        'jd_hero_title': 'Sobre o <br> Projeto',
        'jd_intro_1': 'O <strong class="text-danger">Juventude Digital</strong> é um programa da Prefeitura de Fortaleza que qualifica jovens para o mercado da tecnologia, lançado em outubro de 2021, como uma política pública permanente da cidade. É coordenado pela <strong>Fundação de Ciência, Tecnologia e Inovação de Fortaleza (Citinova)</strong>, em parceria com o Instituto Juventude Inovação e as secretarias da Juventude e da Educação. É o principal hub de capacitação tecnológica da Prefeitura de Fortaleza. O projeto de <strong>redesign</strong> foi motivado pela necessidade de transformar o portal institucional em uma plataforma educacional de alta performance, focada na jornada do aluno.',
        'jd_intro_2': '<strong class="text-danger">O JD já capacitou mais de 44 mil jovens, realizou mais de 200 cursos e oficinas e alcançou 48,2 mil pessoas em cerca de 100 eventos.</strong>',
        'jd_intro_3': 'Atuei no ciclo completo da solução: desde a <strong>análise técnica e testes de usabilidade</strong> da plataforma anterior, identificando bugs e gargalos de fluxo, até a implementação final do <strong>front-end</strong>, garantindo uma interface acessível e preparada para escalar o impacto social do programa.',
        
        // Detalhes
        'jd_client_value': 'JD Digital <br> Fortaleza, CE - BRA',
        'jd_services_list': '<li>UX/UI Design & Redesign</li><li>Front-end Development</li><li>Platform Analysis & QA Testing</li><li>Interaction Design & Prototyping</li>',
        'jd_role_value': 'Product Designer & Front-end Developer',

        // Narrativa
        'jd_challenge_title': 'O desafio',
        'jd_challenge_text': 'O maior desafio técnico era a fragmentação da informação. O portal legado apresentava barreiras na descoberta de cursos e falta de clareza nos editais acadêmicos, o que resultava em uma baixa retenção de alunos, além e falta de funções específicas que expusessem outras informações, como trilha constante de cursos, galeria de fotos e imagens, e descrições de eventos. A missão da equipe foi estruturar uma arquitetura de informação que unificasse editais, eventos e trilhas de aprendizado em um único ecossistema intuitivo, eliminando a dependência de redes sociais externas para a comunicação de prazos e oportunidades.',
        
        'jd_deliverables_title': 'Principais entregáveis',
        'jd_deliverables_text': 'Foi desenvolvido um ecossistema digital robusto composto por: novas páginas de Editais Acadêmicos com filtros por status, Calendário de Eventos interativo, sistema de Trilhas de Conhecimento (Design, Dados, Dev, IA), Galeria de Eventos imersiva e uma Área do Aluno personalizada para gestão de histórico e certificados. Cada entrega foi validada para garantir que o fluxo entre a descoberta do curso e a inscrição fosse o mais curto possível.',
        
        'jd_uxui_title': 'Design de sites (UX/UI)',
        'jd_uxui_text': 'Foi utilizado a tipografia Montserrat e uma paleta de cores vibrantes para comunicar inovação e energia ao público jovem. A interface foi construída sobre um Design System modular, focado em hierarquia visual clara e acessibilidade. Assim como também, projetado componentes que destacam cursos em alta e simplificam a leitura de documentos densos (editais), transformando um portal burocrático em uma experiência fluida, moderna e visualmente atraente.',
        
        'jd_dev_title': 'Desenvolvimento',
        'jd_dev_text': 'Fui responsável por ajudar a traduzir o redesign em código front-end, priorizando a performance e a fidelidade visual. Minha atuação incluiu uma fase intensa de testes técnicos na plataforma que antecedia o projeto, onde mapeei mecanismos de erro e bugs críticos. Esses dados geraram os insights necessários para a criação de uma interface limpa e resiliente, integrando funcionalidades dinâmicas que permitem à gestão do JD atualizar conteúdos de forma ágil e segura.',

        // Impacto
        'jd_impact_title': 'IMPACTO & <br>APRENDIZADOS',
        
        'jd_metric_1_title': 'Engajamento e Prova Social <br>(A Galeria)',
        'jd_metric_1_desc': '<strong>Crescimento Orgânico via Storytelling.</strong> A implementação da galeria de eventos com descrições imersivas transformou a percepção visual do programa. O resultado foi um aumento significativo na divulgação espontânea feita pelos próprios alunos em redes sociais, fortalecendo a autoridade da marca JD Digital e atraindo novos talentos sem custo de aquisição.',
        
        'jd_metric_2_title': 'Retenção e Segurança <br> (As Trilhas)',
        'jd_metric_2_desc': '<strong>Redução da Paralisia de Escolha.</strong> A estruturação dos cursos em trilhas temáticas (Design, Dev, Dados, IA) ofereceu o "GPS" que os jovens precisavam. Ao prover um caminho linear e seguro, a plataforma reduziu a evasão e aumentou o índice de conclusão de cursos, garantindo que o aluno saiba exatamente onde está e para onde sua carreira pode ir.',
        
        'jd_metric_3_title': 'Experiência e Usabilidade',
        'jd_metric_3_desc': '<strong>Navegação de Alta Performance.</strong> O redesenho da arquitetura de informação eliminou os gargalos de fluxo da plataforma anterior. A interação tornou-se mais fluida e intuitiva, permitindo que o acesso a editais e inscrições fosse realizado de forma ágil, refletindo diretamente na satisfação do usuário e na credibilidade institucional.',
        
        'jd_metric_4_title': 'O Design como Ferramenta de Confiança:',
        'jd_metric_4_desc': '<strong>Estilo moderno é confiança.</strong> Aprendi que, para um programa público voltado a jovens, a estética moderna é um pré-requisito para a confiança. Um portal que parece "atrasado" afasta o talento digital. O visual premium atraiu o público mais exigente da tecnologia.',
        
        'jd_metric_5_title': 'Arquitetura de Informação <br> é Carreira',
        'jd_metric_5_desc': '<strong>Gestão Estratégica de Ativos.</strong> Organizar mais de 200 cursos não é apenas uma tarefa de rotulagem, é uma tarefa de orientação profissional. Entender a hierarquia das trilhas me ensinou a projetar fluxos que educam enquanto navegam.',
        
        'jd_metric_6_title': 'Valor Qualitativo vs. <br> Quantitativo',
        'jd_metric_6_desc': '<strong>Funcionalidades para além do design UI.</strong> Mesmo sem ferramentas complexas de tracking no início, as entrevistas qualitativas provaram que o design emocional (como a galeria de fotos) é o maior motor de engajamento social de um projeto público.',

        // Seções Extras
        'jd_user_title': 'O usuário',
        'jd_user_text': 'O sucesso do redesign do portal JD Digital dependeu diretamente de uma imersão na realidade de seu público-alvo: <strong>jovens talentos de Fortaleza que buscam ascensão na tecnologia</strong>. Através de processos de Product Discovery, consolidamos o perfil do Nathan. Ele representa o estudante autônomo e analítico, cujas dores com a fragmentação de informações nas redes sociais serviram de base para as novas funcionalidades de centralização e gestão de carreira da plataforma.',
        
        'jd_structure_title': 'Estrutura do <br> projeto',
        'jd_structure_text': 'Para unificar um ecossistema complexo com mais de 200 cursos e múltiplos editais, foi projetado uma Arquitetura de Informação modular. O foco foi otimizar a busca por informações, garantindo que o estudante navegue de forma intuitiva entre o aprendizado e as oportunidades. Abaixo alguns destaques da estrutura:',
        'jd_structure_list': '<li class="project-intro-text mb-4"><strong>Centralização de Oportunidades:</strong> Criação do nav "Pra Você", que atua como um hub dinâmico para Editais e Eventos, separando conteúdos sazonais da grade fixa de cursos.</li><li class="project-intro-text mb-4"><strong>Navegação Orientada a Objetivos:</strong> Categorização clara entre trilhas de aprendizado (foco em carreira) e suporte ao usuário (FAQ e Contato).</li><li class="project-intro-text mb-4"><strong>Fluxo de Conversão:</strong> Uma hierarquia desenhada para reduzir cliques até a inscrição, priorizando a retenção do aluno dentro do portal.</li>',

        'jd_ui_title': 'Design de interface <br> do usuário',
        'jd_ui_text': 'O veredito para o Style Guide foi a modernização conservadora. Respeitamos os ativos visuais originais, focando na reestruturação técnica dos elementos:',
        'jd_ui_list': '<li class="project-intro-text mb-4"> <strong>Tipografia:</strong> A família Montserrat foi mantida por sua legibilidade e ar tecnológico, agora com uma hierarquia de pesos (SemiBold) mais rigorosa.</li> <li class="project-intro-text mb-4"> <strong>Cores:</strong> A paleta original foi otimizada para garantir melhores níveis de acessibilidade e contraste, mantendo o vibrante degradê característico.</li> <li class="project-intro-text mb-4"> <strong>Cards & Botões: </strong> Introduzi cantos arredondados e sombras suaves para criar profundidade e um aspecto mais amigável e tátil.</li>',

        'jd_wireframe_hi_title': 'Wireframes: <br> alta fidelidade',
        'jd_wireframe_hi_text': 'Como a fundação estrutural do portal já estava estabelecida, optei por avançar diretamente para a Alta Fidelidade, concentrando esforços no refinamento da experiência e na criação de um sistema visual dinâmico. O objetivo foi traduzir a densidade de informações, como entre Trilhas de Conhecimento, Editais e Eventos, em uma interface fluida, acessível e visualmente vibrante. Cada tela foi projetada para garantir que o estudante encontre o que precisa em poucos segundos, transformando a complexidade de uma plataforma pública em um ecossistema intuitivo, responsivo e pronto para escala.'
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
        'reciclo_hero_title': 'About the <br> Project',
        'reciclo_intro': 'The <span class="text-success">Re-ciclo</span> is an innovative circular economy platform developed by the City of Fortaleza. The project operates in door-to-door selective collection logistics, using sustainable micromobility (electric tricycles) to connect citizens and companies to waste picker associations. I acted as a UX/UI Designer, part of the team responsible for translating a complex public service model into a simplified interface, focused on promoting socioeconomic inclusion for pickers and raising the recycling rate in the capital.',
        
        // Side Details
        'project_label_client': 'Client',
        'project_label_services': 'Services',
        'project_label_role': 'My role',
        'reciclo_services_list': '<li>Product Discovery</li><li>Interface Design (UI)</li><li>UX Research</li><li>Interactive Prototyping</li>',
        
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
        'reciclo_impact_title': 'IMPACT & <br>LEARNINGS',
        
        'reciclo_metric_1_title': 'Dignity and Income',
        'reciclo_metric_1_desc': '<strong>Inclusion of the Base of the Pyramid.</strong> By formalizing and facilitating collection via electric tricycles, the project removed social stigma and exhausting physical effort, ensuring a stable income source and recognizing these professionals as essential environmental agents for Fortaleza.',
        
        'reciclo_metric_2_title': 'Gamification as Habit Change',
        'reciclo_metric_2_desc': 'I learned that technology alone recycles nothing; design must motivate. Using gamification elements (like the "Recycle & Win" concept) was fundamental to transforming a boring task into a pleasurable and rewarding habit for the citizen.',
        
        'reciclo_metric_3_title': 'Efficiency and Incentives',
        'reciclo_metric_3_desc': '<strong>Circular Economy Viability.</strong> Strategically aligned with the Recycling Incentive Law, the project contributed to an ecosystem capable of attracting massive investments (projected R$ 140M), proving that sustainable design is highly profitable.',
        
        'reciclo_metric_4_title': 'Design for Extreme Contexts',
        'reciclo_metric_4_desc': 'Designing for the waste picker taught me about usability in adverse conditions. The interface needs to be readable and tactile enough to be used quickly during routes. Simplicity here is not aesthetic; it is a work tool.',
        
        'reciclo_metric_5_title': 'Compliance and Scale',
        'reciclo_metric_5_desc': '<strong>Reduction of Landfill Waste.</strong> Through an interface focused on quick scheduling, we leveraged the application of the National Solid Waste Policy. The ease of separation and door-to-door collection increased the municipal recycling rate, preserving natural resources and transforming "trash" into new industrial inputs scalably.',
        
        'reciclo_metric_6_title': 'Public-Private Intermediation',
        'reciclo_metric_6_desc': 'This project taught me to design flows that simultaneously meet government bureaucratic requirements and the common user\'s need for convenience, unifying distinct interests into a single fluid journey.',

        // Extra Sections
        'reciclo_user_title': 'The User',
        'reciclo_user_text': 'Re-ciclo\'s success depends on harmony between three fundamental actors. To design a solution that truly transformed waste management in Fortaleza, we dove into the daily lives of Afonso (operational force seeking dignity), Marcelo (citizen seeking convenience), and Júlia (business seeking logistical efficiency). The design challenge was creating an interface that eliminated friction between these profiles, ensuring technology acted as the invisible link transforming disposal into social and environmental value.',
        
        'reciclo_structure_title': 'Project <br> Structure',
        'reciclo_structure_text': 'Re-ciclo\'s sitemap was designed to simplify the sustainable disposal journey. We structured navigation into modules that first educate the user ("Know") and then facilitate direct action ("Participate"). Segmentation between Individuals and Companies in the access flow is fundamental to ensuring operational features are personalized for each profile, optimizing collection logistics and waste management experience.',
        
        'reciclo_ui_title': 'User Interface <br> Design',
        'reciclo_ui_text': 'Re-ciclo\'s visual verdict is the modernization of sustainability. Through friendly typography and a diverse chromatic palette, we created an interface communicating energy and social responsibility. The focus was on creating a proprietary visual language, where detailed iconography and rounded components invite user action, strengthening circular economy culture through human-centered design and operational efficiency.',
        
        'reciclo_wireframe_title': 'High Fidelity <br> Wireframe',
        'reciclo_wireframe_text': 'The high-fidelity desktop stage was designed to be the control center for recycling in Fortaleza. The main focus was data consolidation and transparency: creating dashboards displaying real social and environmental impact metrics (collected tonnage and generated income).',
        
        'reciclo_mobile_title': 'High Fidelity: <br> Mobile',
        'reciclo_mobile_text': 'Re-ciclo\'s mobile design was conceived under the premise of low friction and tactile usability. For the common citizen, the scheduling flow was optimized to be completed in a few taps, eliminating cognitive barriers.',


        // --- PROJECT: AJDC ---
        'ajdc_hero_title': 'About the <br> Project',
        'ajdc_intro': '<strong class="text-primary">AJDC Clean Energy</strong> is an intelligent management ecosystem developed specifically for the solar energy sector. The project was born from the challenge of centralizing administrative processes that were fragmented, manual, and bureaucratic, transforming them into a fluid and intuitive digital journey. My mission was to design an interface that reduced the cognitive load of the finance team, integrating everything from dynamic client registration to invoice automation connected directly to banking systems. The result is a tool that not only organizes data but accelerates revenue generation and offers real-time strategic visibility.',
        'ajdc_intro_2': 'I worked from the Requirements Engineering phase, mapping internal processes and user flows, to the final code delivery. The solution centralizes invoice and billing control through an architecture based on custom APIs, integrating AI automations via n8n for financial management without human errors.',
        
        // Details
        'ajdc_client_value': 'AJDC Clean Energy <br> Fortaleza, CE - BRA',
        'ajdc_services_list': '<li>Product Discovery & Strategy</li><li>UX/UI Design & Prototyping</li><li>Front-end Development</li><li>API Integration & Automation</li>',
        'ajdc_role_value': 'Product Designer & Front-end Developer',

        // Narrative
        'ajdc_challenge_title': 'The Challenge',
        'ajdc_challenge_text': 'Eliminate the operational "bottleneck". The company was losing valuable hours on manual entries and dispersed queries. The technical goal was to create an information architecture where the administrator could perform complex actions (such as registering clients, making queries, creating invoices, and accessing important metrics) in a few clicks, with no margin for error.',
        
        'ajdc_deliverables_title': 'Key Deliverables',
        'ajdc_deliverables_text': 'Client and invoice registration, related queries, Administrative Dashboard development, automated billing flows, advanced filter system for payment consultation, and an integrated documentation/tutorial center to facilitate new employee onboarding.',
        
        'ajdc_uxui_title': 'Site Design (UX/UI)',
        'ajdc_uxui_text': 'Every visual element was designed to minimize operational errors, ensuring that managing hundreds of clients and invoices was done agilely and securely, reducing the learning curve and friction for end-users. The goal was to achieve maximum efficiency with minimum cognitive effort.',
        
        'ajdc_dev_title': 'Development',
        'ajdc_dev_text': 'I was responsible for the complete front-end implementation using FlutterFlow, ensuring absolute fidelity to the design and scalable performance. The technical differentiator of this project was the integration via REST APIs, where I worked in direct collaboration with the back-end developer for real-time data consumption. All logic for displaying invoices and dashboards was implemented, as well as the interface structure to interact with AI automations (n8n), delivering a functional and operation-ready product.',

        // Impact
        'ajdc_impact_title': 'IMPACT & <br>LEARNINGS',
        
        'ajdc_metric_1_title': 'Operational Agility',
        'ajdc_metric_1_desc': '<strong>300% increase in registration efficiency.</strong> Through tool unification and automation of complex mathematical calculations, the average time for client and invoice registration was drastically reduced, making the workflow 3x more agile and practical.',
        
        'ajdc_metric_2_title': 'Product Discovery <br>& Insights',
        'ajdc_metric_2_desc': '<strong>Reduction of Invisible "Bottlenecks".</strong> Qualitative interviews with employees allowed mapping operational pains that hadn\'t been diagnosed. The result was the creation of novel features that solved critical management needs previously neglected.',
        
        'ajdc_metric_3_title': 'User Satisfaction <br> (Qualitative NPS)',
        'ajdc_metric_3_desc': '<strong>100% Internal Approval.</strong> The system achieved an absolute satisfaction index among the operational team and board. The interface eliminated error nuances and resistance to use, being recognized as a "perfect" tool for the company\'s day-to-day.',
        
        'ajdc_metric_4_title': 'Data <br>Scalability',
        'ajdc_metric_4_desc': '<strong>Strategic Asset Management.</strong> The launch allowed significant growth in maintaining vital data. Now, the company has total visibility over customer numbers, payment flows, and financial metrics, facilitating data-driven decision-making.',
        
        'ajdc_metric_5_title': 'Data <br>Integrity',
        'ajdc_metric_5_desc': '<strong>Zero Calculation Errors.</strong> By voiding the need for manual calculations and external spreadsheets, the system ensured 100% integrity in generated invoices. This eliminated financial losses caused by human error and rework by the finance team.',

        // Extra Sections
        'ajdc_user_title': 'The User',
        'ajdc_user_text': 'So that AJDC wouldn\'t be just another management software, I used <strong>Product Discovery</strong> methodologies to map the real behavior of those operating billing. Through <strong>Needs Statements and Empathy Maps</strong>, we consolidated the proto-persona Jeice: the profile synthesizing the scale and automation challenges of the solar sector.',
        
        'ajdc_structure_title': 'Project <br> Structure',
        'ajdc_structure_text': 'To transform the client\'s automation request into a robust tool, I designed the system structure focused on modularity and total data control. The architecture was designed to centralize the solar billing lifecycle in a single environment, eliminating dependence on external spreadsheets and manual processes. A strategic Sitemap was developed organizing the system into five fundamental pillars:',
        'ajdc_structure_list_items': '<li class="project-intro-text mb-4"><strong>Client Management:</strong> Complete flows for registration and consultation of sensitive data and addressing.</li><li class="project-intro-text mb-4"><strong>Billing Automation:</strong> Core module for creation, consultation, and generation of automated bank remittances.</li><li class="project-intro-text mb-4"><strong>Data Intelligence:</strong> Metrics dashboard for macro business view and payment status.</li><li class="project-intro-text mb-4"><strong>Financial Queries:</strong> Advanced search tool with automatic summation of pending and received amounts.</li><li class="project-intro-text mb-4"><strong>Onboarding and Support:</strong> A dedicated section of interactive tutorials for each feature, ensuring full user autonomy and reducing the learning curve.</li>',
        'ajdc_structure_footer': 'The result is a logical ecosystem where the user navigates with confidence, performing complex actions through intuitive paths validated by process flowcharts.',

        'ajdc_wireframe_low_title': 'WIREFRAMES & <br> functional architecture',
        'ajdc_wireframe_low_text_1': 'In the wireframe stage, my main focus was organizing dense data and validating solar energy sector business rules. Given the complexity of billing calculations and diverse client categories, I used mid-fidelity design to structure interfaces prioritizing precision and operation speed.',
        'ajdc_wireframe_low_text_2': 'Through constant iterations with stakeholders and end-users, I refined critical flows like client registration, automatic invoice generation, and payment consultation. Each screen was designed to minimize human error, with visual elements guiding the user through complex processes intuitively. The result is a solid base supporting user experience, ensuring every interaction is efficient and ambiguity-free.',

        'ajdc_ui_title': 'User Interface <br> Design',
        'ajdc_ui_text': 'AJDC\'s interface design was planned to balance the robustness of a financial system with the lightness of a modern clean energy tool. The main goal of the Style Guide was ensuring absolute consistency between modules, facilitating team learning and optimizing billing flow.',
        'ajdc_ui_list': '<li class="project-intro-text mb-4"> <strong>Colors and Semantics:</strong> The palette uses Petroleum Blue and Teal tones to convey stability and professionalism, directly referencing the sustainable energy sector. We used Emerald Green for success states and Vibrant Coral for critical alerts, ensuring the user instantly identifies invoice and process status.</li> <li class="project-intro-text mb-4"> <strong>Typography (Inter): </strong> I chose the Inter family for its systemic versatility. Its high legibility at different scales was fundamental for organizing dense tables and dashboards, maintaining a clear hierarchy between operational data and decision metrics.</li> <li class="project-intro-text mb-4"> <strong>Componentization and Buttons: </strong> I developed a library of modular components with Solid and Outline styles. This approach not only improves user experience through predictability but also ensured an agile handoff for FlutterFlow development, allowing element reuse and system scalability.</li> <li class="project-intro-text mb-4"> <strong>Iconography: </strong> We used minimalist clean-line icons to assist in quick cognitive recognition of features, reducing administrator response time during repetitive tasks.</li>',

        'ajdc_wireframe_hi_title': 'Wireframes: <br> high fidelity',
        'ajdc_wireframe_hi_text_1': 'The high-fidelity stage translated AJDC\'s logical complexity into a high-performance interface. The main focus was creating a consistent ecosystem where the administrator can manage hundreds of invoices with minimal clicks and cognitive effort.',
        'ajdc_wireframe_hi_text_2': 'Each component was designed following Style Guide guidelines, ensuring critical elements — like payment status and due date alerts — have immediate prominence, drastically reducing human error margin in billing.',

        'ajdc_mobile_title': 'High Fidelity: <br> Mobile',
        'ajdc_mobile_text_1': 'AJDC\'s mobile version was designed to be the administrator\'s pocket extension. The technical challenge was adapting dense data flows for reduced screens, prioritizing accessibility and query speed.',
        'ajdc_mobile_text_2': 'Through responsive and adaptive design, I implemented intelligent component stacking and simplification of extensive forms. To ensure security in critical processes like invoice generation, we adopted the strategy of restricting certain features to the desktop environment, while mobile acts as a powerful tool for monitoring and quick consultation of status and metrics, allowing the manager to have operation control in the palm of their hand, with total visual clarity.',


        // --- PROJECT: ELEVEIT ---
        'eleveit_hero_title': 'About the <br> Project',
        'eleveit_intro_1': '<span class="text-green">eleveit</span> transforms the trajectory of young people, connecting them to a development plan that makes their dreams a reality. With the "Awakening Potentials" methodology, we offer intelligent matching with IEP (Individual Education Plan), financial education, training, and access to job and entrepreneurship opportunities.',
        'eleveit_intro_2': 'The company needed a responsive website that presented its proposal clearly and strengthened its digital presence. As a new brand in the market focused on education and technology, it was essential to build trust, explain services, and create a touchpoint capable of attracting and guiding young people interested in the program.',
        
        // Details
        'eleveit_client_value': 'Eleveit <br> Fortaleza, CE - BRA',
        'eleveit_services_list': '<li>UX Research & Strategy</li><li>Information Architecture</li><li>Interface Design (UI)</li><li>Interactive Prototyping</li>',
        'eleveit_role_value': 'Product Designer',

        // Narrative
        'eleveit_challenge_title': 'The Challenge',
        'eleveit_challenge_text': 'Eleveit already had robust internal logic, but lacked an experience layer (UX) that converted initial interest into action. The technical challenge was to create a linear journey for a young and diverse audience, eliminating cognitive overload and transforming a complex ecosystem into an intuitive and welcoming interface.',
        
        'eleveit_deliverables_title': 'Key Deliverables',
        'eleveit_deliverables_text': 'As a result of the design process, I delivered a complete ecosystem focused on scale: detailed UX Research, Sitemap and Navigation Flowcharts, High-fidelity Wireframes, and a modular Design System. The focus was ensuring the product wasn\'t just a site, but a tool ready to grow with the business.',
        
        'eleveit_uxui_title': 'Site Design (UX/UI)',
        'eleveit_uxui_text': 'The interface was built on the pillars of accessibility and modernity. I used Inter typography for its high digital reading performance and a blue-green gradient palette to evoke technology and trust. Information architecture was designed to build authority in the first few seconds, prioritizing the brand\'s social value before direct conversion.',
        
        'eleveit_dev_title': 'Development',
        'eleveit_dev_text': 'I used my background in Systems Analysis to ensure a frictionless handoff. Implementation was done via FlutterFlow, focusing on clean code structure and optimized performance. A 100% responsive interface was developed, ensuring the experience was identical on any device, integrating dynamic components facilitating content management by the Eleveit team.',

        // Impact
        'eleveit_impact_title': 'IMPACT',
        'eleveit_impact_subtitle': 'Both the initial launch and subsequent versions produced great results...',
        
        'eleveit_metric_1_title': 'Profitable',
        'eleveit_metric_1_desc': '<strong>+45% in registrations.</strong> The launch significantly increased sign-ups.',
        
        'eleveit_metric_2_title': 'Social Impact',
        'eleveit_metric_2_desc': '<strong>200+ youth reached.</strong> Project connected people to the program.',
        
        'eleveit_metric_3_title': 'Engagement',
        'eleveit_metric_3_desc': '<strong>+60% time on page.</strong> Optimized navigation increased retention.',
        
        'eleveit_metric_4_title': 'Recognition',
        'eleveit_metric_4_desc': '<strong>NPS 80+.</strong> Users positively evaluated clarity and empathy.',
        
        'eleveit_metric_5_title': 'Conversion',
        'eleveit_metric_5_desc': '<strong>-35% bounce rate.</strong> Exit rate dropped and engagement grew.',
        
        'eleveit_metric_6_title': 'Growth',
        'eleveit_metric_6_desc': '<strong>+30% organic traffic.</strong> Good SEO practices increased reach.',

        // Extra Sections
        'eleveit_user_title': 'The User',
        'eleveit_user_text_1': 'To build a solution that truly solves digital inclusion and employability problems, the design was grounded in a dense UX Research phase. Through competitive benchmarking techniques, in-depth interviews, and empathy maps, we could dive into the psychological and technical barriers faced by young people in career transition.',
        'eleveit_user_text_2': 'These processes allowed us to consolidate behavior patterns and needs culminating in the definition of our main persona: Péricles. He represents the academic-analytical profile seeking clarity and a linear roadmap to enter the professional market. Below, I detail how this discovery journey shaped product guidelines.',
        
        'eleveit_structure_title': 'Project <br> Structure',
        'eleveit_structure_text_1': 'To organize the landing page navigation and ensure a fluid experience, a sitemap was developed defining main pages and user interaction flow. The goal was to simplify access to the most relevant information — About Us, FAQ, and Contact — allowing the visitor to easily find what they are looking for without content overload.',
        'eleveit_structure_text_2': 'The flowchart represents the ideal user path from homepage access to navigation conclusion in main sections. The idea is to offer a clear, objective, and intuitive journey, with few clicks between entry point and final goal (getting info or contacting).',
        
        'eleveit_wireframe_low_title': 'WIREFRAMES',
        'eleveit_wireframe_low_text': 'In the low-fidelity wireframe stage, I sought to structure information hierarchy and validate navigation flow before applying Eleveit\'s visual identity. The focus was on defining element layout, responsive behavior, and clarity of the user journey between main sections.',

        'eleveit_ui_title': 'User Interface <br> Design',
        'eleveit_ui_intro': 'The style guide was developed with the aim of ensuring visual consistency and a modern identity for the Eleveit platform. The choice of blue-green gradient conveys technology and accessibility, reinforcing the project\'s mission to connect youth to the professional future.',
        'eleveit_ui_list': '<li class="project-intro-text mb-4"> <strong>Typography:</strong> The Inter family was chosen for its excellent performance on digital screens, readability, and contemporary style. Weight and size variations create a clear hierarchy between titles, subtitles, and text.</li> <li class="project-intro-text mb-4"> <strong>Buttons and Cards: </strong> Two button styles (solid and outline) were defined to create contrast between primary and secondary actions. Cards follow the same visual pattern, using rounded corners and subtle shadows to convey modernity and depth.</li> <li class="project-intro-text mb-4"> <strong>Iconography: </strong> Minimalist and universal icons reinforce visual interface communication, prioritizing clarity and accessibility.</li>',

        'eleveit_wireframe_hi_title': 'High Fidelity <br> Wireframe',
        'eleveit_wireframe_hi_text': 'In this stage, Eleveit\'s visual identity came to life through a cohesive Design System. The choice of Inter typography was not just aesthetic; its exceptional readability on digital screens ensures the user absorbs information without visual fatigue.',

        'eleveit_mobile_title': 'High Fidelity: <br> Mobile',
        'eleveit_mobile_text_1': 'As we know the mobile-first concept is essential today, the focus on responsive design was a priority. On mobile, the interface was optimized for single-thumb navigation, keeping interactive elements in easy-reach zones.',
        'eleveit_mobile_text_2': 'We adapted information density to avoid overload on smaller screens, ensuring the enrollment flow and education contents remain fluid and accessible on any device. The result is a modern, lightweight, and technically scalable interface, ready to provide a frictionless handoff for development.',



        // --- PROJECT: JD DIGITAL ---
        'jd_hero_title': 'About the <br> Project',
        'jd_intro_1': '<strong class="text-danger">Juventude Digital</strong> is a program by Fortaleza City Hall qualifying youth for the tech market, launched in October 2021 as a permanent public policy. It is coordinated by the <strong>Foundation for Science, Technology and Innovation of Fortaleza (Citinova)</strong>, in partnership with the Youth Innovation Institute and the Youth and Education secretariats. It is the City Hall\'s main technological training hub. The <strong>redesign</strong> project was motivated by the need to transform the institutional portal into a high-performance educational platform focused on the student journey.',
        'jd_intro_2': '<strong class="text-danger">JD has already trained over 44,000 young people, held over 200 courses and workshops, and reached 48,200 people in about 100 events.</strong>',
        'jd_intro_3': 'I worked on the full solution cycle: from <strong>technical analysis and usability testing</strong> of the previous platform, identifying bugs and flow bottlenecks, to the final <strong>front-end</strong> implementation, ensuring an accessible interface prepared to scale the program\'s social impact.',
        
        // Details
        'jd_client_value': 'JD Digital <br> Fortaleza, CE - BRA',
        'jd_services_list': '<li>UX/UI Design & Redesign</li><li>Front-end Development</li><li>Platform Analysis & QA Testing</li><li>Interaction Design & Prototyping</li>',
        'jd_role_value': 'Product Designer & Front-end Developer',

        // Narrative
        'jd_challenge_title': 'The Challenge',
        'jd_challenge_text': 'The biggest technical challenge was information fragmentation. The legacy portal presented barriers in course discovery and lack of clarity in academic notices, resulting in low student retention, plus a lack of specific functions exposing other info like constant course tracks, photo galleries, and event descriptions. The team\'s mission was to structure an information architecture unifying notices, events, and learning tracks into a single intuitive ecosystem, eliminating dependence on external social networks for communicating deadlines and opportunities.',
        
        'jd_deliverables_title': 'Key Deliverables',
        'jd_deliverables_text': 'A robust digital ecosystem was developed comprising: new Academic Notice pages with status filters, interactive Event Calendar, Knowledge Tracks system (Design, Data, Dev, AI), immersive Event Gallery, and a personalized Student Area for history and certificate management. Each delivery was validated to ensure the flow between course discovery and enrollment was as short as possible.',
        
        'jd_uxui_title': 'Site Design (UX/UI)',
        'jd_uxui_text': 'Montserrat typography and a vibrant color palette were used to communicate innovation and energy to the young audience. The interface was built on a modular Design System focused on clear visual hierarchy and accessibility. Also designed were components highlighting trending courses and simplifying the reading of dense documents, transforming a bureaucratic portal into a fluid, modern, and visually attractive experience.',
        
        'jd_dev_title': 'Development',
        'jd_dev_text': 'I was responsible for helping translate the redesign into front-end code, prioritizing performance and visual fidelity. My role included an intense technical testing phase on the pre-project platform, mapping error mechanisms and critical bugs. These data generated the insights needed to create a clean and resilient interface, integrating dynamic features allowing JD management to update content agilely and securely.',

        // Impact
        'jd_impact_title': 'IMPACT & <br>LEARNINGS',
        
        'jd_metric_1_title': 'Engagement and Social Proof <br>(The Gallery)',
        'jd_metric_1_desc': '<strong>Organic Growth via Storytelling.</strong> Implementing the event gallery with immersive descriptions transformed the program\'s visual perception. The result was a significant increase in spontaneous sharing by students on social media, strengthening JD Digital\'s brand authority and attracting new talent with zero acquisition cost.',
        
        'jd_metric_2_title': 'Retention and Security <br> (The Tracks)',
        'jd_metric_2_desc': '<strong>Reducing Choice Paralysis.</strong> Structuring courses into thematic tracks (Design, Dev, Data, AI) offered the "GPS" young people needed. By providing a linear and safe path, the platform reduced dropout rates and increased course completion rates, ensuring students know exactly where they are and where their career can go.',
        
        'jd_metric_3_title': 'Experience and Usability',
        'jd_metric_3_desc': '<strong>High-Performance Navigation.</strong> Redesigning the information architecture eliminated previous platform flow bottlenecks. Interaction became more fluid and intuitive, allowing access to notices and enrollments to be performed agilely, reflecting directly on user satisfaction and institutional credibility.',
        
        'jd_metric_4_title': 'Design as a Tool for Trust:',
        'jd_metric_4_desc': '<strong>Modern style is trust.</strong> I learned that for a public program aimed at youth, modern aesthetics is a prerequisite for trust. A portal that looks "outdated" repels digital talent. The premium visual attracted the most demanding tech audience.',
        
        'jd_metric_5_title': 'Information Architecture <br> is Career',
        'jd_metric_5_desc': '<strong>Strategic Asset Management.</strong> Organizing over 200 courses isn\'t just a labeling task, it\'s a career guidance task. Understanding track hierarchy taught me to design flows that educate while navigating.',
        
        'jd_metric_6_title': 'Qualitative vs. <br> Quantitative Value',
        'jd_metric_6_desc': '<strong>Features beyond UI design.</strong> Even without complex tracking tools initially, qualitative interviews proved that emotional design (like the photo gallery) is a public project\'s biggest social engagement driver.',

        // Extra Sections
        'jd_user_title': 'The User',
        'jd_user_text': 'The success of the JD Digital portal redesign depended directly on immersing in its target audience\'s reality: <strong>young talents in Fortaleza seeking tech ascension</strong>. Through Product Discovery processes, we consolidated Nathan\'s profile. He represents the autonomous and analytical student whose pains with information fragmentation on social media served as the basis for the platform\'s new centralization and career management features.',
        
        'jd_structure_title': 'Project <br> Structure',
        'jd_structure_text': 'To unify a complex ecosystem with over 200 courses and multiple notices, a modular Information Architecture was designed. The focus was optimizing information search, ensuring the student navigates intuitively between learning and opportunities. Below are some structure highlights:',
        'jd_structure_list': '<li class="project-intro-text mb-4"><strong>Opportunity Centralization:</strong> Creation of the "For You" nav, acting as a dynamic hub for Notices and Events, separating seasonal content from the fixed course grid.</li><li class="project-intro-text mb-4"><strong>Goal-Oriented Navigation:</strong> Clear categorization between learning tracks (career focus) and user support (FAQ and Contact).</li><li class="project-intro-text mb-4"><strong>Conversion Flow:</strong> A hierarchy designed to reduce clicks to enrollment, prioritizing student retention within the portal.</li>',

        'jd_ui_title': 'User Interface <br> Design',
        'jd_ui_text': 'The verdict for the Style Guide was conservative modernization. We respected original visual assets, focusing on technical element restructuring:',
        'jd_ui_list': '<li class="project-intro-text mb-4"> <strong>Typography:</strong> The Montserrat family was kept for its readability and tech vibe, now with a stricter weight hierarchy (SemiBold).</li> <li class="project-intro-text mb-4"> <strong>Colors:</strong> The original palette was optimized to ensure better accessibility and contrast levels, maintaining the characteristic vibrant gradient.</li> <li class="project-intro-text mb-4"> <strong>Cards & Buttons: </strong> I introduced rounded corners and soft shadows to create depth and a friendlier, tactile aspect.</li>',

        'jd_wireframe_hi_title': 'Wireframes: <br> high fidelity',
        'jd_wireframe_hi_text': 'Since the portal\'s structural foundation was established, I opted to advance directly to High Fidelity, concentrating efforts on refining the experience and creating a dynamic visual system. The goal was to translate information density, like between Knowledge Tracks, Notices, and Events, into a fluid, accessible, and visually vibrant interface. Each screen was designed to ensure the student finds what they need in seconds, transforming a public platform\'s complexity into an intuitive, responsive, and scale-ready ecosystem.'
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

        // ... RECICLO (Español) ...
        'reciclo_hero_title': 'Sobre el <br> Proyecto',
        'reciclo_intro': 'El <span class="text-success">Re-ciclo</span> es una plataforma innovadora de economía circular desarrollada por el Ayuntamiento de Fortaleza. El proyecto actúa en la logística de recolección selectiva puerta a puerta, utilizando micromovilidad sostenible (triciclos eléctricos) para conectar ciudadanos y empresas con asociaciones de recolectores. Actué como Diseñadora UX/UI, siendo parte del equipo responsable de traducir un modelo de servicio público complejo en una interfaz simplificada, enfocada en promover la inclusión socioeconómica de los recolectores y elevar el índice de reciclaje de la capital.',
        
        'project_label_client': 'Cliente',
        'project_label_services': 'Servicios',
        'project_label_role': 'Mi rol',
        'reciclo_services_list': '<li>Descubrimiento de Producto</li><li>Diseño de Interfaz (UI)</li><li>Investigación UX</li><li>Prototipado Interactivo</li>',
        
        'reciclo_challenge_title': 'El Desafío',
        'reciclo_challenge_text': 'El mayor desafío técnico fue la heterogeneidad de los usuarios. Necesitábamos diseñar un ecosistema que atendiera simultáneamente tres realidades: el Recolector (que opera en campo y exige carga cognitiva bajísima), el Ciudadano (que busca conveniencia extrema) y la Empresa (que necesita previsibilidad y prueba de impacto). Nuestra misión fue unificar estas necesidades en un flujo continuo, donde la programación se realizara en segundos y la gestión logística fuera transparente y eficaz.',
        
        'reciclo_deliverables_title': 'Principales Entregables',
        'reciclo_deliverables_text': 'Se entregó un proyecto de experiencia end-to-end, compuesto por: Flujos de Usuario específicos para cada perfil, Prototipos de alta fidelidad validados para uso móvil, y una estructura de Arquitectura de Información que organiza la programación, el rastreo de la recolección y el destino correcto de los residuos. El foco fue garantizar que el sistema no tuviera barreras de entrada, estimulando la adopción de la cultura de reciclaje en toda la ciudad.',
        
        'reciclo_uxui_title': 'Diseño del Sitio (UX/UI)',
        'reciclo_uxui_text': 'Se utilizó un lenguaje visual claro, táctil y amigable. La interfaz fue diseñada con componentes de alta accesibilidad, como botones grandes e íconos autoexplicativos, fundamentales para el uso del recolector durante la ruta. La paleta de colores y la iconografía fueron pensadas para comunicar sostenibilidad y modernidad, transformando la interfaz y los flujos de usuarios finales en jornadas legítimas de confianza y organización.',
        
        'reciclo_dev_title': 'Desarrollo',
        'reciclo_dev_text': 'Trabajé en estrecha colaboración con el equipo de ingeniería para garantizar la viabilidad técnica del diseño. Estructuré los archivos para un handoff sin fricciones, proporcionando un Design System documentado que facilitó la implementación del front-end y la integración con el panel administrativo en Django.',

        'reciclo_impact_title': 'IMPACTO Y <br>APRENDIZAJES',
        
        'reciclo_metric_1_title': 'Dignidad e Ingresos',
        'reciclo_metric_1_desc': '<strong>Inclusión de la Base de la Pirámide.</strong> Al formalizar y facilitar la recolección vía triciclos eléctricos, el proyecto eliminó el estigma social y el esfuerzo físico exhaustivo, garantizando una fuente de ingresos estable y el reconocimiento de estos profesionales como agentes ambientales esenciales.',
        
        'reciclo_metric_2_title': 'Gamificación como Cambio de Hábito',
        'reciclo_metric_2_desc': 'Aprendí que la tecnología por sí sola no recicla nada; el diseño debe motivar. Usar elementos de gamificación (como el concepto "Recicla y Gana") fue fundamental para transformar una tarea aburrida en un hábito placentero y gratificante para el ciudadano.',
        
        'reciclo_metric_3_title': 'Eficiencia e Incentivos',
        'reciclo_metric_3_desc': '<strong>Viabilidad de la Economía Circular.</strong> Estratégicamente alineado a la Ley de Incentivo al Reciclaje, el proyecto contribuyó a un ecosistema capaz de captar inversiones masivas, demostrando que el diseño sostenible es altamente rentable.',
        
        'reciclo_metric_4_title': 'Diseño para Contextos Extremos',
        'reciclo_metric_4_desc': 'Diseñar para el recolector me enseñó sobre usabilidad en condiciones adversas. La interfaz necesita ser legible y táctil para ser usada rápidamente durante las rutas. La simplicidad aquí no es estética, es herramienta de trabajo.',
        
        'reciclo_metric_5_title': 'Cumplimiento y Escala',
        'reciclo_metric_5_desc': '<strong>Reducción de Residuos en Vertederos.</strong> A través de una interfaz enfocada en programación rápida, potenciamos la aplicación de la Política Nacional de Residuos Sólidos. La facilidad de separación aumentó el índice de reciclaje municipal, preservando recursos naturales y transformando "basura" en nuevos insumos industriales de forma escalable.',
        
        'reciclo_metric_6_title': 'Intermediación Público-Privada',
        'reciclo_metric_6_desc': 'Este proyecto me enseñó a diseñar flujos que atienden simultáneamente las exigencias burocráticas del gobierno y la necesidad de conveniencia del usuario común, unificando intereses distintos en una única jornada fluida.',

        'reciclo_user_title': 'El Usuario',
        'reciclo_user_text': 'El éxito de Re-ciclo depende de la armonía entre tres actores fundamentales. Para diseñar una solución que realmente transformara la gestión de residuos en Fortaleza, nos sumergimos en el día a día de Afonso, Marcelo y Júlia. El desafío del diseño fue crear una interfaz que eliminara la fricción entre estos perfiles.',
        
        'reciclo_structure_title': 'Estructura del <br> Proyecto',
        'reciclo_structure_text': 'El sitemap de Re-ciclo fue diseñado para simplificar la jornada del descarte sostenible. Estructuramos la navegación en módulos que primero educan al usuario y luego facilitan la acción directa. La segmentación entre Persona Física y Jurídica es fundamental para garantizar funcionalidades personalizadas.',
        
        'reciclo_ui_title': 'Diseño de Interfaz <br> de Usuario',
        'reciclo_ui_text': 'El veredicto visual de Re-ciclo es la modernización de la sostenibilidad. A través de una tipografía amigable y una paleta cromática diversa, creamos una interfaz que comunica energía y responsabilidad social, fortaleciendo la cultura de la economía circular.',
        
        'reciclo_wireframe_title': 'Wireframe de Alta <br> Fidelidad',
        'reciclo_wireframe_text': 'La etapa de alta fidelidad para escritorio fue diseñada para ser el centro de control del reciclaje. El foco principal fue la consolidación de datos y transparencia: creamos dashboards que muestran métricas reales de impacto social y ambiental.',
        
        'reciclo_mobile_title': 'Wireframe de Alta <br> Fidelidad: Móvil',
        'reciclo_mobile_text': 'El diseño móvil de Re-ciclo fue concebido bajo la premisa de baja fricción y usabilidad táctil. Para el ciudadano común, el flujo de programación fue optimizado para completarse en pocos toques, eliminando barreras cognitivas.',


         // --- PROYECTO: PONTE DE ENCONTRO ---
        'ponte_hero_title': 'Sobre el <br> Proyecto',
        'ponte_intro': 'El <span class="text-primary">Ponte de Encontro</span> es una plataforma vital desarrollada para la FUNCI (Fundación del Niño y la Familia Ciudadana) en asociación con Citinova. El proyecto centraliza el servicio especializado de abordaje social en Fortaleza, facilitando la identificación y acogida de niños y adolescentes en situación de vulnerabilidad. Como mi primera experiencia liderando un proyecto, coordiné todo el ciclo de desarrollo, desde la escucha activa de las necesidades de la FUNCI hasta la entrega técnica de un sistema que actúa como puente directo entre el ciudadano y la red socioasistencial.',
        
        // Detalles
        'ponte_client_value': 'FUNCI <br> Fortaleza, CE - BRA',
        'ponte_services_list': '<li>Liderazgo de Proyecto</li><li>Diseño UX/UI</li><li>Desarrollo Front-end</li><li>Admin Experience (AX)</li>',
        'ponte_role_value': 'Líder de Proyecto & Desarrolladora Front-end',

        // Narrativa
        'ponte_challenge_title': 'El Desafío',
        'ponte_challenge_text': 'El mayor desafío fue la <span class="text-dark">simplificación de la complejidad</span>. Los proyectos gubernamentales suelen tener requisitos densos y burocráticos. Mi misión fue traducir estas necesidades en una interfaz que estimulara la acción del ciudadano. Sabemos que la población evita plataformas complejas, especialmente para acciones sociales. Por eso, el enfoque técnico fue eliminar cualquier barrera cognitiva, garantizando que el acto de denunciar o pedir ayuda fuera rápido, intuitivo y accesible para cualquier nivel de alfabetización digital.',
        
        'ponte_deliverables_title': 'Principales Entregables',
        'ponte_deliverables_text': 'Entregamos un ecosistema completo enfocado en <span class="text-dark">agilidad y transparencia</span>: un portal de denuncias mobile-first con flujos simplificados, una herramienta de consulta de protocolos en tiempo real y un <span class="text-dark">Panel Administrativo robusto</span> para la gestión de equipos móviles. Desarrollé flujogramas de procesos que garantizaron que, desde el clic inicial hasta la atención del niño, no hubiera cuellos de botella de información, transformando el sistema en una herramienta de trabajo ágil para los educadores sociales.',
        
        'ponte_uxui_title': 'Diseño del Sitio (UX/UI)',
        'ponte_uxui_text': 'Construí una interfaz basada en el objetivo de no tener <span class="text-dark">fricciones</span> o <span class="text-dark">curvas de aprendizaje</span>. Utilicé una paleta de colores acogedora y tipografía legible para transmitir seguridad y seriedad. Cada elemento de UI fue validado para garantizar rapidez en la inserción de datos. El diseño aquí no es solo estético, sino esencialmente funcional para un sistema con uso intuitivo. La arquitectura fue pensada para que el usuario sienta que "hacer el bien es fácil", utilizando componentes táctiles y formularios inteligentes que reducen el tiempo de llenado.',
        
        'ponte_dev_title': 'Desarrollo',
        'ponte_dev_text': 'En este proyecto, actué intensamente en el desarrollo técnico, utilizando un stack moderno compuesto por <span class="text-dark">Node.js, Webpack y SCSS</span> para garantizar un front-end de alto rendimiento y modularizado. La estructura fue construida sobre <span class="text-dark">Bootstrap</span> para asegurar responsabilidad total, ya que la mayoría de las interacciones ocurren vía móvil en las calles. En el back-end, utilizamos <span class="text-dark">Django</span>, lo que nos permitió crear una interfaz administrativa (Admin) personalizada para la FUNCI, facilitando la gestión de datos complejos con la seguridad que exige un proyecto público.',

        // Impacto
        'ponte_impact_title': 'IMPACTOS Y APRENDIZAJES',
        
        'ponte_metric_1_title': 'Eficiencia en el Abordaje',
        'ponte_metric_1_desc': '<strong>Aumento en la Agilidad de Denuncia.</strong> Al diseñar una interfaz mobile-first enfocada en baja fricción, redujimos el tiempo promedio de llenado del formulario de denuncia. Esto permitió que los ciudadanos realizaran el reporte en segundos, garantizando que el equipo móvil recibiera los datos en tiempo real y actuara con mayor precisión geográfica.',
        
        'ponte_metric_2_title': 'Alcance Social y Visibilidad',
        'ponte_metric_2_desc': '<strong>+680 Identificaciones Realizadas.</strong> El sistema actuó como un facilitador técnico para el registro de niños y adolescentes acompañados. La claridad visual y la facilidad de consulta de protocolos generaron una mayor confianza de la población en el canal oficial, resultando en un aumento directo en el número de acogimientos y atenciones sociales documentadas.',
        
        'ponte_metric_3_title': 'Educación y <br>Derechos Humanos',
        'ponte_metric_3_desc': '<strong>Democratización de la Información.</strong> Además de la herramienta de denuncia, el portal se convirtió en un hub de consulta de derechos. Registramos un alto volumen de accesos a las secciones informativas sobre el Estatuto del Niño y del Adolescente (ECA) y leyes municipales, educando a la población sobre las condiciones que configuran violación de derechos.',
        
        'ponte_metric_4_title': 'Digitalización y Trazabilidad',
        'ponte_metric_4_desc': '<strong>Fin del Gap de Datos.</strong> La migración del proceso manual al sistema administrativo (Django Admin) que desarrollamos permitió la trazabilidad total de cada caso. Ahora, la FUNCI posee métricas reales para planificar políticas públicas basadas en lugares de mayor incidencia y tipos de ocurrencia más frecuentes.',
        
        'ponte_metric_5_title': 'La Importancia del Admin',
        'ponte_metric_5_desc': 'Diseñar el lado administrativo para los educadores sociales fue tan vital como el portal público. Crear dashboards simples para quienes están en el campo de batalla es lo que realmente hace que la operación sea sostenible.',
        
        'ponte_metric_6_title': 'Diseño como facilitador y liderazgo',
        'ponte_metric_6_desc': 'Aprendí que, en proyectos sociales, el diseño sirve para construir un puente de confianza entre el ciudadano y el gobierno, y liderar este proyecto me enseñó a gestionar expectativas de stakeholders públicos y garantizar un buen y adecuado desarrollo.',

        // Secciones Extras
        'ponte_user_title': 'El Usuario',
        'ponte_user_text_1': 'Para diseñar el Ponte de Encontro, fue necesario mirar dos realidades distintas. Por un lado, <span class="text-dark">el niño y el adolescente</span>, el beneficiario final que vive en un ciclo de invisibilidad y privación de derechos. Por otro, el <span class="text-dark">ciudadano activo</span>, representado por Alberto, que siente la incomodidad social, pero muchas veces no actúa por miedo a la burocracia.',
        'ponte_user_text_2': 'El mapeo de estas personas reveló que el éxito del proyecto dependía de eliminar la <span class="text-dark">fricción exacerbada y curva de aprendizaje del sistema</span>. Alberto necesita un gatillo de denuncia instantáneo y seguro para que el niño deje de ser invisible. El diseño fue concebido para ser el eslabón más corto y humano posible entre la voluntad de ayudar y la acción del poder público.',
        
        'ponte_structure_title': 'Estructura del <br> Proyecto',
        'ponte_structure_text': 'Para un proyecto de abordaje social, la arquitectura de información debe ser el camino más corto entre la percepción de una violación y la acción protectora. Diseñé una estructura ágil e intuitiva, eliminando ruidos para que el ciudadano pueda actuar en el momento exacto de la necesidad.',
        
        'ponte_wireframe_low_title': 'WIREFRAMES INICIALES',
        'ponte_wireframe_low_text': 'En la etapa de wireframes de fidelidad media, mi enfoque como Líder del Proyecto fue la eliminación de barreras cognitivas. Diseñar para el servicio social exige que el ciudadano no necesite gastar energía pensando "cómo usar", sino enfocarse en la acción de ayudar. Estructuré la jerarquía de información priorizando el flujo de denuncia y consulta, validando la disposición de los elementos antes de la aplicación de la identidad visual. El enfoque técnico estuvo en:',
        'ponte_wireframe_low_list': '<li class="project-intro-text mb-4"> <strong>Formularios Simplificados:</strong> Agrupación lógica de campos para reducir el tiempo de llenado.</li><li class="project-intro-text mb-4"> <strong>Navegación Mobile-First:</strong> Garantía de que todos los componentes fueran táctiles y funcionales para el uso en tránsito, ambiente donde ocurren la mayoría de los abordajes y denuncias.</li>',

        'ponte_ui_title': 'Diseño de Interfaz <br> de Usuario',
        'ponte_ui_text_1': 'El desafío visual de Ponte de Encontro fue equilibrar la seriedad de un servicio público con la sensibilidad exigida por los derechos humanos. Diseñé una Guía de Estilo enfocada en alta visibilidad y acogida, garantizando que la interfaz fuera, al mismo tiempo, una alerta para la sociedad y un puerto seguro para quienes buscan ayuda.',
        'ponte_ui_list': '<li class="project-intro-text mb-4"> <strong>Colores Estratégicos:</strong> La paleta utiliza el Naranja (#DF9A14) y el Amarillo (#FFCC00) para evocar atención y energía, garantizando que el portal se destaque como una herramienta de utilidad pública. El Azul (#2B5FC5) se insertó para traer el contrapunto de confianza y credibilidad institucional.</li> <li class="project-intro-text mb-4"> <strong>Tipografía Dinámica: </strong> Combiné la fuente Righteous en los títulos, por su personalidad moderna y llamativa, con Roboto en los textos de lectura, garantizando accesibilidad y fluidez en la absorción de información densa sobre leyes y protocolos.</li> <li class="project-intro-text mb-4"> <strong>Iconografía Humanizada: </strong> Desarrollé un conjunto de íconos ilustrados que facilitan la identificación rápida de las causas (trabajo infantil, explotación, etc). Esta elección reduce el impacto psicológico del tema, haciendo la navegación más amigable e intuitiva para el ciudadano.</li>',

        'ponte_wireframe_hi_title': 'Wireframe de Alta <br> Fidelidad',
        'ponte_wireframe_hi_text': 'La etapa de alta fidelidad tradujo el compromiso social de Ponte de Encontro en una interfaz de alto impacto y baja fricción. Utilicé el Design System para garantizar que la navegación fuera acogedora, pero extremadamente funcional. El foco principal fue la jerarquía visual: el botón de denuncia y la información sobre derechos infantiles ganaron destaque inmediato, guiando al ciudadano de forma lineal. Implementamos herramientas de accesibilidad nativas y una arquitectura de información que organiza desde la concienciación hasta el monitoreo administrativo vía Django.',
        'ponte_label_desktop_web': 'Wireframes - escritorio (Sitio web)',
        'ponte_label_desktop_admin': 'Wireframes - escritorio (Admin)',

        'ponte_mobile_title': 'Wireframe de Alta <br> Fidelidad: Móvil',
        'ponte_mobile_text_1': 'Como la mayoría de las interacciones de denuncia ocurren en tránsito, la versión móvil fue el corazón del proyecto. Me enfoqué en un diseño altamente táctil y responsivo, optimizando formularios densos para llenado rápido. El objetivo técnico fue reducir el tiempo de interacción para que el relato de violación de derechos ocurra en el momento exacto de la observación. El resultado es una herramienta ligera, de alto rendimiento e inclusiva, garantizando que la tecnología actúe como un facilitador inmediato de protección social en la palma de la mano.',
        'ponte_mobile_text_2': 'Adaptamos la densidad de información para evitar sobrecarga en pantallas más pequeñas, garantizando que el flujo de inscripción y los contenidos de educación permanezcan fluidos y accesibles en cualquier dispositivo. El resultado es una interfaz moderna, ligera y técnicamente escalable, lista para proporcionar un handoff sin fricciones para el desarrollo.',


        // --- PROYECTO: PII CKAN ---
        'pii_hero_title': 'Sobre el <br> Proyecto',
        'pii_intro': 'El <span class="text-dark">PII CKAN</span> es una solución de gobernanza y privacidad de datos desarrollada en colaboración con Citinova para el ecosistema de Datos Abiertos de Fortaleza. La herramienta actúa como un escáner inteligente que automatiza la detección de información personalmente identificable (PII) en conjuntos de datos masivos. El proyecto fue <strong>ganador del 1er lugar en el Premio Fortaleza en el Control</strong> (categoría Transparencia), reconocido por su eficacia en garantizar que la transparencia pública camine junto a la protección de la privacidad de los ciudadanos.',
        
        // Detalles
        'pii_client_value': 'CITINOVA, Maurício Bezerra (Autor del proyecto) <br> Fortaleza, CE - BRA',
        'pii_services_list': '<li>Ingeniería de Requisitos</li><li>Diseño UX/UI</li><li>Desarrollo Front-end</li><li>QA & Pruebas de Seguridad</li>',
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
        
        'pii_metric_1_title': 'Seguridad y Privacidad <br> (LGPD)',
        'pii_metric_1_desc': '<strong>Riesgo de Exposición Mitigado.</strong> La herramienta garantizó una capa de protección proactiva, impidiendo que datos sensibles (PII) fueran publicados inadvertidamente. El impacto directo fue el blindaje jurídico y ético del municipio, asegurando que la transparencia pública no comprometa el derecho a la privacidad de los ciudadanos según la LGPD.',
        
        'pii_metric_2_title': 'Eficiencia de Auditoría',
        'pii_metric_2_desc': '<strong>Optimización del Ciclo de Publicación.</strong> Antes de PII CKAN, la revisión de conjuntos de datos masivos era un proceso manual propenso a errores humanos. La automatización permitió escanear volúmenes masivos de datos en minutos, devolviendo tiempo valioso a los funcionarios y acelerando la actualización del portal de Datos Abiertos.',
        
        'pii_metric_3_title': 'Calidad de <br>Datos Abiertos',
        'pii_metric_3_desc': '<strong>Estandarización de Transparencia.</strong> El uso de la herramienta elevó el nivel de madurez de los datos enviados por las secretarías. Al proporcionar un informe claro de errores, el sistema educó a los funcionarios sobre las mejores prácticas de tratamiento de datos, resultando en un portal de Datos Abiertos mucho más íntegro y confiable para la población.',
        
        'pii_metric_4_title': 'Reconocimiento Técnico <br> (El Premio)',
        'pii_metric_4_desc': '<strong>Sello de Excelencia en Innovación.</strong> Ganar el 1er lugar en el Premio Fortaleza en el Control sirve como la métrica máxima de validación. El proyecto fue auditado y premiado por una comisión de especialistas de la USP y UFC, demostrando su eficacia técnica y su valor inestimable para la administración pública.',
        
        'pii_metric_5_title': 'El Puente entre Código y LGPD.',
        'pii_metric_5_desc': '<strong>Reducir la fricción para los colaboradores.</strong> Este proyecto me permitió entender cómo traducir leyes complejas (como la LGPD) en lógica de programación (Regex y Python). Fue mi mayor ejercicio de transponer requisitos jurídicos a una interfaz técnica simplificada.',
        
        'pii_metric_6_title': 'Colaboración en Open Source.',
        'pii_metric_6_desc': '<strong>La buena documentación es esencial.</strong> Participar en un proyecto de código abierto para el gobierno me enseñó la importancia de crear interfaces escalables y documentación clara, permitiendo que otros organismos repliquen la solución fácilmente.',

        // Secciones Extras
        'pii_user_title': 'El Usuario',
        'pii_user_text': 'El diseño de PII CKAN nació del diagnóstico de un "cuello de botella" invisible: <strong>la revisión de datos personales en archivos brutos (CSV, PDF, XLSX).</strong> Presentamos a Ricardo, un gestor de datos pragmático cuya productividad está limitada por procesos lentos y burocráticos. El mapeo de su viaje reveló la necesidad crítica de un "filtro de seguridad" proactivo. El enfoque del proyecto fue <strong>transformar el miedo al error humano en una experiencia de auditoría rápida, intuitiva y técnicamente robusta</strong>, devolviendo tiempo y seguridad institucional al usuario.',
        
        'pii_structure_title': 'Estructura del <br> Proyecto',
        'pii_structure_text': 'Para transformar una herramienta de script (Python) en una plataforma intuitiva, diseñé una estructura basada en la visibilidad de procesos y auditabilidad. El objetivo fue garantizar que el gestor de datos tenga control total sobre los escaneos de seguridad, desde la configuración de parámetros hasta el veredicto final del informe.',
        
        'pii_wireframe_low_title': 'WIREFRAMES',
        'pii_wireframe_low_text': 'Para PII CKAN, utilicé wireframes de fidelidad media para validar la jerarquía de navegación antes de la implementación. El enfoque fue crear un <strong>flujo de trabajo de auditoría de extremo a extremo</strong>. Diseñé flujos donde el usuario pudiera configurar un escaneo masivo en pocos clics, seleccionando patrones específicos de LGPD (como DNI y direcciones). La inclusión de un <strong>Historial de Informes (Tasks)</strong> permite al gestor una visión retrospectiva del cumplimiento de datos, transformando una tarea técnica exhaustiva en un proceso de gestión ágil, seguro y escalable.',

        'pii_ui_title': 'Diseño de Interfaz <br> de Usuario',
        'pii_ui_text': 'El desafío visual de PII CKAN fue transformar un proceso de auditoría técnica en una experiencia intuitiva y segura. Para ello, desarrollé un Sistema de Diseño enfocado en semántica visual, donde cada color juega un papel crítico en la toma de decisiones del gestor.',
        'pii_ui_list': '<li class="project-intro-text mb-4"> <strong>Paleta de Colores Funcional: </strong> Utilicé el <strong>Verde Azulado (#0C87B3) </strong>como color primario para transmitir tecnología y estabilidad. El uso del <strong>Rojo (#FF0000)</strong> y del <strong>Verde (#057E03)</strong> es estrictamente funcional, señalando instantáneamente archivos con fuga de datos (Alerta) o conjuntos de datos en cumplimiento (Seguro).</li> <li class="project-intro-text mb-4"> <strong>Tipografía Sistémica (Inter): </strong> La elección de la familia Inter fue estratégica. Al ser una fuente diseñada específicamente para interfaces de computadora, garantiza una legibilidad excepcional en tablas densas, registros técnicos e informes complejos, reduciendo la fatiga visual del usuario.</li> <li class="project-intro-text mb-4"> <strong>Componentización Modular: </strong> Desarrollé botones y tarjetas con estados claros (Sólido y Contorno), permitiendo un <strong>handoff ágil y escalable.</strong> Esta estructura modular garantiza que el sistema pueda crecer con nuevas funcionalidades sin perder consistencia visual o técnica.</li>',

        'pii_wireframe_hi_title': 'Wireframe de Alta <br> Fidelidad',
        'pii_wireframe_hi_text_1': 'La etapa de alta fidelidad de PII CKAN fue diseñada para ofrecer máxima transparencia sobre los procesos de backend. Dado que los escaneos de datos masivos pueden tomar tiempo, el enfoque de la interfaz fue mantener al usuario informado a través de bucles de retroalimentación continuos: barras de progreso dinámicas, contadores de evidencia en tiempo real y señalización clara de estados (Buscando, Finalizado o Error).',
        'pii_wireframe_hi_text_2': 'Diseñé la experiencia para ser "a prueba de errores". Un ejemplo crítico es el modal de cancelación de escaneo, que evita acciones accidentales en procesos computacionalmente costosos. Transformamos parámetros técnicos de configuración (como URLs de portal y directorios de archivos) en formularios intuitivos con validación inmediata, garantizando que el gestor de datos tenga el control total de la herramienta sin necesidad de conocimientos de programación.',


        // --- PROYECTO: AJDC ---
        'ajdc_hero_title': 'Sobre el <br> Proyecto',
        'ajdc_intro': '<strong class="text-primary">AJDC Clean Energy</strong> es un ecosistema de gestión inteligente desarrollado a medida para el sector de energía solar. El proyecto nació del desafío de centralizar procesos administrativos que eran fragmentados, manuales y burocráticos, transformándolos en una jornada digital fluida e intuitiva. Mi misión fue diseñar una interfaz que redujera la carga cognitiva del equipo financiero, integrando desde el registro dinámico de clientes hasta la automatización de facturas conectadas directamente a los sistemas bancarios. El resultado es una herramienta que no solo organiza datos, sino que acelera la generación de ingresos y ofrece visibilidad estratégica en tiempo real.',
        'ajdc_intro_2': 'Actué desde la fase de Ingeniería de Requisitos, mapeando procesos internos y flujos de usuario, hasta la entrega final del código. La solución centraliza el control de facturas y boletos a través de una arquitectura basada en APIs personalizadas, integrando automatizaciones vía IA (n8n) para una gestión financiera sin fallos humanos.',
        
        // Detalles
        'ajdc_client_value': 'AJDC Clean Energy <br> Fortaleza, CE - BRA',
        'ajdc_services_list': '<li>Descubrimiento y Estrategia de Producto</li><li>Diseño UX/UI y Prototipado</li><li>Desarrollo Front-end</li><li>Integración de API y Automatización</li>',
        'ajdc_role_value': 'Diseñadora de Producto y Desarrolladora Front-end',

        // Narrativa
        'ajdc_challenge_title': 'El Desafío',
        'ajdc_challenge_text': 'Eliminar el "cuello de botella" operativo. La empresa perdía horas valiosas en llenados manuales y consultas dispersas. El objetivo técnico era crear una arquitectura de información donde el administrador pudiera realizar acciones complejas (como registrar clientes, hacer consultas, crear facturas y tener acceso a métricas importantes) en pocos clics, sin margen de error.',
        
        'ajdc_deliverables_title': 'Principales Entregables',
        'ajdc_deliverables_text': 'Registro de clientes y facturas, consultas relacionadas, desarrollo de un Dashboard Administrativo, flujos de facturación automatizados, sistema de filtros avanzados para consulta de pagos y una central de documentación/tutoriales integrada para facilitar la incorporación de nuevos colaboradores.',
        
        'ajdc_uxui_title': 'Diseño del Sitio (UX/UI)',
        'ajdc_uxui_text': 'Cada elemento visual fue pensado para minimizar errores operativos, garantizando que la gestión de cientos de clientes y facturas se realizara de forma ágil y segura, reduciendo la curva de aprendizaje y fricción para los usuarios finales. El objetivo era alcanzar la máxima eficiencia con el mínimo esfuerzo cognitivo.',
        
        'ajdc_dev_title': 'Desarrollo',
        'ajdc_dev_text': 'Fui responsable de la implementación completa del front-end utilizando FlutterFlow, garantizando fidelidad absoluta al diseño y rendimiento escalable. El diferencial técnico de este proyecto fue la integración vía APIs REST, donde trabajé en colaboración directa con el desarrollador back-end para el consumo de datos en tiempo real. Se implementó toda la lógica de visualización de facturas y dashboards, además de la estructura de la interfaz para interactuar con automatizaciones de IA (n8n), entregando un producto funcional y listo para operar.',

        // Impacto
        'ajdc_impact_title': 'IMPACTO Y <br>APRENDIZAJES',
        
        'ajdc_metric_1_title': 'Agilidad Operativa',
        'ajdc_metric_1_desc': '<strong>Aumento del 300% en la eficiencia de registro.</strong> A través de la unificación de herramientas y automatización de cálculos matemáticos complejos, el tiempo promedio para el registro de clientes y facturas se redujo drásticamente, haciendo el flujo de trabajo 3 veces más ágil y práctico.',
        
        'ajdc_metric_2_title': 'Descubrimiento de Producto <br>e Insights',
        'ajdc_metric_2_desc': '<strong>Reducción de "Cuellos de Botella" Invisibles.</strong> Las entrevistas cualitativas con colaboradores permitieron mapear dolores operativos que no habían sido diagnosticados. El resultado fue la creación de funcionalidades inéditas que resolvieron necesidades críticas de gestión antes ignoradas.',
        
        'ajdc_metric_3_title': 'Satisfacción del Usuario <br> (NPS Cualitativo)',
        'ajdc_metric_3_desc': '<strong>100% de Aprobación Interna.</strong> El sistema alcanzó un índice de satisfacción absoluta entre el equipo operativo y la dirección. La interfaz eliminó los matices de error y la resistencia al uso, siendo reconocida como una herramienta "perfecta" para el día a día de la empresa.',
        
        'ajdc_metric_4_title': 'Escalabilidad <br>de Datos',
        'ajdc_metric_4_desc': '<strong>Gestión Estratégica de Activos.</strong> El lanzamiento permitió un crecimiento significativo en el mantenimiento de datos vitales. Ahora, la empresa posee visibilidad total sobre el número de clientes, flujos de pagos y métricas financieras, facilitando la toma de decisiones basada en datos reales.',
        
        'ajdc_metric_5_title': 'Integridad <br>de Datos',
        'ajdc_metric_5_desc': '<strong>Cero Errores de Cálculo.</strong> Al anular la necesidad de cálculos manuales y hojas de cálculo externas, el sistema garantizó el 100% de integridad en las facturas generadas. Esto eliminó pérdidas financieras causadas por errores humanos y retrabajo del equipo financiero.',

        // Secciones Extras
        'ajdc_user_title': 'El Usuario',
        'ajdc_user_text': 'Para que AJDC no fuera solo otro software de gestión, utilicé metodologías de <strong>Product Discovery</strong> para mapear el comportamiento real de quien opera la facturación. A través de <strong>Declaraciones de Necesidades y Mapas de Empatía</strong>, consolidamos la proto-persona Jeice: el perfil que sintetiza los desafíos de escala y automatización del sector solar.',
        
        'ajdc_structure_title': 'Estructura del <br> Proyecto',
        'ajdc_structure_text': 'Para transformar el pedido de automatización del cliente en una herramienta robusta, diseñé la estructura del sistema enfocada en modularidad y control total de datos. La arquitectura fue diseñada para centralizar el ciclo de vida de la facturación solar en un entorno único, eliminando la dependencia de hojas de cálculo externas y procesos manuales. Se desarrolló un Sitemap estratégico que organiza el sistema en cinco pilares fundamentales:',
        'ajdc_structure_list_items': '<li class="project-intro-text mb-4"><strong>Gestión de Clientes:</strong> Flujos completos de registro y consulta de datos sensibles y direcciones.</li><li class="project-intro-text mb-4"><strong>Automatización de Facturación:</strong> Módulo central para creación, consulta y generación de remesas bancarias automatizadas.</li><li class="project-intro-text mb-4"><strong>Inteligencia de Datos:</strong> Dashboard de métricas para visión macro del negocio y estado de pagos.</li><li class="project-intro-text mb-4"><strong>Consultas Financieras:</strong> Herramienta de búsqueda avanzada con sumatorios automáticos de pendientes y recibidos.</li><li class="project-intro-text mb-4"><strong>Onboarding y Soporte:</strong> Una sección dedicada de tutoriales interactivos para cada funcionalidad, garantizando autonomía plena a los usuarios y reduciendo la curva de aprendizaje.</li>',
        'ajdc_structure_footer': 'El resultado es un ecosistema lógico donde el usuario navega con confianza, realizando acciones complejas a través de caminos intuitivos y validados por diagramas de flujo de procesos.',

        'ajdc_wireframe_low_title': 'WIREFRAMES y <br> arquitectura funcional',
        'ajdc_wireframe_low_text_1': 'En la etapa de wireframes, mi enfoque principal fue la organización de datos densos y la validación de las reglas de negocio del sector de energía solar. Dada la complejidad de los cálculos de facturación y la diversidad de categorías de clientes, utilicé el diseño de fidelidad media para estructurar interfaces que priorizan la precisión y la velocidad de operación.',
        'ajdc_wireframe_low_text_2': 'A través de iteraciones constantes con stakeholders y usuarios finales, refiné flujos críticos como el registro de clientes, la generación automática de facturas y la consulta de pagos. Cada pantalla fue diseñada para minimizar errores humanos, con elementos visuales que guían al usuario a través de procesos complejos de forma intuitiva. El resultado es una base sólida que sustenta la experiencia del usuario, garantizando que cada interacción sea eficiente y libre de ambigüedades.',

        'ajdc_ui_title': 'Diseño de Interfaz <br> de Usuario',
        'ajdc_ui_text': 'El diseño de interfaz de AJDC fue proyectado para equilibrar la robustez de un sistema financiero con la ligereza de una herramienta moderna de energía limpia. El objetivo principal de la Guía de Estilo fue garantizar consistencia absoluta entre los módulos, facilitando el aprendizaje del equipo y optimizando el flujo de facturación.',
        'ajdc_ui_list': '<li class="project-intro-text mb-4"> <strong>Colores y Semántica:</strong> La paleta utiliza tonos de Azul Petróleo y Verde Azulado para transmitir estabilidad y profesionalismo, remitiendo directamente al sector de energía sostenible. Utilizamos el Verde Esmeralda para estados de éxito y el Coral Vibrante para alertas críticas, garantizando que el usuario identifique instantáneamente el estado de las facturas y procesos.</li> <li class="project-intro-text mb-4"> <strong>Tipografía (Inter): </strong> Elegí la familia Inter por su versatilidad sistémica. Su alta legibilidad en diferentes escalas fue fundamental para organizar tablas densas y dashboards, manteniendo una jerarquía clara entre datos operativos y métricas de decisión.</li> <li class="project-intro-text mb-4"> <strong>Componentización y Botones: </strong> Desarrollé una biblioteca de componentes modulares con estilos Sólido y Contorno. Este enfoque no solo mejora la experiencia del usuario a través de la previsibilidad, sino que también garantizó un handoff ágil para el desarrollo en FlutterFlow, permitiendo la reutilización de elementos y la escalabilidad del sistema.</li> <li class="project-intro-text mb-4"> <strong>Iconografía: </strong> Utilizamos íconos minimalistas de trazo limpio para ayudar en el reconocimiento cognitivo rápido de las funcionalidades, reduciendo el tiempo de respuesta del administrador durante tareas repetitivas.</li>',

        'ajdc_wireframe_hi_title': 'Wireframes: <br> alta fidelidad',
        'ajdc_wireframe_hi_text_1': 'La etapa de alta fidelidad tradujo la complejidad lógica de AJDC en una interfaz de alto rendimiento. El enfoque principal fue la creación de un ecosistema consistente, donde el administrador puede gestionar cientos de facturas con el mínimo de clics y esfuerzo cognitivo.',
        'ajdc_wireframe_hi_text_2': 'Cada componente fue diseñado siguiendo las directrices de la Guía de Estilo, garantizando que elementos críticos — como estado de pago y alertas de vencimiento — tengan destaque inmediato, reduciendo drásticamente el margen de error humano en la facturación.',

        'ajdc_mobile_title': 'Wireframe de Alta <br> Fidelidad: Móvil',
        'ajdc_mobile_text_1': 'La versión móvil de AJDC fue diseñada para ser la extensión de bolsillo del administrador. El desafío técnico fue adaptar flujos densos de datos para pantallas reducidas, priorizando la accesibilidad y la rapidez en la consulta.',
        'ajdc_mobile_text_2': 'A través de un diseño responsivo y adaptativo, implementé el apilamiento inteligente de componentes y la simplificación de formularios extensos. Para garantizar la seguridad en procesos críticos, como la generación de facturas, adoptamos la estrategia de restringir ciertas funcionalidades al entorno de escritorio, mientras que el móvil actúa como una poderosa herramienta de monitoreo y consulta rápida de estados y métricas, permitiendo que el gestor tenga el control de la operación en la palma de la mano, con total claridad visual.',


        // --- PROYECTO: ELEVEIT ---
        'eleveit_hero_title': 'Sobre el <br> Proyecto',
        'eleveit_intro_1': '<span class="text-green">eleveit</span> transforma la trayectoria de los jóvenes, conectándolos a un plan de desarrollo que hace realidad sus sueños. Con la metodología "Despertando Potenciales", ofrecemos emparejamiento inteligente con PDI-e, educación financiera, capacitación y acceso a oportunidades de trabajo y emprendimiento.',
        'eleveit_intro_2': 'La empresa necesitaba un sitio web responsivo que presentara su propuesta con claridad y fortaleciera su presencia digital. Como una marca nueva en el mercado y enfocada en educación y tecnología, era esencial construir confianza, explicar sus servicios y crear un punto de contacto capaz de atraer y orientar a jóvenes interesados en el programa.',
        
        // Detalles
        'eleveit_client_value': 'Eleveit <br> Fortaleza, CE - BRA',
        'eleveit_services_list': '<li>Investigación y Estrategia UX</li><li>Arquitectura de la Información</li><li>Diseño de Interfaz (UI)</li><li>Prototipado Interactivo</li>',
        'eleveit_role_value': 'Diseñadora de Producto',

        // Narrativa
        'eleveit_challenge_title': 'El Desafío',
        'eleveit_challenge_text': 'Eleveit ya poseía una lógica interna robusta, pero faltaba una capa de experiencia (UX) que convirtiera el interés inicial en acción. El desafío técnico era crear una jornada lineal para un público joven y diverso, eliminando la sobrecarga cognitiva y transformando un ecosistema complejo en una interfaz intuitiva y acogedora.',
        
        'eleveit_deliverables_title': 'Principales Entregables',
        'eleveit_deliverables_text': 'Como resultado del proceso de diseño, entregué un ecosistema completo enfocado en la escala: Investigación UX detallada, Mapa del sitio y Flujogramas de navegación, Wireframes de alta fidelidad y un Sistema de Diseño modular. El enfoque fue garantizar que el producto no fuera solo un sitio, sino una herramienta lista para crecer junto con el negocio.',
        
        'eleveit_uxui_title': 'Diseño del Sitio (UX/UI)',
        'eleveit_uxui_text': 'La interfaz se construyó sobre los pilares de la accesibilidad y la modernidad. Utilicé la tipografía Inter por su alto rendimiento en lectura digital y una paleta en degradado azul-verde para evocar tecnología y confianza. La arquitectura de la información fue diseñada para construir autoridad desde los primeros segundos, priorizando el valor social de la marca antes de la conversión directa.',
        
        'eleveit_dev_title': 'Desarrollo',
        'eleveit_dev_text': 'Utilicé mi base en Análisis de Sistemas para garantizar un handoff sin fricciones. La implementación se realizó vía FlutterFlow, enfocándose en una estructura de código limpia y rendimiento optimizado. Se desarrolló una interfaz 100% responsiva, garantizando que la experiencia fuera idéntica en cualquier dispositivo, integrando componentes dinámicos que facilitan la gestión de contenido por el equipo de Eleveit.',

        // Impacto
        'eleveit_impact_title': 'IMPACTO',
        'eleveit_impact_subtitle': 'Tanto el lanzamiento inicial como las versiones posteriores produjeron grandes resultados...',
        
        'eleveit_metric_1_title': 'Rentable',
        'eleveit_metric_1_desc': '<strong>+45% en inscripciones.</strong> El lanzamiento aumentó significativamente los registros.',
        
        'eleveit_metric_2_title': 'Impacto Social',
        'eleveit_metric_2_desc': '<strong>200+ jóvenes alcanzados.</strong> El proyecto conectó personas al programa.',
        
        'eleveit_metric_3_title': 'Compromiso',
        'eleveit_metric_3_desc': '<strong>+60% tiempo en página.</strong> La navegación optimizada aumentó la permanencia.',
        
        'eleveit_metric_4_title': 'Reconocimiento',
        'eleveit_metric_4_desc': '<strong>NPS 80+.</strong> Los usuarios evaluaron positivamente la claridad y empatía.',
        
        'eleveit_metric_5_title': 'Conversión',
        'eleveit_metric_5_desc': '<strong>-35% en tasa de rebote.</strong> La tasa de salida cayó y el compromiso creció.',
        
        'eleveit_metric_6_title': 'Crecimiento',
        'eleveit_metric_6_desc': '<strong>+30% tráfico orgánico.</strong> Buenas prácticas de SEO aumentaron el alcance.',

        // Secciones Extras
        'eleveit_user_title': 'El Usuario',
        'eleveit_user_text_1': 'Para construir una solución que realmente resuelva problemas de inclusión digital y empleabilidad, el diseño se fundamentó en una fase densa de Investigación UX. A través de técnicas de benchmark competitivo, entrevistas en profundidad y mapas de empatía, pudimos sumergirnos en las barreras psicológicas y técnicas enfrentadas por jóvenes en transición de carrera.',
        'eleveit_user_text_2': 'Estos procesos permitieron consolidar patrones de comportamiento y necesidades que culminaron en la definición de nuestra persona principal: Péricles. Él representa el perfil académico-analítico que busca claridad y una hoja de ruta lineal para ingresar al mercado profesional. A continuación, detallo cómo esta jornada de descubrimiento moldeó las directrices del producto.',
        
        'eleveit_structure_title': 'Estructura del <br> Proyecto',
        'eleveit_structure_text_1': 'Para organizar la navegación de la landing page y garantizar una experiencia fluida, se desarrolló un mapa del sitio que define las páginas principales y el flujo de interacción del usuario. El objetivo fue simplificar el acceso a la información más relevante — Quiénes Somos, Preguntas Frecuentes y Contacto — permitiendo que el visitante encuentre fácilmente lo que busca sin sobrecarga de contenido.',
        'eleveit_structure_text_2': 'El diagrama de flujo representa el camino ideal del usuario desde el acceso a la página de inicio hasta la conclusión de su navegación en las secciones principales. La idea es ofrecer una jornada clara, objetiva e intuitiva, con pocos clics entre el punto de entrada y el objetivo final (obtener información o contactar).',
        
        'eleveit_wireframe_low_title': 'WIREFRAMES',
        'eleveit_wireframe_low_text': 'En la etapa de wireframes de baja fidelidad, busqué estructurar la jerarquía de la información y validar el flujo de navegación antes de aplicar la identidad visual de Eleveit. El enfoque estuvo en definir la disposición de los elementos, el comportamiento responsivo y la claridad de la jornada del usuario entre las secciones principales.',

        'eleveit_ui_title': 'Diseño de Interfaz <br> de Usuario',
        'eleveit_ui_intro': 'La guía de estilo se desarrolló con el objetivo de garantizar consistencia visual y una identidad moderna para la plataforma Eleveit. La elección del degradado azul-verde transmite tecnología y accesibilidad, reforzando la misión del proyecto de conectar a los jóvenes con el futuro profesional.',
        'eleveit_ui_list': '<li class="project-intro-text mb-4"> <strong>Tipografía:</strong> La familia Inter fue elegida por su excelente rendimiento en pantallas digitales, legibilidad y estilo contemporáneo. Las variaciones de peso y tamaño crean una jerarquía clara entre títulos, subtítulos y textos.</li> <li class="project-intro-text mb-4"> <strong>Botones y Tarjetas: </strong> Se definieron dos estilos de botón (sólido y contorno) para crear contraste entre acciones primarias y secundarias. Las tarjetas siguen el mismo patrón visual, utilizando esquinas redondeadas y sombras sutiles para transmitir modernidad y profundidad.</li> <li class="project-intro-text mb-4"> <strong>Iconografía: </strong> Íconos minimalistas y universales refuerzan la comunicación visual de la interfaz, priorizando claridad y accesibilidad.</li>',

        'eleveit_wireframe_hi_title': 'Wireframe de Alta <br> Fidelidad',
        'eleveit_wireframe_hi_text': 'En esta etapa, la identidad visual de Eleveit cobró vida a través de un Sistema de Diseño cohesivo. La elección de la tipografía Inter no fue solo estética; su legibilidad excepcional en pantallas digitales garantiza que el usuario absorba la información sin fatiga visual.',

        'eleveit_mobile_title': 'Wireframe de Alta <br> Fidelidad: Móvil',
        'eleveit_mobile_text_1': 'Como sabemos que el concepto de mobile first hoy es esencial, el enfoque en el diseño responsivo fue prioridad. En el móvil, la interfaz se optimizó para la navegación con un solo pulgar, manteniendo los elementos interactivos en zonas de fácil alcance.',
        'eleveit_mobile_text_2': 'Adaptamos la densidad de información para evitar sobrecarga en pantallas más pequeñas, garantizando que el flujo de inscripción y los contenidos de educación permanezcan fluidos y accesibles en cualquier dispositivo. El resultado es una interfaz moderna, ligera y técnicamente escalable, lista para proporcionar un handoff sin fricciones para el desarrollo.',


        // --- PROYECTO: JD DIGITAL ---
        'jd_hero_title': 'Sobre el <br> Proyecto',
        'jd_intro_1': '<strong class="text-danger">Juventude Digital</strong> es un programa del Ayuntamiento de Fortaleza que cualifica jóvenes para el mercado tecnológico, lanzado en octubre de 2021 como política pública permanente. Es coordinado por la <strong>Fundación de Ciencia, Tecnología e Innovación de Fortaleza (Citinova)</strong>, en asociación con el Instituto Juventude Inovação y las secretarías de Juventud y Educación. Es el principal hub de capacitación tecnológica del Ayuntamiento. El proyecto de <strong>rediseño</strong> fue motivado por la necesidad de transformar el portal institucional en una plataforma educativa de alto rendimiento, centrada en la jornada del alumno.',
        'jd_intro_2': '<strong class="text-danger">JD ya ha capacitado a más de 44 mil jóvenes, realizado más de 200 cursos y talleres y alcanzado a 48,2 mil personas en cerca de 100 eventos.</strong>',
        'jd_intro_3': 'Actué en el ciclo completo de la solución: desde el <strong>análisis técnico y pruebas de usabilidad</strong> de la plataforma anterior, identificando errores y cuellos de botella, hasta la implementación final del <strong>front-end</strong>, garantizando una interfaz accesible y preparada para escalar el impacto social del programa.',
        
        // Detalles
        'jd_client_value': 'JD Digital <br> Fortaleza, CE - BRA',
        'jd_services_list': '<li>Diseño y Rediseño UX/UI</li><li>Desarrollo Front-end</li><li>Análisis de Plataforma y QA</li><li>Diseño de Interacción y Prototipado</li>',
        'jd_role_value': 'Diseñadora de Producto y Desarrolladora Front-end',

        // Narrativa
        'jd_challenge_title': 'El Desafío',
        'jd_challenge_text': 'El mayor desafío técnico era la fragmentación de la información. El portal heredado presentaba barreras en el descubrimiento de cursos y falta de claridad en los avisos académicos, resultando en baja retención, además de falta de funciones específicas que expusieran otra información como rutas de cursos, galerías de fotos y descripciones de eventos. La misión fue estructurar una arquitectura de información que unificara avisos, eventos y rutas de aprendizaje en un único ecosistema intuitivo, eliminando la dependencia de redes sociales externas.',
        
        'jd_deliverables_title': 'Principales Entregables',
        'jd_deliverables_text': 'Se desarrolló un ecosistema digital robusto compuesto por: nuevas páginas de Avisos Académicos con filtros, Calendario de Eventos interactivo, sistema de Rutas de Conocimiento (Diseño, Datos, Dev, IA), Galería de Eventos inmersiva y un Área del Alumno personalizada. Cada entrega fue validada para garantizar que el flujo entre el descubrimiento del curso y la inscripción fuera lo más corto posible.',
        
        'jd_uxui_title': 'Diseño del Sitio (UX/UI)',
        'jd_uxui_text': 'Se utilizó la tipografía Montserrat y una paleta de colores vibrantes para comunicar innovación y energía. La interfaz se construyó sobre un Sistema de Diseño modular, enfocado en jerarquía visual clara y accesibilidad. También se diseñaron componentes que destacan cursos en tendencia y simplifican la lectura de documentos densos, transformando un portal burocrático en una experiencia fluida, moderna y visualmente atractiva.',
        
        'jd_dev_title': 'Desarrollo',
        'jd_dev_text': 'Fui responsable de ayudar a traducir el rediseño en código front-end, priorizando el rendimiento y la fidelidad visual. Mi actuación incluyó una fase intensa de pruebas técnicas en la plataforma anterior, mapeando mecanismos de error y bugs críticos. Estos datos generaron los insights necesarios para crear una interfaz limpia y resistente, integrando funcionalidades dinámicas que permiten a la gestión de JD actualizar contenidos de forma ágil y segura.',

        // Impacto
        'jd_impact_title': 'IMPACTO Y <br>APRENDIZAJES',
        
        'jd_metric_1_title': 'Compromiso y Prueba Social <br>(La Galería)',
        'jd_metric_1_desc': '<strong>Crecimiento Orgánico vía Storytelling.</strong> La implementación de la galería de eventos con descripciones inmersivas transformó la percepción visual del programa. El resultado fue un aumento significativo en la divulgación espontánea hecha por los propios alumnos en redes sociales, fortaleciendo la autoridad de la marca JD Digital y atrayendo nuevos talentos sin costo de adquisición.',
        
        'jd_metric_2_title': 'Retención y Seguridad <br> (Las Rutas)',
        'jd_metric_2_desc': '<strong>Reducción de la Parálisis de Elección.</strong> La estructuración de los cursos en rutas temáticas ofreció el "GPS" que los jóvenes necesitaban. Al proveer un camino lineal y seguro, la plataforma redujo la evasión y aumentó el índice de finalización de cursos, garantizando que el alumno sepa exactamente dónde está y hacia dónde puede ir su carrera.',
        
        'jd_metric_3_title': 'Experiencia y Usabilidad',
        'jd_metric_3_desc': '<strong>Navegación de Alto Rendimiento.</strong> El rediseño de la arquitectura de información eliminó los cuellos de botella de la plataforma anterior. La interacción se volvió más fluida e intuitiva, permitiendo un acceso ágil a avisos e inscripciones, reflejándose directamente en la satisfacción del usuario y la credibilidad institucional.',
        
        'jd_metric_4_title': 'El Diseño como Herramienta de Confianza:',
        'jd_metric_4_desc': '<strong>El estilo moderno es confianza.</strong> Aprendí que, para un programa público dirigido a jóvenes, la estética moderna es un requisito previo para la confianza. Un portal que parece "atrasado" aleja el talento digital. El visual premium atrajo al público tecnológico más exigente.',
        
        'jd_metric_5_title': 'Arquitectura de Información <br> es Carrera',
        'jd_metric_5_desc': '<strong>Gestión Estratégica de Activos.</strong> Organizar más de 200 cursos no es solo una tarea de etiquetado, es una tarea de orientación profesional. Entender la jerarquía de las rutas me enseñó a diseñar flujos que educan mientras navegan.',
        
        'jd_metric_6_title': 'Valor Cualitativo vs. <br> Cuantitativo',
        'jd_metric_6_desc': '<strong>Funcionalidades más allá del diseño UI.</strong> Incluso sin herramientas complejas de seguimiento al principio, las entrevistas cualitativas probaron que el diseño emocional (como la galería de fotos) es el mayor motor de compromiso social de un proyecto público.',

        // Secciones Extras
        'jd_user_title': 'El Usuario',
        'jd_user_text': 'El éxito del rediseño del portal JD Digital dependió directamente de una inmersión en la realidad de su público objetivo: <strong>jóvenes talentos de Fortaleza que buscan ascenso en tecnología</strong>. A través de procesos de Product Discovery, consolidamos el perfil de Nathan. Representa al estudiante autónomo y analítico, cuyos dolores con la fragmentación de información en redes sociales sirvieron de base para las nuevas funcionalidades de centralización y gestión de carrera.',
        
        'jd_structure_title': 'Estructura del <br> Proyecto',
        'jd_structure_text': 'Para unificar un ecosistema complejo con más de 200 cursos y múltiples avisos, se diseñó una Arquitectura de Información modular. El enfoque fue optimizar la búsqueda de información, garantizando que el estudiante navegue intuitivamente entre el aprendizaje y las oportunidades. A continuación, destacados de la estructura:',
        'jd_structure_list': '<li class="project-intro-text mb-4"><strong>Centralización de Oportunidades:</strong> Creación del nav "Para Ti", actuando como hub dinámico para Avisos y Eventos.</li><li class="project-intro-text mb-4"><strong>Navegación Orientada a Objetivos:</strong> Categorización clara entre rutas de aprendizaje y soporte al usuario.</li><li class="project-intro-text mb-4"><strong>Flujo de Conversión:</strong> Jerarquía diseñada para reducir clics hasta la inscripción, priorizando la retención.</li>',

        'jd_ui_title': 'Diseño de Interfaz <br> de Usuario',
        'jd_ui_text': 'El veredicto para la Guía de Estilo fue la modernización conservadora. Respetamos los activos visuales originales, enfocándonos en la reestructuración técnica:',
        'jd_ui_list': '<li class="project-intro-text mb-4"> <strong>Tipografía:</strong> La familia Montserrat se mantuvo por su legibilidad, ahora con una jerarquía de pesos más rigurosa.</li> <li class="project-intro-text mb-4"> <strong>Colores:</strong> La paleta original se optimizó para garantizar mejores niveles de accesibilidad y contraste.</li> <li class="project-intro-text mb-4"> <strong>Tarjetas y Botones: </strong> Introduje esquinas redondeadas y sombras suaves para crear profundidad y un aspecto más amigable.</li>',

        'jd_wireframe_hi_title': 'Wireframes: <br> alta fidelidad',
        'jd_wireframe_hi_text': 'Como la base estructural del portal ya estaba establecida, opté por avanzar directamente a la Alta Fidelidad, concentrando esfuerzos en el refinamiento de la experiencia y la creación de un sistema visual dinámico. El objetivo fue traducir la densidad de información en una interfaz fluida, accesible y visualmente vibrante. Cada pantalla fue diseñada para garantizar que el estudiante encuentre lo que necesita en pocos segundos, transformando la complejidad de una plataforma pública en un ecosistema intuitivo, responsivo y listo para escalar.'

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
                element.innerHTML = translations[lang][key];
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