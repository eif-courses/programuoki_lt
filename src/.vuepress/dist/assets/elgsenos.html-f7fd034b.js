const n=JSON.parse('{"key":"v-344f9076","path":"/java/elgsenos.html","title":"Objektų elgsenos šablonai","lang":"en-US","frontmatter":{"title":"Objektų elgsenos šablonai","author":"M.Gžegoževskis","time":"2021-10-01T00:00:00.000Z","category":["Java"],"tag":["Programavimas","Java"],"sticky":true,"star":true,"footer":"MIT Licensed | Copyright © 2021-present M. Gzegozevskis","description":"Chain Of Responsibility Pattern, Command Pattern, Interpreter Pattern, Iterator Pattern, Mediator Pattern, Memento Pattern, Observer Pattern, State Pattern, Strategy Pattern, Template Pattern, Visitor Pattern. Chain Of Responsibility abstract class Logger { protected Logger nextLogger; public void setNextLogger(Logger nextLogger){ this.nextLogger = nextLogger; } public void logMessage(String message){ log(message); if(nextLogger !=null){ nextLogger.logMessage(message); } } abstract protected void log(String message); } class ConsoleLogger extends Logger { public ConsoleLogger(){ } @Override protected void log(String message) { System.out.println(\\"Console::Logger: \\" + message); } } class EMailLogger extends Logger { public EMailLogger(){ } @Override protected void log(String message) { System.out.println(\\"EMail::Logger: \\" + message); } } class FileLogger extends Logger { public FileLogger(){ } @Override protected void log(String message) { System.out.println(\\"File::Logger: \\" + message); } } public class Main { private static Logger getChainOfLoggers(){ Logger emailLogger = new EMailLogger(); Logger fileLogger = new FileLogger(); Logger consoleLogger = new ConsoleLogger(); emailLogger.setNextLogger(fileLogger); fileLogger.setNextLogger(consoleLogger); return emailLogger; } public static void main(String[] args) { Logger loggerChain = getChainOfLoggers(); loggerChain.logMessage(\\"Null pointer\\"); loggerChain.logMessage(\\"Array Index Out of Bound\\"); loggerChain.logMessage(\\"Illegal Parameters\\"); } }","head":[["meta",{"property":"og:url","content":"https://www.programuoki.lt/java/elgsenos.html"}],["meta",{"property":"og:site_name","content":"Programuoki.lt"}],["meta",{"property":"og:title","content":"Objektų elgsenos šablonai"}],["meta",{"property":"og:description","content":"Chain Of Responsibility Pattern, Command Pattern, Interpreter Pattern, Iterator Pattern, Mediator Pattern, Memento Pattern, Observer Pattern, State Pattern, Strategy Pattern, Template Pattern, Visitor Pattern. Chain Of Responsibility abstract class Logger { protected Logger nextLogger; public void setNextLogger(Logger nextLogger){ this.nextLogger = nextLogger; } public void logMessage(String message){ log(message); if(nextLogger !=null){ nextLogger.logMessage(message); } } abstract protected void log(String message); } class ConsoleLogger extends Logger { public ConsoleLogger(){ } @Override protected void log(String message) { System.out.println(\\"Console::Logger: \\" + message); } } class EMailLogger extends Logger { public EMailLogger(){ } @Override protected void log(String message) { System.out.println(\\"EMail::Logger: \\" + message); } } class FileLogger extends Logger { public FileLogger(){ } @Override protected void log(String message) { System.out.println(\\"File::Logger: \\" + message); } } public class Main { private static Logger getChainOfLoggers(){ Logger emailLogger = new EMailLogger(); Logger fileLogger = new FileLogger(); Logger consoleLogger = new ConsoleLogger(); emailLogger.setNextLogger(fileLogger); fileLogger.setNextLogger(consoleLogger); return emailLogger; } public static void main(String[] args) { Logger loggerChain = getChainOfLoggers(); loggerChain.logMessage(\\"Null pointer\\"); loggerChain.logMessage(\\"Array Index Out of Bound\\"); loggerChain.logMessage(\\"Illegal Parameters\\"); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"M.Gžegoževskis"}],["meta",{"property":"article:tag","content":"Programavimas"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2021-10-01T00:00:00.000Z"}]]},"headers":[{"level":2,"title":"Chain Of Responsibility","slug":"chain-of-responsibility","link":"#chain-of-responsibility","children":[]},{"level":2,"title":"Command","slug":"command","link":"#command","children":[]},{"level":2,"title":"Iterator","slug":"iterator","link":"#iterator","children":[]},{"level":2,"title":"Observer","slug":"observer","link":"#observer","children":[]},{"level":2,"title":"Observer 2 pavyzdys","slug":"observer-2-pavyzdys","link":"#observer-2-pavyzdys","children":[]},{"level":2,"title":"Interpreter","slug":"interpreter","link":"#interpreter","children":[]},{"level":2,"title":"Mediator","slug":"mediator","link":"#mediator","children":[]},{"level":2,"title":"State","slug":"state","link":"#state","children":[]},{"level":2,"title":"Strategy","slug":"strategy","link":"#strategy","children":[]},{"level":2,"title":"Template","slug":"template","link":"#template","children":[]},{"level":2,"title":"Visitor","slug":"visitor","link":"#visitor","children":[]},{"level":2,"title":"Memento","slug":"memento","link":"#memento","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.44,"words":1632},"filePathRelative":"java/elgsenos.md","excerpt":"<p>Chain Of Responsibility Pattern, Command Pattern, Interpreter Pattern, Iterator Pattern, Mediator Pattern, Memento Pattern, Observer Pattern, State Pattern, Strategy Pattern, Template Pattern, Visitor Pattern.</p>\\n<h2> Chain Of Responsibility</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">abstract</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Logger</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">protected</span> <span class=\\"token class-name\\">Logger</span> nextLogger<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">setNextLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Logger</span> nextLogger<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>nextLogger <span class=\\"token operator\\">=</span> nextLogger<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">logMessage</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>nextLogger <span class=\\"token operator\\">!=</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\nnextLogger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">logMessage</span><span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">abstract</span> <span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  \\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConsoleLogger</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Logger</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">ConsoleLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> message<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>    \\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Console::Logger: \\"</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">EMailLogger</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Logger</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">EMailLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> message<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>    \\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"EMail::Logger: \\"</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">FileLogger</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Logger</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">FileLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> message<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>    \\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"File::Logger: \\"</span> <span class=\\"token operator\\">+</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Main</span> <span class=\\"token punctuation\\">{</span>  \\n<span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">Logger</span> <span class=\\"token function\\">getChainOfLoggers</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n<span class=\\"token class-name\\">Logger</span> emailLogger <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">EMailLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">Logger</span> fileLogger <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">FileLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">Logger</span> consoleLogger <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ConsoleLogger</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nemailLogger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setNextLogger</span><span class=\\"token punctuation\\">(</span>fileLogger<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nfileLogger<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setNextLogger</span><span class=\\"token punctuation\\">(</span>consoleLogger<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">return</span> emailLogger<span class=\\"token punctuation\\">;</span>  \\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token class-name\\">Logger</span> loggerChain <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getChainOfLoggers</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nloggerChain<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">logMessage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Null pointer\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nloggerChain<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">logMessage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Array Index Out of Bound\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nloggerChain<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">logMessage</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Illegal Parameters\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
