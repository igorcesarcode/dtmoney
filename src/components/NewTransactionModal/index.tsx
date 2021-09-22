import { useState ,FormEvent} from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { api } from '../../services/api'

import { Form ,TransitonTypeContainer, RadioBox } from './styles'

Modal.setAppElement('#root')

interface NewTransactionModalProps{
  isOpen: boolean; 
  onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose}:NewTransactionModalProps){
  const [title,setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type,setType] = useState('deposit');

  function heandlerCreateNewTransaction(event: FormEvent){
    event.preventDefault();


    const data ={
      title,
      value,
      category,
      type
    }
    
    api.post('/transition',data)
  
  }

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay" 
    className="react-modal-content"
    >

      <button 
      type="button" 
      onClick={onRequestClose}
      className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar"></img>
      </button>
    <Form 
    onSubmit={heandlerCreateNewTransaction}
    
    >

      
      <h2>Cadastra informação</h2>
    
      <input 
        placeholder="Titulo" 
        value={title} 
        onChange={event => setTitle(event.target.value)} 
      />
      <input 
        type="number"
        placeholder="Valor" 
        value={value}  
        onChange={event => setValue(Number(event.target.value))} 
      />

      <TransitonTypeContainer>
        <RadioBox
        type="button" 
        onClick={() => {setType('deposit');}}
        isActive={type === 'deposit'}
        activeColor="green"
        >
        <img src={income} alt="Entrada" />
        <span>Entrada</span>
        </RadioBox>

        <RadioBox
        type="button" 
        onClick={() => {setType('withdraw');}}
        isActive={type === 'withdraw'}
        activeColor="red"
        >
        <img src={outcome} alt="Saida" />
        <span>Saida</span>
        </RadioBox>
      </TransitonTypeContainer>

      <input 
        placeholder="Categoria"
        value={category} 
        onChange={event => setCategory(event.target.value)} 
      />

      <button type="submit">Cadastra</button>
    </Form>
      
    </Modal>
  )
}