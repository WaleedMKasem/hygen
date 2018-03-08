webpackJsonp([0xfdc10d0728bd],{276:function(s,n){s.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Create",doc:2,section:2,type:"doc"},fields:{slug:"/create"}}},{node:{frontmatter:{title:"Express",doc:3,section:3,type:"doc"},fields:{slug:"/express"}}},{node:{frontmatter:{title:"FAQ",doc:5,section:1,type:"doc"},fields:{slug:"/faq"}}},{node:{frontmatter:{title:"Generators",doc:3,section:1,type:"doc"},fields:{slug:"/generators"}}},{node:{frontmatter:{title:"Quick Start",doc:1,section:1,type:"doc"},fields:{slug:"/quick-start"}}},{node:{frontmatter:{title:"Packages",doc:1,section:2,type:"doc"},fields:{slug:"/packages"}}},{node:{frontmatter:{title:"React Native",doc:2,section:3,type:"doc"},fields:{slug:"/react-native"}}},{node:{frontmatter:{title:"Redux",doc:1,section:3,type:"doc"},fields:{slug:"/redux"}}},{node:{frontmatter:{title:"Standalone",doc:2,section:2,type:"doc"},fields:{slug:"/standalone"}}},{node:{frontmatter:{title:"Templates",doc:2,section:1,type:"doc"},fields:{slug:"/templates"}}}]},postBySlug:{html:'<p>Redux is the posterchild of <code>hygen</code>. It doesn\'t matter what level of granularity you select for your Redux architecture, you\'re still going to end up with a lot of boilerplate.</p>\n<p>For my app architecture I mostly choose <a href="https://github.com/erikras/ducks-modular-redux">ducks</a>, which helps remove a little bit of boilerplate and have modularity baked in.</p>\n<p>My typical Redux architecture would look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>app/\n  components/\n    icon.js\n    avatar.js\n  modules/\n<span class="gatsby-highlight-code-line">    boot.js     <span class="token operator">&lt;</span>---- glues modules together, requires chat, app, and auth.\n</span>    app/\n      index.js\n      view.js\n      state.js\n    auth/\n      index.js\n      view.js\n      state.js\n<span class="gatsby-highlight-code-line">    chat/\n</span><span class="gatsby-highlight-code-line">      index.js  <span class="token operator">&lt;</span>---- the <span class="token string">\'connect\'</span> bit <span class="token keyword">for</span> Redux.\n</span><span class="gatsby-highlight-code-line">      view.js   <span class="token operator">&lt;</span>---- the view, separated, <span class="token keyword">for</span> testing.\n</span><span class="gatsby-highlight-code-line">      state.js  <span class="token operator">&lt;</span>---- reducer, actions, types, selectors.\n</span></code></pre>\n      </div>\n<h2 id="adding-a-module"><a href="#adding-a-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding a Module</h2>\n<p>Being a modular architecture, there\'s a huge plus for adding a module. It just means adding a folder, and <code>index</code>, <code>view</code>, <code>state</code>, perhaps a default <code>component</code>, a storybook <code>story</code>, and wiring every thing togather such as a <code>reducer</code>, exported <code>actions</code> and more in <code>boot.js</code>. Fun.</p>\n<p>Should be a breeze with <code>hygen</code>. Here\'s how your templates look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>_templates/\n  module/\n    new/\n      index.ejs.t\n      view.ejs.t\n      state.ejs.t\n<span class="gatsby-highlight-code-line">      inject_boot.ejs.t   <span class="token operator">&lt;</span>--- adds a <span class="token string">\'require\'</span> clause to boot.js\n</span></code></pre>\n      </div>\n<p>Here\'s how <code>index</code> looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>\nto<span class="token punctuation">:</span> app<span class="token operator">/</span>modules<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">%=</span> name <span class="token operator">%</span><span class="token operator">></span><span class="token operator">/</span>index<span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">-</span>\n<span class="token comment">//</span>\n<span class="token comment">// requires, mappings, etc....</span>\n<span class="token comment">//</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>A similar trick would do for <code>view</code> and <code>state</code>.</p>\n<p>How would we add a require line given that <code>boot.js</code> looks like this?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// ... some bootstrapping code ...</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">[</span>\n</span>  <span class="token comment">//     `--- we want to inject "after" this</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'auth\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// ... rest of bootstrapping code ...</span>\n</code></pre>\n      </div>\n<p>Let\'s build <code>inject_boot.ejs.t</code>. We have to use <code>inject: true</code> because this is an inject template and to locate our injected line after <code>const modules =...</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>\nto<span class="token punctuation">:</span> app<span class="token operator">/</span>modules<span class="token operator">/</span>boot<span class="token punctuation">.</span>js\ninject<span class="token punctuation">:</span> <span class="token boolean">true</span>\nskip_if<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> name <span class="token operator">%</span><span class="token operator">></span>\nafter<span class="token punctuation">:</span> <span class="token string">"const modules = ["</span>\n<span class="token operator">--</span><span class="token operator">-</span>\n<span class="token function">require</span><span class="token punctuation">(</span>\'<span class="token punctuation">.</span><span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">%=</span> name <span class="token operator">%</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>After running it, we end up with this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// ... some bootstrapping code ...</span>\n\n<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">[</span>\n<span class="gatsby-highlight-code-line">  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'chat\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span>\n</span>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'auth\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">,</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span>\n<span class="token punctuation">]</span>\n\n<span class="token comment">// ... rest of bootstrapping code ...</span>\n</code></pre>\n      </div>\n<p>And we\'re done! Generating a new module is saying this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ hygen module new --name settings</code></pre>\n      </div>',timeToRead:2,excerpt:"Redux is the posterchild of  hygen . It doesn't matter what level of granularity you select for your Redux architecture, you're still going…",frontmatter:{title:"Redux"},fields:{slug:"/redux"}}},pathContext:{slug:"/redux"}}}});
//# sourceMappingURL=path---redux-e22b743d2cac48d9e82d.js.map