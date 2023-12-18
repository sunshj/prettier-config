/**@type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  semi: false,
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/output/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.vercel/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/pnpm-lock.yaml',
      ],
      options: {
        requirePragma: true,
      },
    },
  ],
}
