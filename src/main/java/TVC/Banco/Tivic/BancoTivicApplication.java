package TVC.Banco.Tivic;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan
@CrossOrigin
public class BancoTivicApplication {

	public static void main(String[] args) {
		SpringApplication.run(BancoTivicApplication.class, args);
	}

	
}	
