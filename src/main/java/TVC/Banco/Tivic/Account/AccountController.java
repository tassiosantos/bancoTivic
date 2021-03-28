package TVC.Banco.Tivic.Account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "/account")
@CrossOrigin
public class AccountController {
    
	private AccountService accountService;

	@Autowired
	public AccountController(AccountService accountService) {
		this.accountService = accountService;
	}
	
	@GetMapping(path = "/getallaccounts")
	public List<Account> getAllAccounts(){
		return this.accountService.getAllAccounts();
	}

	@GetMapping(path = "/getbynumber/{accountnumber}")
	public List<Account> getAccount(@PathVariable("accountnumber") String accountNumber){
		List<Account> clienAccount = this.accountService.getAccount(accountNumber);
		return clienAccount;
	}

	@PostMapping(path = "/addaccount")
	public void addAccount(@RequestBody Account newAccount){
		this.accountService.addAccount(newAccount);
	}



	

}
