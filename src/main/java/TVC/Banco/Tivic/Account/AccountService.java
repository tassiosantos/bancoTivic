package TVC.Banco.Tivic.Account;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class AccountService {
    
    private final AccountRespository accountRespository;
    
    @Autowired
    public AccountService(AccountRespository accountRespository){
        this.accountRespository = accountRespository;
    }


    public List<Account> getAllAccounts(){
		List<Account> accountList = accountRespository.findAll();
        return accountList;
	}

    public List<Account> getAccount(String accountNumber){
        List<Account> clientAccount = accountRespository.findByNumber(accountNumber);
        System.out.println(accountRespository.findByNumber(accountNumber));
        return clientAccount;
    }


    public void addAccount(Account newAccount) {
        accountRespository.save(newAccount);
                
    }

    public void makeDeposit(Account account, Double value){
        Double newBalance;
        newBalance = account.getBalance() + value;
        account.setBalance(newBalance);
        accountRespository.save(account);
    }

    public void makeWithdraw(Account account, Double value){
        Double newBalance;
        newBalance = account.getBalance() - value;
        account.setBalance(newBalance);
        accountRespository.save(account);
    }


}
