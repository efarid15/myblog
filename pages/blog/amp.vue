<script>
import Page from './index'
import { HOSTNAME } from '~/constant'

export default {
  extends: Page,
  head() {
    const { locales } = this.$i18n
    const link = locales
      .map((locale) => {
        let href = null
        if (locale.code === 'id') {
          href = `${HOSTNAME}/blog.xml`
        } else {
          href = `${HOSTNAME}/${locale.code}/blog.xml`
        }
        return {
          rel: 'alternate',
          type: 'application/rss+xml',
          href,
          title: `Blog - Enal Farid`
        }
      })
      .concat({
        rel: 'canonical',
        href: `${HOSTNAME}${this.localePath({ name: 'blog' })}`
      })
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}${this.localePath({ name: 'blog-amp' })}`
        }
      ],
      link,
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Blog',
            name: 'EnalFarid',
            headline: 'A personal site of Enal Farid',
            description: 'A personal site of Enal Farid',
            about: 'A personal site of Enal Farid',
            keywords: 'enalfarid, Enal Farid',
            genre: ['Personal', 'Tutorial', 'Programming', 'Review', 'Science'],
            copyrightYear: new Date().getFullYear(),
            dateCreated: '2017-03-12',
            inLanguage: ['English', 'Bahasa Indonesia'],
            isAccessibleForFree: 'true',
            isFamilyFriendly: 'true',
            license: 'https://opensource.org/licenses/MIT',
            image: {
              '@type': 'imageObject',
              url: `${HOSTNAME}/logo-ef.png`,
              width: '2739',
              height: '3102'
            },
            publisher: {
              '@type': 'Organization',
              name: 'EnalFarid',
              sameAs: 'https://www.twitter.com/enalfarid',
              logo: {
                '@type': 'imageObject',
                url: `${HOSTNAME}/logo-ef.png`,
                width: '2739',
                height: '3102'
              }
            },
            blogPosts: this.blogs.map((blog) => ({
              '@type': 'blogPosting',
              mainEntityOfPage: `${HOSTNAME}${this.localePath({
                name: 'blog-slug',
                params: { slug: blog.slug }
              })}`,
              headline: blog.title,
              description: blog.description,
              datePublished: blog.postedDate,
              dateCreated: blog.postedDate,
              dateModified: blog.updatedDate,
              wordcount: blog.readingTime.words,
              url: `${HOSTNAME}${this.localePath({
                name: 'blog-slug',
                params: { slug: blog.slug }
              })}`,
              image: {
                '@type': 'imageObject',
                url: `${HOSTNAME}${require(`~/assets/images${blog.img}`)}`,
                height: '1920',
                width: '614'
              },
              publisher: {
                '@type': 'Organization',
                name: 'EnalFarid',
                sameAs: 'https://www.twitter.com/enalfarid',
                logo: {
                  '@type': 'imageObject',
                  url: `${HOSTNAME}/logo-ef.png`,
                  width: '2739',
                  height: '3102'
                }
              },
              author: {
                '@type': 'Person',
                name: 'Enal Farid'
              }
            }))
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': `${HOSTNAME}${this.localePath({ name: 'blog-amp' })}`,
                  name: 'Blog'
                }
              }
            ]
          })
        }
      ]
    }
  }
}
</script>
