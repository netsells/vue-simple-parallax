import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import VueParallax from '../src/index';

Vue.component('vue-parallax', VueParallax);

storiesOf('VueParallax', module)
    .add('Default', () => `
        <div style="height: 300vh">
            <p>Scroll down!</p>
            <div style="height: 100vh" />

            <vue-parallax>
                <div slot="background" style="background: linear-gradient(red, green, blue)" />
                <div style="border: 3px solid black;">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum, lorem eu volutpat dignissim, nibh risus sagittis felis, sed pharetra sapien ipsum sit amet quam. In non risus sapien. Mauris convallis magna tincidunt, tristique ligula sed, ullamcorper turpis. Ut vel diam et dui convallis ultricies vel eu risus. Nunc tincidunt, ante at tristique volutpat, lorem lorem aliquam ex, vel malesuada eros est nec dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris accumsan mollis mauris vel fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus ante sollicitudin aliquet porttitor.</p>
                    <p>Phasellus ornare tincidunt elit, interdum facilisis diam commodo in. Mauris non suscipit orci. Sed in tempor quam. Etiam imperdiet elementum erat, id gravida urna semper in. Nam varius porttitor ornare. Suspendisse pharetra, quam at fermentum venenatis, massa felis euismod dolor, eu aliquet erat eros et augue. Maecenas tincidunt tempus elementum. Fusce quis tellus at augue convallis molestie. Nullam non tincidunt mauris.</p>
                    <p>Mauris ut malesuada turpis. Sed laoreet nulla odio, vitae luctus quam lacinia in. Vestibulum ut dictum ante. Curabitur quis sem elit. Sed pellentesque ultrices justo at tempor. Praesent hendrerit urna non risus tempor, quis commodo nibh pulvinar. Vestibulum vestibulum sem id ex mollis tempus. Proin tempor odio pharetra neque porttitor porta quis a urna. Duis velit quam, tincidunt vitae egestas eu, porta at odio. Integer commodo risus ac arcu accumsan, non volutpat quam luctus. Nunc feugiat eros nec feugiat dignissim. Curabitur scelerisque odio vitae tempor blandit. In pulvinar quis eros eu pharetra. Mauris vulputate urna lobortis nisl auctor maximus. Sed eget egestas tortor, a auctor nunc. Vestibulum ultrices leo eget dapibus euismod.</p>
                </div>
            </vue-parallax>

            <div style="height: 100vh" />
        </div>
    `);
