# ImageLayer

[@naivemap/mapbox-gl-image-layer](https://www.npmjs.com/package/@naivemap/mapbox-gl-image-layer) 可以加载任意投影的图片，该插件使用了 [Arrugator](https://gitlab.com/IvanSanchez/arrugator) 和 [Proj4js](https://github.com/proj4js/proj4js) 工具对图片重新投影，使其正确叠加到地图。

```bash
# yarn
yarn add @naivemap/mapbox-gl-image-layer proj4
# 或 npm
npm i @naivemap/mapbox-gl-image-layer proj4
```

例如有一张坐标系为 `EPSG:4326` 的 <a :href="$withBase('/assets/images/4326.png')" target="_blank">图片</a> 要叠加到地图，如下：

```js
import ImageLayer from '@naivemap/mapbox-gl-image-layer'

const layer = new ImageLayer('layer-4326', {
  url: '/images/4326.png',
  projection: 'EPSG:4326',
  coordinates: [
    [105.289838, 32.204171], // top-left
    [110.195632, 32.204171], // top-right
    [110.195632, 28.164713], // bottom-right
    [105.289838, 28.164713], // bottom-left
  ],
})

map.addLayer(layer, 'aeroway-line')
```

<ClientOnly>
  <common-code-view name="plugins-image-layer"/>
</ClientOnly>

> 更多参数（如透明度）和方法请查看 [ImageLayer API](https://github.com/naivemap/mapbox-gl-layers/blob/main/packages/mapbox-gl-image-layer/README.md)
