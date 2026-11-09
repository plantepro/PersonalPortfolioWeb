# Poems

Add one `.md` file per real poem in this directory. Use the poem's slug as the
filename, for example `a-poem-title.md`.

Each poem file should begin with frontmatter in this format:

```yaml
---
title: "[Original poem title]"
year: "[Year, if known]"
excerpt: "[An exact short excerpt from the poem]"
---
```

After the closing `---`, paste the original poem text exactly as provided.
Preserve its line breaks, stanza spacing, punctuation, and language. The `year`
field is optional. The archive loader ignores this README because it has no
poem frontmatter.
