<template>
<Scene name="MainScene" :autoStart="true">
    <Container :x="20" :y="20">
    <Text :style="fontStyle({ fontSize: 21 })" text="2. Phavuer" />
    <Text :y="35" :style="fontStyle()" :text="`Count: ${count}`" />
    <Text :x="100" :y="35" :style="fontStyle({ color: '#5AF' })" @pointerdown="count--" v-if="count > 0" text="[DELETE]" />
    <Box :x="i * 110" :y="60" :addable="i === count" @add="count++" v-for="(_, i) in rectCount" :key="i" />
    </Container>
</Scene>
</template>

<script>
import { defineComponent, provide, inject, ref } from 'vue'
import { InjectionKeys } from '../index'
import Scene from './Scene.vue'
import Text from './Text.vue'
import Container from './Container.vue'
import Box from './Box.vue'

export default defineComponent({
components: {
    Scene, Text, Container, Box
},
setup () {
    const count = Vue.ref(0)
    const rectCount = Vue.computed(() => count.value < 7 ? count.value + 1 : count.value)
    return { count, rectCount, fontStyle }
}
})
</script>
<!-- 
components: { Scene, Container, Text, Box },
template: `
  <Scene name="MainScene" :autoStart="true">
    <Container :x="20" :y="20">
      <Text :style="fontStyle({ fontSize: 21 })" text="2. Phavuer" />
      <Text :y="35" :style="fontStyle()" :text="\`Count: \${count}\`" />
      <Text :x="100" :y="35" :style="fontStyle({ color: '#5AF' })" @pointerdown="count--" v-if="count > 0" text="[DELETE]" />
      <Box :x="i * 110" :y="60" :addable="i === count" @add="count++" v-for="(_, i) in rectCount" :key="i" />
    </Container>
  </Scene>`,
setup () {
  const count = Vue.ref(0)
  const rectCount = Vue.computed(() => count.value < 7 ? count.value + 1 : count.value)
  return { count, rectCount, fontStyle }
}
   -->