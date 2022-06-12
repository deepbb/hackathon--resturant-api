import React,{useState} from 'react'
import "./Scanner.css"
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';



const Scanner = () => {
    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate("/food")
    }
    
    const [data, setData] = useState('No result');
  return (
    <div className='scanContainer'>
    <div>
    <h1>Scan your QR code to order your Food</h1>
    </div>
    <div className='scanner'>
    <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <h3 onClick={handleClick}>{data}</h3>
    </div>
    </div>
  )
}

export default Scanner