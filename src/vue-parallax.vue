<template>
    <div class="vue-parallax">
        <global-events
            target="window"
            @scroll="handleScroll"
        />

        <div
            :style="{
                top,
                bottom,
            }"
            class="vue-parallax-background"
        >
            <slot name="background" />
        </div>

        <slot />
    </div>
</template>

<script>
    import GlobalEvents from 'vue-global-events';

    export default {
        name: 'vue-parallax',

        components: {
            GlobalEvents,
        },

        props: {
            /**
             * Maximum distance the parallax can move the background in pixels
             */
            distance: {
                type: String,
                default: '300px',
            },
        },

        data() {
            return {
                throughPercent: 0,
            };
        },

        computed: {
            top() {
                return `calc((${ this.throughPercent } * ${ this.distance }) - ${ this.distance })`;
            },

            bottom() {
                return `calc(${ -this.throughPercent } * ${ this.distance })`;
            },
        },

        methods: {
            /**
             * Set the scroll needed based on how far the component has passed
             * through the window
             */
            handleScroll() {
                const { top, height } = this.$el.getBoundingClientRect();
                const startParallax = window.innerHeight;
                const endParallax = -height;
                const throughHeight = startParallax - endParallax;
                const through = height + endParallax + (startParallax - top);
                this.throughPercent = through / throughHeight;
            },
        },
    };
</script>

<style lang="scss">
    .vue-parallax {
        position: relative;
        overflow: hidden;

        .vue-parallax-background {
            position: absolute;
            width: 100%;
            left: 0;
            right: 0;
            z-index: -1;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            justify-content: stretch;

            > * {
                flex-grow: 1;
            }
        }
    }
</style>
