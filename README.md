# 💧 Plataforma Educacional Interativa sobre Saneamento

Projeto de Extensão do Curso de Análise e Desenvolvimento de Sistemas, com foco na **ODS 6 – Água Potável e Saneamento**.

## 🎯 Objetivo

Desenvolver uma plataforma web educacional interativa, destinada à comunidade em geral, que ensina boas práticas sobre saneamento básico, uso consciente da água e prevenção de doenças, através de conteúdo informativo e quizzes.

---

## 🌐 Tecnologias Utilizadas

- **Next.js (v14+)** – Framework React moderno para aplicações web
- **TypeScript** – Tipagem estática para mais segurança
- **Tailwind CSS** – Estilização ágil e responsiva
- **React Hooks** – Gerenciamento de estado de forma simples
---

## 📁 Estrutura do Projeto

```bash
.
├── app/
│   ├── layout.tsx          # Layout global com Header e Footer
│   ├── page.tsx            # Página inicial
│   ├── aprender/page.tsx   # Página com conteúdo educativo
│   ├── quiz/page.tsx       # Quiz interativo
│   └── dicas/page.tsx      # Dicas práticas de economia de água
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Footer.tsx          # Rodapé institucional
│   └── QuizCard.tsx        # Componente de pergunta e resposta
├── public/
├── styles/
│   └── globals.css         # Estilos globais com Tailwind
└── README.md               # Arquivo atual 😄
```

## 🧠 Funcionalidades

    - ✅ Página com conteúdo didático sobre saneamento
    - ✅ Quiz educativo com pontuação ao final
    - ✅ Página com dicas práticas para o dia a dia
    - ✅ Layout responsivo e acessível
    - ✅ Sem necessidade de login (foco na comunidade)

## 👥 Público-Alvo
    Comunidade em geral, especialmente pessoas com pouco acesso a informações sobre saneamento básico e sustentabilidade no uso da água.

## 🛠️ Como rodar localmente

```
# Clone o repositório
git clone https://github.com/seu-usuario/plataforma-saneamento.git

# Acesse a pasta
cd plataforma-saneamento

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:3000

```

## 🔧 Possíveis melhorias futuras

    - Integração com banco de dados para registrar pontuações
    - Adição de vídeos explicativos
    - Sistema de feedback da comunidade
    - Ranking de acertos do quiz
    - Tradução para outros idiomas

## 🌱 Contribuição para os ODS

    Este projeto colabora diretamente com os seguintes Objetivos de Desenvolvimento Sustentável:
        - ODS 6 - Água Potável e Saneamento: Conscientização e educação sobre saneamento e uso consciente da água
        - ODS 9 - Indústria, Inovação e Infraestrutura: Uso de tecnologia como agente de transformação social

👨‍💻 Autor
Desenvolvido por Victor – Estudante de Análise e Desenvolvimento de Sistemas

📜 Licença
Este projeto é de livre uso educacional e comunitário.