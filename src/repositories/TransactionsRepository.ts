import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionsDTO {
  transactions: Array<Transaction>
  balance: Balance;
}


class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): TransactionsDTO {
    const transactionDTO = {transactions : this.transactions, 
      balance: this.getBalance()
    };

  return transactionDTO;
    
  }

  public getBalance(): Balance {
  let incomeSum = 0;
  let outcomeSum = 0;


  this.transactions.map((transaction) =>{
    if(transaction.type == 'income'){
        incomeSum += transaction.value;
    }else{
      outcomeSum += transaction.value;
    }  
  })

  const balance = {income: incomeSum, outcome:outcomeSum, total: incomeSum - outcomeSum}

  return balance;
  
  }


  public create({title, value, type}: Transaction) {
    const transaction = new Transaction({title, value, type})
    this.transactions.push(transaction)
    return transaction;
  }
}

export default TransactionsRepository;
