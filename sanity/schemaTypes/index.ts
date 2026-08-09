// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import blockContent from './blockContent'
import author from './author'
import pricingCategory from './pricingCategory'
import treatmentPackage from './treatmentPackage'
import faqItem from './faqItem'
import faqCategory from './faqCategory'
import procedure from './procedure'
import review from './review'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, pricingCategory, treatmentPackage, faqCategory, faqItem, procedure, review],
}