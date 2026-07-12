package week2.Module_4.Mockito;

public class UserService {

    UserRepository repository;

    public UserService(UserRepository repository){
        this.repository = repository;
    }

    public String getUser(){

        return repository.findUser();
    }
}