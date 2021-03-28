package TVC.Banco.Tivic.Client;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table
public class Client {
    @Id
    @SequenceGenerator(
        name = "client_sequence",
        sequenceName = "client_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.AUTO,
        generator = "client_sequence"
    )
    private Long id;
    private String cpf;
    private String name;
    private String account;

    public Client(){

    }

    public Client(String cpf, String name, String account){
        this.cpf = cpf;
        this.name = name;
        this.account = account;

    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getAccount() {
        return this.account;
    }


}
