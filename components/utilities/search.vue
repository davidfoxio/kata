<template>
  <div class="search-wrap">
    <button
      ref="search"
      class="ml-0 md:ml-small search-icon outline-none focus:outline-none hidden md:block"
      @click="searchOpen = true"
    >
      <SearchIcon />
    </button>
    <transition name="fade">
      <div v-show="searchOpen" class="search-lightbox">
        <div id="aa-search"></div>
        <button
          ref="close"
          class="close outline-none focus:outline-none hidden md:block"
          @click="searchOpen = false"
        >
          Close
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchIcon from '~/assets/svgs/search.svg?inline'

export default {
  components: { SearchIcon },
  data() {
    return {
      searchOpen: false,
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          defer: true,
          href:
            'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css',
        },
      ],
      script: [
        {
          hid: 'algolia',
          defer: true,
          callback: () => {
            this.initSearch()
          },
          src:
            'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js',
        },
      ],
    }
  },
  mounted() {
    if (process.client && window.matchMedia('(max-width: 599px)').matches) {
      this.searchOpen = true
    }
  },
  methods: {
    initSearch() {
      const currentBranch = process.env.HEAD // Injected by your build tool
      let targetBranch = 'master'
      if (currentBranch === 'dev') {
        targetBranch = currentBranch
      }

      algoliasearchNetlify({
        appId: 'JJ3XWFTJJP',
        apiKey: '6ffac447b1f7dc6dc2824f718e8dbea6',
        siteId: 'e10b183f-94fa-491d-a64a-f4fe70c26680',
        branch: targetBranch,
        selector: 'div#aa-search',

        theme: {
          mark: '#198E83', // Color of the matching content
          background: '#fff', // Background Color of the input and the panel
          // selected: '#111432', // Background Color of the selected item
          text: '#198E83', // Color of the title of the items
          colorSourceIcon: '#198E83', // Color of the icon on the left of results
        },
      })
    },
  },
}
</script>

<style lang="scss">

.search-icon {
  border: none;
  width: 20px;
  height: 20px;
}

.search-wrap {
  width: 30px;
  height: 30px;
}

@media (min-width: 600px) {
  .kata-header.is-home {
    svg path {
      fill: white;
    }

    &.sticky {
      svg path {
        fill: black;
      }
    }
  }
  .search-lightbox {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 1000;
    background: rgba(white, 0.95);
    transition: 1s ease;

    .close {
      position: absolute;
      top: 5%;
      right: 5%;
      border-bottom: 2px solid $primary;
      color: black;
    }
  }

  #aa-search {
    width: 80%;
    margin: auto;

    .aa-Form {
      height: auto;
      align-items: center;
      border: 2px solid $secondary;
      background: white;
      padding: 5px;
    }

    .aa-TouchSearchButton {
      display: flex;
    }

    .aa-InputWrapper {
      height: auto;
    }

    .aa-InputWrapperPrefix,
    .aa-InputWrapperSuffix {
      position: static;
    }

    .aa-Input {
      caret-color: $primary;
      color: black;
      appearance: none;
      box-shadow: none;
      border: none;
      height: auto;
      position: static;
      padding: 0 0 0 10px;

      &::placeholder {
        color: black;
      }

      &:focus {
        border-color: none;
      }
    }
  }

  .aa-Panel {
    position: fixed !important;
  }
}
@media (max-width: 599px) {
  .aa-DetachedSearchButton {
    border: none;
    padding: 0;
  }
  .aa-DetachedSearchButtonPlaceholder {
    display: none;
  }
  .aa-DetachedOverlay {
    z-index: 999999;
    background-color: rgba(white, 0.95);
  }
  .aa-DetachedContainer .aa-DetachedFormContainer {
    border: none;
    padding: 10%;
  }
}
</style>
