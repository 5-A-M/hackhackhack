import React, { Fragment, useEffect } from 'react'
import HeaderIndex from '../Header/HeaderIndex'
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import { useState } from 'react'
import { SERVER_URL } from '../../../../config/config';
import Formular from './Formular';
import Table from './Table';
import _ from "lodash"

const IntoExchange = (props) => {
  const [random1Array, setRandom1Array]= useState(()=> [])
  const [random2Array, setRandom2Array]= useState(()=> [])
  const [rateWin, setRateWin]= useState(()=> [])
  useEffect(()=> {
    const a= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90) ]
    setRandom1Array(()=> a)
    const b= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90)]
    setRandom2Array(()=> b)
  }, [])
  useEffect(()=> {
    const intervalId= setInterval(()=> {
      const a= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90) ]
      setRandom1Array(()=> a)
      const b= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90)]
      setRandom2Array(()=> b)
    }, 300000)
    return ()=> clearInterval(intervalId)
  }, [])
    // eslint-disable-next-line
  const [searchParams, setSearchParams]= useSearchParams()
  const [table, setTable]= useState(()=> {})
  const [formular, setFormular]= useState(()=> {})
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: `${SERVER_URL}/api/v1/get/table/lobby`,
        method: "get",
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        params: {
          id_lobby: searchParams.get("id_lobby")  
        },
        responseType: "json"
      })
      const result= await res.data
      if(result.result.length === 6) {
        setRateWin(()=> random1Array)
      }
      else if(result.result.length === 8) {
        setRateWin(()=> random2Array)
      }
      else {
        setRateWin(()=> [1, 2, 3, 4])
      }
      setTable(()=> result)

    })()
  }, [searchParams, random1Array, random2Array])
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: `${SERVER_URL}/api/v1/get/formular/lobby`,
        method: "get",
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        params: {
          id_lobby: searchParams.get("id_lobby")  
        },
        responseType: "json"
      })
      const result= await res.data
      setFormular(result)
    })()
  }, [searchParams])
  
  return (
    <Fragment>
      <HeaderIndex />
      <div className="sajklsajskljsdassas" style={{width: "100%", display: "flex", }}>
        <Formular setTable={setTable} {...formular} />
        <Table rateWin={rateWin} {...table} />
      </div>
    </Fragment>
  )
}

export default IntoExchange