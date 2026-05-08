www.angelacullen.com

---

## 2026 updates - using Claude to revive old CRA build artefacts

I've owned this domain since I was at university, back when I was an artist/animator specialising in Macromedia/Adobe Flash. The last time it was updated was 2019; I put it together from CRA but only deployed the build artefacts to github pages, keeping the source files locally on a laptop. That laptop has since turned into a brick, so I decided to update the website by converting the code to 'plain' HTML/CSS/JS - a deliberate simplification and something of a luxury in the modern web development landscape. 

It also seemed like a good opportunity to learn how to use agentic LLMs. I've followed the advances in prompt/response 'chat' interactions with LLMs since the first ChatGPT release in November 2022. Although I've been less interested in coding 'agents', in 2026 I'm keen to make sure I keep my knowledge up to date even if I don't end up adopting agentic LLM usage fully.

Updating angelacullen.com felt like a suitably low-stakes task for the agent (Claude Code in my case) as it would require me to keep an eye on security and access (in this case relating to my github account) while remaining a straightforward task that is well within the capability of the LLM.

I've included a transcript of the Claude Code conversation that I had (with a few minor redactions for privacy/security and readability purposes). I think it's important to be transparent and to show exactly what is going on between the human and the LLM. I see a lot of sales-pitchy talk about how great coding agents are and hear a lot about people making big projects, but we almost never see how the sausage is made.

### What worked well

It was useful to get the HTML/CSS converted in one step without having to painstakingly do it myself. This gives me a solid starting point from which to add my own manual tweaks. 

### What worked less well 

While the HTML/CSS conversion probably saved approximately an hour of manual work, there was a lot of back and forth over basic git logistics and account admin (eg. branch renaming). This cost time rather than saving it. 

Maybe this would improve over time if I used Claude Code more, but at this scale, using an AI agent isn't saving me any time on these specific tasks, and introduces an unnecessary security risk. It might be more worth it for people who are less confident on the fundamentals of web development however, and I'm generally in favour of the democratisation of tech skills.

### Token usage 

I used Claude's Sonnet 4.6 model. The Opus model exists for more heavy duty work but Sonnet 4.6 is a much cheaper model and perfectly capable of the straightforward reasoning required here. 

|                                         | Tokens    |
|-----------------------------------------|-----------|
| Output (Claude's responses)             | 50,226    |
| Cache writes (context sent fresh)       | 117,085   |
| Cache reads (context served from cache) | 3,663,812 |
| Uncached input                          | 146       |

<img width="561" height="290" alt="Screenshot 2026-05-05 at 19 04 09" src="https://github.com/user-attachments/assets/2c70f835-6f53-4440-b931-5787564d4a80" />

The large 'cache reads' figure reflects how Claude Code works: the full project context is re-sent on each interaction, but repeated context is served from the cache at a lower cost. The session used 27% of my usage limit on the Pro plan. This is pretty reasonable for a project of this size, and I'm happy that I won't need to upgrade any time soon!

### Claude's Pull Request and conversation

- You can view the [Pull Request that Claude made here](https://github.com/NuclearError/NuclearError.github.io/pull/2).

- You can view a transcript of the [full conversation with Claude Code here](claude-conversation-2026-05-05.md).
