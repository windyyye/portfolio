/**
 * rehype-margin — implements the marginalia authoring seam (spec #26).
 *
 * In markdown:  > margin: a handwritten note
 * Becomes:      <aside class="margin-note">a handwritten note</aside>
 *
 * Blockquote form was chosen because Sätteri (Astro 7's markdown processor)
 * consumes remark directives natively with no extension point, but runs user
 * rehype plugins on the materialized tree — so we let the blockquote exist and
 * re-tag it. Notes keep inline formatting; empty notes are left untouched.
 * The prefix must be the exact lowercase word "margin:".
 */
import { visit } from 'unist-util-visit';

/** @type {import('unified').Plugin<[]>} */
export default function rehypeMargin() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index === undefined) return;
      if (node.tagName !== 'blockquote') return;

      const firstPara = node.children.find((child) => child.tagName === 'p');
      const firstText = firstPara?.children?.[0];
      const text = firstText?.value ?? '';
      if (!text.startsWith('margin:')) return;

      firstText.value = text.slice('margin:'.length).trim();
      node.tagName = 'aside';
      node.properties = { class: 'margin-note' };
    });
  };
}
