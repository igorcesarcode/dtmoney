import {GlobalStyle} from "./styles/global"
import {Header} from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import { TransactionsTable } from "./components/TransactionsTable";
import Modal from 'react-modal'
import { useState } from 'react';

Modal.setAppElement('#root')


export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handlerCloneTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
     <Header onOpenNewTranslationModal={handleOpenNewTransactionModal}/>
    <Dashboard/>
    <TransactionsTable/>

    <Modal 
       isOpen={isNewTransactionModalOpen} 
       onRequestClose={handlerCloneTransactionModal}
       >
         <h2>Cadastra informação</h2>
       </Modal>


     <GlobalStyle/>
      
    </>
  );
}

