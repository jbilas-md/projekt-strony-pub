'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure' // Odkomentuj to tylko jeśli masz plik structure.ts

export default defineConfig({
  name: 'default',
  title: 'Novamedic CMS',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  schema, // To pobiera obiekt z poprawioną tablicą types
  plugins: [
    structureTool({structure}), // Używamy nowej wersji bez zbędnych dodatków na start
    visionTool({defaultApiVersion: apiVersion}),
  ],
})