---
title: Our First Challenge
pageTitle: Our First Challenge
description: Try to create a card for Chuck Norris
---

A card for Chuck. {% .lead %}

{% video src="/images/c_r_1.png" caption="b and r"/%}

## Instructions

Well, let's go on a little adventure and create a one-of-a-kind card for my dear friend Chuck Norris. We shared a magical camping trip just last weekend, and I want to send him a heartfelt, customized card to remember our time together. We'll start with this gentle prompt:

```
bob ross with chuck norris in a landscape 
with mountains, trees, and a tranquil lake, 
bob ross style --v 5 
```
{% figure src="/images/c_r_2.png" caption="b and r"/%}


Oh my, look at that! I seem to be quite the towering figure, while Chuck is just a happy little speck in the scene. It's just one of those charming little accidents that make life interesting. I'm quite fond of tiles 2 and 3, so I'll create some variations on them, like adding some fluffy clouds or maybe a friendly squirrel. But, you know, I feel like giving that prompt another try:

```
bob ross with chuck norris in a landscape with mountains, trees, and a tranquil lake, bob ross style --v 5 
```
Now let's have a look at our new collection of paintings:

PIC HERE

Well, isn't that something special? These images capture the essence of Chuck and me, surrounded by the beauty of nature.  I can almost hear the whispers of the wind through the trees and the gentle lapping of the water on the shore. I'm going to choose tile 2, which captures the spirit of our adventure, and upscale it to bring out all those lovely little details.

I can hit the web button and grab the link


![Chuck and Ross](/images/c_r_1.png)

```javascript
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure className='img-container'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className='full-image'/>
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
```

{% figure src="/images/c_r_1.png" caption="b and r"/%}


