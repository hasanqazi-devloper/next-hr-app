export const blog = {
  name: 'blog',
  title: 'Our Blogs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Blog Content',
      type: 'text', // yahan aap bada article likh sakte ho
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true } // is se image crop/adjust ho sakegi
    },
    {
      name: 'slug',
      title: 'Slug / URL Path',
      type: 'slug',
      options: { source: 'title' }
    }
  ],
}