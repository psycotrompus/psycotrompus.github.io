import Reveal from '/reveal/reveal.esm.js';
import RevealMarkdown from '/reveal/plugin/markdown/markdown.esm.js';
import RevealNotes from '/reveal/plugin/notes/notes.esm.js';

export default function config () {
  const reveal = new Reveal({
    transition: 'convex',
    minScale: 0.1,
    maxScale: 1.0,
    plugins: [
      RevealMarkdown,
      RevealNotes
    ]
  });
  reveal.initialize();
}
