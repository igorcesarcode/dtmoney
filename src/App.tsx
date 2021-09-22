import { useState } from 'react';
import {GlobalStyle} from "./styles/global"
import {Header} from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTable";




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

    <NewTransactionModal 
    isOpen={isNewTransactionModalOpen} 
    onRequestClose={handlerCloneTransactionModal}
    />
     <GlobalStyle/>
      
    </>
  );
}

