import styled from "styled-components"
import sortSvg from "../../assets/images/sort.svg"
import filterSvg from "../../assets/images/filter.svg"
import createSvg from "../../assets/images/create.svg"
import { Link } from "react-router-dom"

export const Filter = styled.button`
  justify-content: center;
  position: absolute;
  width: 140px;
  height: 35px;
  left: 46px;
  top: 102px;
  background-image: url(${filterSvg});
  background-repeat: no-repeat;
  background-position: 107px 7px;
  background-color: #fff;
  color: #00b6f0;
  border: 2px solid #00b6f0;
`

export const Container = styled.div`
  background-color: #ffffff;
  height: auto;
  padding: 1vw;
`
export const DivButtons = styled.div`
  background-color: #ffffff;
  height: 60px;
`

export const DivEvents = styled.div`
  background-color: #ffffff;
  height: auto;
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  width: 100%;
  padding: 1vw;
  justify-content: flex-start;
`
export const DivCreate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`
export const Create = styled(Link)`
  width: 141px;
  height: 37px;
  border-radius: 15px;
  border-style: none;
  margin-right: 5px;

  background-color: #fff;
  color: #00b6f0;
  border: 2px solid #00b6f0;
  display: flex;
  align-items: center;
  :link,
  :visited,
  :active {
    text-decoration: none;
  }

`
export const TextCreate = styled.p`
  width: 134px;
  height: 19px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
`
export const CreateAdd = styled(Link)`
  width: 55px;
  height: 65px;
  background-color: transparent;
  border-style: none;
  background-image: url(${createSvg});
  background-repeat: no-repeat;
  background-position: 0 7px;
`
export const Select = styled.select`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 140px;
  height: 35px;
  left: 206px;
  top: 102px;
  text-align: center;
  background-color: #fff;
  color: #00b6f0;
  border: 2px solid #00b6f0;
  background-image: url(${sortSvg});
  background-repeat: no-repeat;
  background-position: right center;
  background-position: 107px 7px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  ::-ms-expand {
    display: none; /*Evita que se muestre la flecha por defecto en versiones de IE*/
  }
`
export const OptionSelect = styled.option``
