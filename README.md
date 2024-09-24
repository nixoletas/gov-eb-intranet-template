# Nova Intranet - modelo [govbr](https://www.gov.br/ds/home)
#### Desenvolvido em Angular

### Por que Angular e não Joomla?

Esse projeto foi desenvolvido fugindo um pouco do padrão de adoção atual do Exército que é Joomla. A idéia principal foi fazer uma transição que não distoasse da intranet antiga e não deixasse os usuários "perdidos" na nova interface. Aproveitando os novos aprendizados e o quickstart angular do próprio repositório do [govbr-ds-quickstart-angular](https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-quickstart-angular.git) comecei a desenvolver esse projeto. Quando vi que tinha um app quase cosolidado, resolvi subir a nova intranet. 
A nova interface atualmente funciona com outros dois servidores, um de assets e um strapi para criação de matérias, carossel, pop-up, e outras mídias. O modelo foi bem recebido e pude implementar diversas outras funcionalidades como: abertura de chamados online, livro de viagem, modal de aniversariantes, exibição de temperatura e umidade.
Este projeto não contém todas as funcionalidade do projeto que está rodando na OM, para saber não hesite em entrar em contato nas redes sociais.

### rodar projeto
instalar dependências
```
npm i
```

fazer build do projeto, criando assim a pasta "/dist"
```
npm run build
```

rodar o projeto na porta 80
```
docker compose up -d
```

caso já tiver uma instância rodando, é necessário terminá-la e iniciar de novo
```
docker compose down -v && docker compose up -d
```

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
