package TVC.Banco.Tivic.Client;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    
    List<Client> findByAccount(String account);
    List<Client> findByCpf(String cpf);
    List<Client> findByName(String name);
    
}
