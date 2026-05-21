import { type SchemaTypeDefinition } from 'sanity'

import { service } from './service'
import { blog } from './blog' // 1. pehle import karo

export const schema = {
  types: [service, blog], // 2. yahan array mein add kar do
}