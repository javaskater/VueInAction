

## Calc

* is a javascript object representing 
* the pureView
* it references the div
* it does only know 2xintput and 1xoutput element and nothing
  * in between !!!
  * not heir contents at least !!!

## CalcValue

* it it the ModelView element see [Martin Fowler Post](https://martinfowler.com/eaaDev/PresentationModel.html), 
* in that case, it references the View (_Calc_) itself !!!


### From line 58 of the example:

```̀javascript
var calc = new Calc(
    elem.querySelector('input.calc-x-input'),
    elem.querySelector('input.calc-y-input'),
    elem.querySelector('span.calc-result')
);
var lastValues = new CalcValue(
    calc,
    parseFloat(calc.xInput.value),
    parseFloat(calc.yInput.value)
);
```

* apart from the reference, it contains
  * x value
  * y value
  * result : that is here the difference with a pure model 
    * which would only contain x and y !!!

## The main program

* **cv** in the main program means current value, 
  * either lastvalues, or newvalues
  * anyway: a ModelView and not a view....
* That is the modelview that has to render itself !!!
  * it calls the iew to render herself passing the result argument by !!