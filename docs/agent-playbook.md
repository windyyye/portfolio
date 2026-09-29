# AI agent playbook

These rules keep changes understandable, reviewable, and safe.

1. **Work one step at a time.** Complete one requested step, then stop and show what changed before doing more.
2. **Protect the docs.** Never overwrite `README.md` or anything under `docs/` unless explicitly asked.
3. **Keep commits small.** Make focused changes with clear commit messages.
4. **Use the workflow.** Work on a branch and open a pull request that references an issue; do not work directly on `main`.
5. **Protect infrastructure.** Do not change DNS or handle, add, print, or commit secrets.
6. **Build before review.** Run the production build before opening a pull request and report the result.
7. **Be honest.** Do not invent clients, metrics, experience, or test results. Flag uncertainty instead of guessing.
8. **Follow DESIGN.md.** Read `DESIGN.md` before any UI work. It is the source of truth for visual design — do not improvise styling, fonts, or colors.
