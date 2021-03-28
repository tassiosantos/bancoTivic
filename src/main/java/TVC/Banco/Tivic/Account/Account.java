package TVC.Banco.Tivic.Account;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table
public class Account {
    @Id
    @SequenceGenerator(
        name = "account_sequence",
        sequenceName = "account_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.AUTO,
        generator = "account_sequence"
    )
    private Long id;
    private String number;
    private Double balance;

    public Account(){

    }

    public Account(String number, Double balance){
        this.number = number;
        this.balance = balance;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getNumber() {
        return this.number;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Double getBalance() {
        return this.balance;
    }




}
