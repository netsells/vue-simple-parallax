[![npm version](https://badge.fury.io/js/%40netsells%2Fvue-parallax.svg)](https://badge.fury.io/js/%40netsells%2Fvue-parallax)
[![Build Status](https://travis-ci.com/netsells/vue-parallax.svg?branch=master)](https://travis-ci.com/netsells/vue-parallax)
[![codecov](https://codecov.io/gh/netsells/vue-parallax/branch/master/graph/badge.svg)](https://codecov.io/gh/netsells/vue-parallax)

# Vue Parallax

A super simple, fully unit tested, vertical scrolling parallax background component

## Installation
```
yarn add @netsells/vue-parallax
```

## Usage

```javascript
import VueParallax from '@netsells/vue-parallax';

export default {
    components: {
        VueParallax,
    },
};
```

```html
<template>
    <vue-parallax>
        <div slot="background" style="background: linear-gradient(red, green, blue)" />
        <div>
            Your foreground
        </div>
    </vue-parallax>
</template>
```
