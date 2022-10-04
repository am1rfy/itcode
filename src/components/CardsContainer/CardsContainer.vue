<template>
  <div class="cards-container"
       :style="activeLabelIsEmpty">
    <template v-if="activeLabelInfo.cardsIds.length !== 0">
      <CardItem
        v-for="item in activeCards"
        :key="item.id"
        :card="item"
      />
    </template>
    <template v-else>
      <div class="label-empty">"{{activeLabelInfo.title}}" is now empty</div>
    </template>
  </div>
</template>

<script>
import CardItem from "@/components/CardsContainer/CardItem";

export default {
  name: "NotesContainer",
  components: {
    CardItem
  },
  props: {
    activeLabelInfo: {
      id: Number,
      title: String,
      cardsIds: Array
    }
  },
  computed: {
    activeCards() {
      return this.cards.filter(card => this.activeLabelInfo.cardsIds.includes(card.id))
    },
    activeLabelIsEmpty() {
      return this.activeLabelInfo.cardsIds.length === 0 ? { justifyContent: 'center', textAlign: 'center' } : { justifyContent: 'initial', textAlign: 'initial' }
    }
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          path: 'Path',
          title: 'Title',
          date: '30.09.2022',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          id: 2,
          path: 'Path',
          title: 'Title',
          date: '28.09.2022',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 3,
          path: 'Path',
          title: 'Title',
          date: '27.09.2022',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: 4,
          path: 'Path',
          title: 'Title',
          date: '21.08.2022',
          text: 'Lorem ipsum'
        }
      ]
    }
  },
}
</script>

<style scoped>
  .cards-container {
    margin-left: 5vh;
    display: flex;
    flex-wrap: wrap;
  }
  .label-empty {
    color: var(--bs-gray-600);

    font-weight: 400;
    font-size: 1.375rem;

    letter-spacing: 0;
    line-height: 1.75rem;

    cursor: default;
  }
</style>