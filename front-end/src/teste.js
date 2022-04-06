import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {Button} from 'react-bootstrap';
import moment from 'moment';
import './teste.scss';

export default function Teste() {

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  const [hour, setHour] = React.useState(false);

  function hourClick(h){
    setHour(h)
  }

  const data = moment(dateState).format('DD/MM/YYYY');

  return (
    <>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    
    <div>
      <Button className="teste" onClick={() => hourClick("09:00")}>09:00</Button>
      <Button className="teste" onClick={() => hourClick("10:00")}>10:00</Button>
      <Button className="teste" onClick={() => hourClick("11:00")}>11:00</Button>
      <Button className="teste" onClick={() => hourClick("14:00")}>14:00</Button>
      <Button className="teste" onClick={() => hourClick("15:00")}>15:00</Button>
      <Button className="teste" onClick={() => hourClick("16:00")}>16:00</Button>
    </div>
    <p>Data selecionada <b>{data}</b></p>
    <p>Hora selecionada <b>{hour}</b></p>
    </>
  )
}