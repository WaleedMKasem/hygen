webpackJsonp([0x6a32e4b8bc6d],{267:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Create",doc:2,section:2,type:"doc"},fields:{slug:"/create"}}},{node:{frontmatter:{title:"Express",doc:3,section:3,type:"doc"},fields:{slug:"/express"}}},{node:{frontmatter:{title:"FAQ",doc:5,section:1,type:"doc"},fields:{slug:"/faq"}}},{node:{frontmatter:{title:"Generators",doc:3,section:1,type:"doc"},fields:{slug:"/generators"}}},{node:{frontmatter:{title:"Quick Start",doc:1,section:1,type:"doc"},fields:{slug:"/quick-start"}}},{node:{frontmatter:{title:"Packages",doc:1,section:2,type:"doc"},fields:{slug:"/packages"}}},{node:{frontmatter:{title:"React Native",doc:2,section:3,type:"doc"},fields:{slug:"/react-native"}}},{node:{frontmatter:{title:"Redux",doc:1,section:3,type:"doc"},fields:{slug:"/redux"}}},{node:{frontmatter:{title:"Standalone",doc:2,section:2,type:"doc"},fields:{slug:"/standalone"}}},{node:{frontmatter:{title:"Templates",doc:2,section:1,type:"doc"},fields:{slug:"/templates"}}}]},postBySlug:{html:'<p>Maintaining code generators over time can be a challenge in some cases. If you have a bug in the generator, you need to modify your templates, run the modified generator, and then manually import your changes back into the templates while remembering to replace keywords with ejs placeholders.</p>\n<p><a href="https://github.com/ronp001/hygen-create"><code>hygen-create</code></a> offers an approach to creating new generators: take an existing piece of code and automatically transform it into a generator.</p>\n<p>To create a generator using <a href="https://github.com/ronp001/hygen-create"><code>hygen-create</code></a>:</p>\n<ul>\n<li>Start a <a href="https://github.com/ronp001/hygen-create"><code>hygen-create</code></a> session</li>\n<li>Select files to include in the generator</li>\n<li>Specify a string to automatically turn into ejs snippets in the resulting templates</li>\n<li>Run <a href="https://github.com/ronp001/hygen-create"><code>$ hygen-create generate</code></a></li>\n</ul>\n<p>That\'s it!  Your new <code>hygen</code> generator is ready, and you can use it to create new "instances" of the code you generalized.  If something\'s not right, you can fix the problem directly in the generated code, then run <a href="https://github.com/ronp001/hygen-create"><code>hygen-create</code></a> on the modified code to update the generator with your fix.  It even remembers which files were originally included in the generator, so you don\'t have to select files all over again.</p>\n<p>For more details see <a href="https://github.com/ronp001/hygen-create"><code>https://github.com/ronp001/hygen-create</code></a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ yarn global add hygen-create\n</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --global hygen-create\n</code></pre>\n      </div>\n<h2 id="key-features"><a href="#key-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Key Features</h2>\n<ul>\n<li>\n<p>String variations (UPPERCASED, CamelCased, etc.) are automatically recognized.  For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>// if the following \'package.json\' is used as a generator source \n// with \'MyPackage\' as the templatization string<span class="token operator">:</span>\n<span class="token punctuation">{</span>\n<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"MyPackage"</span><span class="token punctuation">,</span>\n<span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"my-package/bin/my_package.js"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>// the resulting generator with \'--name NewUnit\' will create<span class="token operator">:</span>\n<span class="token punctuation">{</span>\n<span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"NewUnit"</span><span class="token punctuation">,</span>\n<span class="token property">"index"</span><span class="token operator">:</span> <span class="token string">"new-unit/bin/new_unit.js"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>Directory hierarchy is maintained</li>\n<li>Gradually add files to the generator in a git-like fashion</li>\n<li>Review auto-inserted ejs placeholders with a built-in colorized diff</li>\n<li>Iteratively author generators by running <a href="https://github.com/ronp001/hygen-create"><code>hygen-create</code></a> again on the code created by the generator.</li>\n</ul>\n<h2 id="github-project"><a href="#github-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GitHub Project</h2>\n<p><a href="https://github.com/ronp001/hygen-create"><code>https://github.com/ronp001/hygen-create</code></a></p>',timeToRead:2,excerpt:"Maintaining code generators over time can be a challenge in some cases. If you have a bug in the generator, you need to modify your…",frontmatter:{title:"Create"},fields:{slug:"/create"}}},pathContext:{slug:"/create"}}}});
//# sourceMappingURL=path---create-a9e052994326866d96d7.js.map