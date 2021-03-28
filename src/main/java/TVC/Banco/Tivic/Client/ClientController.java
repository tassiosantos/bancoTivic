package TVC.Banco.Tivic.Client;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(path = "/client")
@CrossOrigin
public class ClientController {
    
    
    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }
	
  
    @GetMapping(path = "/all")
	public List<Client> getClients(){
        return this.clientService.getClients();
        
    }

    @GetMapping(path = "/getbyname/{name}")
    public List<Client> getClientByName(@PathVariable("name") String name){
        return this.clientService.getClientByName(name);
        

    }

    @PostMapping(path = "/addclient")
    public void addClient(@RequestBody Client newClient) {
        this.clientService.addClient(newClient);
            
    }
    



}