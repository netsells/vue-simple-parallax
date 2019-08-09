[![npm version](https://badge.fury.io/js/%40netsells%2Fvue-simple-parallax.svg)](https://badge.fury.io/js/%40netsells%2Fvue-simple-parallax)
[![Build Status](https://travis-ci.com/netsells/vue-simple-parallax.svg?branch=master)](https://travis-ci.com/netsells/vue-simple-parallax)
[![codecov](https://codecov.io/gh/netsells/vue-simple-parallax/branch/master/graph/badge.svg)](https://codecov.io/gh/netsells/vue-simple-parallax)

# Vue Simple Parallax

A super simple, fully unit tested, vertical scrolling parallax background component

## Installation
```
yarn add @netsells/vue-simple-parallax
```

## Usage

```javascript
import VueParallax from '@netsells/vue-simple-parallax';

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
