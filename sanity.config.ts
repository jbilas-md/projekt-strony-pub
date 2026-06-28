'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {table} from '@sanity/table'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure' // Odkomentuj to tylko jeśli masz plik structure.ts

export default defineConfig({
  name: 'default',
  title: 'Novamedic CMS',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ouwqhntn',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  schema, // To pobiera obiekt z poprawioną tablicą types
  plugins: [
    structureTool({structure}), // Używamy nowej wersji bez zbędnych dodatków na start
    table(), // Plugin pozwalający na edycję tabel w Portable Text
    visionTool({defaultApiVersion: apiVersion}),
  ],
})