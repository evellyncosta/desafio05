import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type,value }: Transaction): Transaction {   
    
    const savedTransaction = this.transactionsRepository.create({
      title,
      value,
      type
    });

    return savedTransaction;
  }
}

export default CreateTransactionService;
