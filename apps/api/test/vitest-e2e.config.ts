import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import { compilerOptions } from '../tsconfig.json'

const alias = Object.fromEntries(
  Object.entries(compilerOptions.paths).map(([key, value]) => [
    key.replace('/*', ''),
    resolve(__dirname, '../', value[0].replace('/*', '')),
  ])
)

export default defineConfig({
  test: {
    root: './',
    include: ['**/*.e2e-spec.ts'],
  },
  resolve: {
    alias,
  },
})
