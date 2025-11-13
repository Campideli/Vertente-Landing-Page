# 🎓 Vertente Treinamentos Profissionais - Landing Page

Uma landing page moderna, responsiva e otimizada para a **Vertente Treinamentos Profissionais**, empresa especializada em treinamentos de Segurança do Trabalho, Qualidade e Gestão.

## ✨ Características

- 🎨 Design moderno e profissional
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada com Vite
- 🎭 Animações suaves com Framer Motion
- 🎯 Foco em conversão (CTAs estratégicos)
- ♿ Acessível e semântico
- 🔍 SEO-friendly

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para UI
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones SVG modernos

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/vertente-landing-page.git
cd vertente-landing-page
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

## 📂 Estrutura do Projeto

```
vertente-landing-page/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção hero principal
│   ├── About.tsx       # Sobre a empresa
│   ├── ValueProposition.tsx  # Diferenciais
│   ├── SafetyCourses.tsx     # Treinamentos NR
│   ├── Consulting.tsx        # Consultoria
│   ├── Clients.tsx           # Carrossel de clientes
│   ├── OtherCourses.tsx      # Outros cursos
│   ├── FinalCTA.tsx          # Call-to-action final
│   └── Footer.tsx            # Rodapé
├── images/             # Imagens e logos
├── App.tsx             # Componente principal
├── constants.ts        # Constantes (cursos, links)
├── index.tsx           # Ponto de entrada
├── index.html          # Template HTML
└── vite.config.ts      # Configuração Vite

```

## 🎯 Funcionalidades

- **Navegação Suave**: Scroll suave entre seções
- **Menu Mobile**: Menu lateral animado para dispositivos móveis
- **Carrossel de Clientes**: Scroll infinito com logos de clientes
- **Portfólio Expansível**: Lista completa de cursos que pode ser expandida
- **CTAs Estratégicos**: Botões de conversão com links para WhatsApp
- **Animações**: Transições suaves e profissionais

## 📱 Seções da Landing Page

1. **Hero** - Chamada principal com proposta de valor
2. **Sobre** - História e missão da empresa
3. **Diferenciais** - 3 principais pontos fortes
4. **Treinamentos de Segurança** - Cursos de NRs
5. **Consultoria** - Serviços de assessoria
6. **Clientes** - Empresas atendidas
7. **Outros Cursos** - Qualidade, Gestão e Informática
8. **CTA Final** - Último incentivo à conversão
9. **Footer** - Contatos e informações legais

## 🔧 Personalização

### Alterar Links de Contato

Edite o arquivo `constants.ts`:

```typescript
export const WHATSAPP_LINK = 'https://wa.me/SEUNUMERO';
```

### Adicionar/Remover Cursos

Edite as arrays em `constants.ts`:
- `HIGHLIGHTED_SAFETY_COURSES`
- `FULL_SAFETY_COURSES`
- `QUALITY_COURSES`
- `MANAGEMENT_COURSES`
- `IT_COURSES`

### Trocar Logos de Clientes

Substitua as imagens na pasta `/images/` e atualize o array `clientLogos` em `components/Clients.tsx`.

## 👨‍💻 Autor

Desenvolvido por Fernando Campideli para **Vertente Treinamentos Profissionais**

## 📞 Contato

- 📧 Email: vertentetreinamentos@hotmail.com
- 📱 WhatsApp: (44) 99167-1166
- 📱 WhatsApp: (44) 99165-7185

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
