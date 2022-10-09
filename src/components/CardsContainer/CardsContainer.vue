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
import { useNoteStore } from '@/stores/noteStore'

export default {
  name: "NotesContainer",
  components: {
    CardItem
  },
  props: {
    activeLabelInfo: {
      title: String,
      cardsIds: Array
    }
  },
  computed: {
    activeCards() {
      return this.cards.filter(item => this.activeLabelInfo.cardsIds.includes(item.id))
    },
    activeLabelIsEmpty() {
      return this.activeLabelInfo.cardsIds.length === 0 ? { justifyContent: 'center', textAlign: 'center' } : { justifyContent: 'initial', textAlign: 'initial' }
    }
  },
  data() {
    return {
      cards: useNoteStore().getItems
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