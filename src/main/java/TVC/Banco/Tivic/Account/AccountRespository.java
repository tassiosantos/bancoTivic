package TVC.Banco.Tivic.Account;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRespository extends JpaRepository<Account, Long>{

    List<Account> findByNumber(String number);
    
    

}
