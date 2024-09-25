## Nova Intranet - Modelo [govbr](https://www.gov.br/ds/home)
#### Desenvolvido em [Angular](https://angular.dev/)

### Por que Angular e não Joomla?
----
Este projeto foi desenvolvido fugindo um pouco do padrão de adoção atual do Exército que é Joomla. Apesar de Joomla ser um CMS com uma certa maturidade, não é uma ferramenta simples de utilizar e às vezes uma página simples acaba ficando muito complexa.

#### Single-Page Application
Angular é um framework maduro e permite a criação de Single-Page Application (SPA), e o principal gargalo da intranet antiga era esperar milênios para navegar entre rotas. Um framework que consegue lidar com essas rotas de maneira eficaz melhorou em muito a experiência do usuários. 

#### Angular CLI
A CLI do Angular agiliza o trabalho do desenvolvedor, criando componentes, serviços e pipes de maneira muito simples e veloz.

criar novo componente
```
ng g c nome-do-componente
```

criar novo service
```
ng g s nome-do-servico
```

### Como atuei

A idéia principal foi fazer uma transição que não distoasse da intranet antiga e não deixasse os usuários "perdidos" na nova interface. Aproveitando os novos aprendizados e o quickstart angular do próprio repositório do [govbr-ds-quickstart-angular](https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-quickstart-angular.git) comecei a desenvolver esse projeto. Quando vi que tinha um app quase cosolidado, resolvi subir a nova intranet. 

A nova interface atualmente funciona com outros dois servidores, um de assets e um strapi para criação de matérias, carossel, pop-up, e outras mídias. O modelo foi bem recebido e pude implementar diversas outras funcionalidades como: abertura de chamados online, livro de viagem, modal de aniversariantes, exibição de temperatura e umidade.
Este projeto não contém todas as funcionalidade do projeto que está rodando na OM, se quiser saber mais não hesite em entrar em contato nas redes sociais.

---

### comece a trabalhar no projeto!
clonar este repositório
```
git clone https://github.com/nixoletas/gov-eb-intranet-template.git
```

#### **DESENVOLVIMENTO**

instalar dependências
```
npm i
```

subir servidor local para desenvolvimento
```
npm run start
```

#### **PRODUÇÃO**

fazer build do projeto, criar a pasta "/dist"
```
npm run build
```

rodar o projeto na porta 80 (altere a porta nos arquivos docker caso necessário)
```
docker compose up -d
```

caso já tiver uma instância rodando, é necessário terminá-la e iniciar de novo
```
docker compose down -v && docker compose up -d
```

---

### rotas da aplicação
as rotas ficam disponíveis em "app.routes.ts" na pasta /src
``` javascript
{
      path: '',
      component: HomeComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticias/:id', component: NewsDetailComponent },
    {
      path: 'institucional',
      children: [
        { path: '', component: InstitucionalComponent },
        { path: 'visao', component: VisaoComponent },
        { path: 'subordinacao', component: SubordinacaoComponent },
        { path: 'endereco', component: EnderecoComponent },
        { path: 'comandante', component: ComandanteComponent },
        { path: 'adjunto-de-comando', component: AdjuntoComponent },
        { path: 'missao', component: MissaoComponent },
        { path: 'diretriz', component: DiretrizComponent },
      ]
    },
    {
      path: 'ramais',
      component: RamaisComponent,
    },
    {
      path: 's1',
      children: [
        { path: '', component: S1PageComponent },
        { path: 'boletins', component: BoletinsComponent },
        { path: 'avisos', component: AvisosComponent },
        { path: 'servico', component: ServicoPageComponent },
        { path: 'aditamentos', component: AditamentosComponent },
        { path: 'modelos', component: ModelosComponent },
        { path: 'os', component: OsComponent },
        { path: 'ass-jurd', component: AssJurdComponent },
        { path: 'secretaria', component: SecretariaComponent },
      ]
    },
    {
      path: 's2',
      children: [
        { path: 'avisos', component: AvisosS2Component },
      ]
    },
    {
      path: 's3',
      children: [
        { path: 'documentos', component: DocumentosS3Component },
      ]
    },
    {
      path: 's4',
      children: [
        { path: 'legislacao', component: LegislacaoS4Compoent },
        { path: 'modelos', component: ModelosS4Compoent },
      ]
    },
    {
      path: 'salc',
      children: [
        { path: 'arquivos', component: ArquivosSalcComponent },
        { path: 'pregoes', component: PregoesSalcComponent },
      ]
    },
    {
      path: 'fiscalizacao',
      component: FiscalizacaoComponent
    },
    {
      path: 'egp',
      component: EgpComponent
    },
    { path: 'sti', component: StiComponent },
    { path: 'sti/chamado', component: ChamadoStiComponent },
    {
      path: 'links-uteis',
      component: LinksUteisComponent
    },
    {
      path: 'ciac2',
      component: Ciac2Component
    },
    { path: 'sistemas-externos', component: SistemasExternosComponent },
    { path: 'cartilhas-e-normas', component: CartilhasENormasComponent },
    { path: '**', redirectTo: 'home' }
```

### componentes
os componentes fica em /src/app/components

- aniversariantes	
- button-balloon
- calendario
- carousel
- footer
- header
- menu
- message
- news
- news-detail
- pop-up
- qts-qtfm
- tab


### componentes que não irão funcionar
diversos componentes possuem services que estão usando uma API disponibilizada internamente com Strapi, uma plataforma de criação de APIs. Também conhecido como Headless CMS.
Também não irá funcionar componentes que consomem um link de markdown que é do servidor de assets. Ambos esses modelos de servidor são rodados separadamente da intranet.

esse modelos encontram-se nos seguintes repositórios:
- ASSETS: https://github.com/nixoletas/govbr-assets-server.git
- STRAPI: https://github.com/nixoletas/strapi-template-intranet.git

Suba os serviços em servidores separados e sempre na porta 80 para não enfrentar problemas caso acesse pela VPN
Após subir ainda é necessário publicar seu conteúdo para aparecer na intranet

----
## Pontos importantes!

### utilização do Markdown
Use o componente "ramais" como modelo para criação de rotas que consomem um markdown. No caso de /ramais o Markdown é consumido de /public mas você pode criar um servidor separado para servir o markdown. No nosso ambiente de produção na OM, o Strapi permite criação de Markdowns e o front consome dele. 

### Firewall do EB e VPN
Ao tentar rodar seu projeto, talvez os ícones do font-awesome e a fonte rawline não funcionem pois estão em uma rede externa. Para saber como servir esses assets localmente e evitar bloqueios de firewall, veja o repositório acima de ASSETS.
