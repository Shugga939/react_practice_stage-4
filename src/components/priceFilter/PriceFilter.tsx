import { FC, useEffect, useRef, useState } from "react";
import './PriceFilter.scss'
import './RangeSlider'
import './Range-slider.css'
import { useAppDispatch } from "../../hooks/redux";
import { sortSlice } from "../../store/reducers/sort";
import { startPriceValue } from "../../utils/consts";
declare const window: any;

let PriceFilter: FC = () => {

  const [show, setShow] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [from, setFrom]= useState(0)
  const [to, setTo]= useState(0)
  const cooldown = useRef({cd: false, lv_from: 0, lv_to: 0})
  const dispatch = useAppDispatch()
  const {changePrice} = sortSlice.actions

  useEffect(()=> {
    
    if (!sliderRef.current?.childNodes[0]) {
      new window.Slider({
        min_value : 1,
        max_value : 10000,
        values : [104, 9990],
        separator : '-',
        modifier : '',
        range : true,  
        orientation : "horizontal",
        label : '',
        step : '',  
        marks : [
          {
            value: 1250,
            label: '╹'
          },
          {
            value: 2500,
            label: '┃'
          },
          {
            value: 3750,
            label: '╹'
          },
          {
            value: 5000,
            label: '┃'
          },
          {
            value: 6250,
            label: '╹'
          },
          {
            value: 7500,
            label: '┃'
          },
          {
            value: 8750,
            label: '╹'
          },
         
        ]
      },sliderRef.current)

      let sliderInput : HTMLInputElement | null = document.querySelector('.slider-value')
      let slCont : HTMLDivElement | null = document.querySelector('.filter__item')
      let slider : HTMLDivElement | null | undefined = slCont?.querySelector('.slider')
      
      if (sliderInput?.value) {
        setFrom(+sliderInput.value.split('-')[0]);
        setTo(+sliderInput?.value.split('-')[1]);
      }

      slider?.addEventListener('mousemove',(e)=>{
        if (sliderInput?.value) {
          setFrom(+sliderInput?.value.split('-')[0]);
          setTo(+sliderInput?.value.split('-')[1]);
        }
      })
    }
  },[])
  
  const showFilter = ()=> {
    setShow(!show)
  }

  useEffect(()=> {
    cooldown.current.lv_from = from
    cooldown.current.lv_to = to

    if (!cooldown.current.cd) {
      cooldown.current.cd =true

      setTimeout(()=>{
        if (cooldown.current.lv_from == 0) cooldown.current.lv_from = startPriceValue.from
        if (cooldown.current.lv_to == 0) cooldown.current.lv_to = startPriceValue.to
        dispatch(changePrice([cooldown.current.lv_from, cooldown.current.lv_to]))
        cooldown.current.cd =false
      },800)

    } else {
      cooldown.current.lv_from = from
      cooldown.current.lv_to= to
    }
    
  },[from, to, cooldown.current.cd])


  return (
    <div className='filter__item'>
      <h3
        className={show? 'filter__header' : 'filter__header filter__header--hide'}
        onClick={showFilter}
      > Цена, руб.
      </h3>
      
        <div className={show? "priceSlider" : "priceSlider hide"}>
          <div className="priceSlider__inputs">
            <input 
              type="number" 
              className="input priceSlider__from"
              readOnly={true}
              value={from}
            />
            <input 
              type="number" 
              className="input priceSlider__to" 
              readOnly={true}
              value={to}
            />
          </div>
          <div className="priceSlider__slider" ref={sliderRef}/>
        </div>
    </div>
  )
}

export default PriceFilter;