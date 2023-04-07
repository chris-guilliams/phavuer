<template>
    <Container :x="x" :y="y">
    <Rectangle :width="100" :height="100" :origin="0" :fillColor="addable ? 0x333333 : 0x888888" @pointerdown="onClickBox" />
    <Text :x="50" :y="50" :origin="0.5" :style="fontStyle({ color: '#5AF', fontSize: 18 })" v-if="addable" text="[＋]" />
    </Container>
</template>

<script>
import { defineComponent } from 'vue'
import { gameObjectProps, mapProps } from '../props.js'
import { gameObjectEmits } from '../emits.js'
import Container from './Container.vue';
import Rectangle from './Rectangle.vue';
import Text from './Text.vue';

export default defineComponent({
emits: [...gameObjectEmits, 'add'],
props: {
    ...gameObjectProps,
    ...mapProps(
        'addable', 'x', 'y'
    )
},
components: { Container, Rectangle, Text },
setup (props, context) {
    const onClickBox = () => {
        if (props.addable) context.emit('add')
    }
    return { fontStyle, onClickBox }
}
})
</script>
