import Reveal from '/reveal/reveal.esm.js';
import RevealMarkdown from '/reveal/plugin/markdown/markdown.esm.js';
import RevealNotes from '/reveal/plugin/notes/notes.esm.js';

export default function config () {
  const reveal = new Reveal({
    transition: 'convex',
    width: '100%',
    minScale: 0.2,
    maxScale: 2.0,
    margin: 0.04,
    navigationMode: 'linear',
    history: true,
    plugins: [
      RevealMarkdown,
      RevealNotes
    ]
  });
  reveal.initialize();
}
