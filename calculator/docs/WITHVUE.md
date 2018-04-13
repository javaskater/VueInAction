

## That time using the Framework

* This is the ModeVue _Vue_
  * linked the view by el: on thid ModeVue Side

```javascript
function isNotNumericValue(value) {
    return isNaN(value) || !isFinite(value);
}
var calc = new Vue({
    el: '#app',
    data: { x: 0, y: 0, lastResult: 0 },
    computed: {
    result: function() {
        let x = parseFloat(this.x);
        if(isNotNumericValue(x))
            return this.lastResult;
        let y = parseFloat(this.y);
        if(isNotNumericValue(y))
            return this.lastResult;
        this.lastResult = x + y;
        return this.lastResult;
        }
    }
});
```

* The vue itself is in the Html:

```html
<div id="app">
    <p>x <input v-model="x"></p>
    <p>y <input v-model="y"></p>
    <p>---------------------</p>
    <p>= <span v-text="result"></span></p>
</div>
```