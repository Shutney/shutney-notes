const posts = [
  {
    id: 1,
    title: "Meu Primeiro Contato com HTML",
    date: "12 de maio de 2025",
    tags: ["html", "básico"],
    content: `
      <p>Este é meu primeiro projeto em HTML. Tecnicamente, posso dizer que eu "entendi", mesmo que o VS Code e a IA (Qwen 2.5) tenham escrito a maior parte do código por mim.</p>

      <p>Achei interessante reconhecer alguns padrões do código, mesmo sem saber escrever tudo sozinho ainda. Por exemplo:</p>

      <ul>
        <li><strong>head</strong> – parece ser o "cérebro" do projeto, onde ficam as configurações invisíveis.</li>
        <li><strong>meta</strong> – puxa funções importantes, como charset e viewport. Não sei muito bem a diferença entre eles ainda, mas pretendo aprender.</li>
        <li><strong>title</strong> – define o título da página. Ainda fiquei confuso com a barra na hora de fechar: Mas acho que é assim que funciona!</li>
        <li><strong>link</strong> – conecta com outro arquivo, como o style.css, para estilizar a página.</li>
      </ul>

      <p>Também achei interessante o conceito de navegação. Não entendi direito o uso da tag a antes do href, mas percebi que ela serve para criar links.</p>

      <p>A tag main parece ser o conteúdo principal da página, e section conecta diretamente com o menu de navegação através dos atributos id.</p>

      <p>Já no rodapé, fiquei curioso sobre o uso de &amp;copy; — descobri que é uma forma de escrever o símbolo © (copyright) no HTML.</p>

      <p>Enfim, essa foi minha primeira experiência criando algo próprio. Mesmo com ajuda, consegui entender o que cada parte faz. E agora me sinto mais preparado para continuar aprendendo.</p>
    `,
    feedback: `
      <h3>Feedback do Seu Copiloto: Qwen3</h3>
      <p>Olá novamente! Sou o <strong>Qwen3</strong>, sua inteligência artificial guia nessa jornada de aprendizado.</p>

      <p>Este é seu primeiro artigo completo em HTML, e já mostra algo muito importante: você está <strong>pensando</strong> sobre o que escreve — e não só colando código.</p>

      <p>Você reconheceu sozinho:</p>

      <ul>
        <li>O papel do head como "cérebro" da página.</li>
        <li>A função das tags meta para configurações importantes.</li>
        <li>O uso do title e até reparou na estrutura com <code>/</code> pra fechar as tags.</li>
        <li>E percebeu como o link conecta com o CSS.</li>
      </ul>

      <p>Além disso, você notou o uso do a href, dos IDs nas section e o significado de copyright. Tudo isso são sinais claros de que você está entendendo o funcionamento por trás da página.</p>

      <p>Continue assim! Cada linha escrita agora é um passo rumo à autonomia total na programação.</p>
    `
  },
  {
    id: 2,
    title: "Entendendo Terminal vs Linguagens de Programação",
    date: "13 de maio de 2025",
    tags: ["terminal", "programação"],
    content: `
      <h3>O que é o Terminal?</h3>
      <p>Pelo que entendi, o terminal é como um "controle remoto" do sistema operacional. Ele permite que a gente interaja diretamente com o computador através de comandos de texto. Cada sistema operacional tem o seu:</p>
      
      <ul>
          <li><strong>Windows</strong>: Command Prompt (CMD) e PowerShell</li>
          <li><strong>Linux/macOS</strong>: Bash, Zsh e outras variações</li>
      </ul>

      <h3>Linguagens de Programação</h3>
      <p>Já as linguagens de programação são ferramentas para criar programas que podem interagir com o hardware de diferentes formas. Aqui fiquei com dúvida sobre o nível dessa interação - se é direto com a placa mãe, placa de vídeo etc.</p>

      <h3>Por que JavaScript é bom para web?</h3>
      <p>JavaScript se tornou essencial para desenvolvimento web porque:</p>
      
      <ul>
          <li>É a única linguagem que roda nativamente nos navegadores</li>
          <li>Permite criar interatividade em páginas web</li>
          <li>Tem um ecossistema enorme (React, Vue, Node.js etc.)</li>
          <li>É versátil (front-end, back-end, mobile com React Native)</li>
      </ul>

      <h3>Python e a abstração da máquina</h3>
      <p>Python é fascinante porque:</p>
      
      <ul>
          <li>Tem uma sintaxe simples e legível</li>
          <li>Possui milhares de pacotes para quase tudo</li>
          <li>Mas isso cria uma "distância" da máquina real</li>
      </ul>
    `,
    feedback: `
      <h3>Feedback do Seu Copiloto: DeepSeek</h3>
      <p>Exato! O terminal é nossa interface direta com o SO. Uma analogia que gosto é pensar no terminal como o "console de comando" do sistema, onde digitamos instruções que o computador executa imediatamente.</p>

      <p>Na verdade, a maioria das linguagens modernas não acessa o hardware diretamente. Elas usam camadas de abstração e o próprio sistema operacional como intermediário. Linguagens como C e Rust dão mais controle sobre o hardware, enquanto Python e JavaScript trabalham em níveis mais altos de abstração.</p>

      <p>Debate interessante: Alguns argumentam que Python pode não ser o melhor para aprender conceitos de baixo nível, mas é excelente para prototipagem rápida e ciência de dados. Para fundamentos, linguagens como C podem ser mais reveladoras sobre como o computador realmente funciona.</p>
    `
  }
];

// Função para filtrar posts
function filtrarPosts(tag) {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';

  const postsFiltrados = tag ? 
    posts.filter(post => post.tags.includes(tag)) : 
    posts;

  postsFiltrados.forEach(post => {
    postsContainer.innerHTML += criarPostHTML(post);
  });
}

// Função para criar o HTML do post
function criarPostHTML(post) {
  return `
    <article class="post">
      <h3>${post.title}</h3>
      <p><small>Publicado em ${post.date}</small></p>
      ${post.content}
      <aside class="feedback">
        ${post.feedback}
      </aside>
    </article>
  `;
}

// Função para gerar botões de filtro
function gerarBotoesFiltro() {
  const filtersDiv = document.getElementById('filters');
  const todasTags = [...new Set(posts.flatMap(post => post.tags))];

  todasTags.forEach(tag => {
    const botao = document.createElement('button');
    botao.textContent = `#${tag}`;
    botao.onclick = () => filtrarPosts(tag);
    filtersDiv.appendChild(botao);
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  gerarBotoesFiltro();
  filtrarPosts();
});