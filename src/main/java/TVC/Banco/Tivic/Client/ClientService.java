package TVC.Banco.Tivic.Client;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
	private final ClientRepository clientRepository;

	@Autowired
	public ClientService(ClientRepository clientRepository){
		this.clientRepository = clientRepository;
	}

    public List<Client> getClients(){
		List<Client> allClients = clientRepository.findAll();
		return allClients;
	}

	public List<Client> getClientByName(String name){
		List<Client> client = clientRepository.findByName(name);
		return client;
	}

	public List<Client> getClientByCpf(String cpf){
		List<Client> client = clientRepository.findByCpf(cpf);
		return client;
	}

	public List<Client> getClientByAccount(String account){
		List<Client> client = clientRepository.findByAccount(account);
		return client;
	}

	public void addClient(Client client){
		clientRepository.save(client);
		
		
	}

}
