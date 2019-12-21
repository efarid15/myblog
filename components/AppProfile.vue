<template>
  <div class="profile">
    <aside>
      <div class="profile__img">
        <img
          src="data:image/png;base64,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"
          width="56"
          height="63"
          alt="enalfarid"
        />
        <nuxt-link class="profile__link" to="/" aria-label="enalfarid">
          Enal Farid
        </nuxt-link>
      </div>
      <div class="profile__meta">
        <div v-if="$route.name.includes('blog-slug')" class="profile__name">
          Enal Farid
        </div>
        <h1 v-else="" class="profile__name">Enal Farid</h1>
        <h2 class="profile__description">
          {{ $t('description') }}
        </h2>
      </div>
      <div class="profile__navigation">
        <a
          href="https://about.me/enalfarid"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <nuxt-link :to="localePath('blog')">Blog</nuxt-link>
        <a
          v-for="social in socials"
          :key="social.code"
          :href="social.url"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ social.name }}
        </a>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { code: 'github', name: 'Github', url: 'https://github.com/enalfarid' },
        {
          code: 'twitter',
          name: 'Twitter',
          url: 'https://twitter.com/enalfarid'
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
/* purgecss start ignore */
.profile {
  &__img {
    @apply rounded-full ml-auto mr-auto h-24 w-24 p-5 flex items-center justify-center relative;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full overflow-hidden z-0;
    text-indent: -9999px;
  }

  &__meta {
    @apply text-center;
  }

  &__name {
    @apply leading-normal mt-0 mb-5 font-bold text-2xl;
    font-family: 'Bitter', serif;
  }

  &__description {
    @apply leading-normal mt-0;
  }

  &__navigation {
    @apply text-center mt-3;

    a:not(:last-child) {
      @apply mr-3;
    }
  }
}
/* purgecss end ignore */
</style>
