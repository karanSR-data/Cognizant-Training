package week2.Module_4.Mockito;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

    @Test
    void testUser(){

        UserRepository repository = mock(UserRepository.class);

        when(repository.findUser()).thenReturn("Karan");

        UserService service = new UserService(repository);

        assertEquals("Karan",service.getUser());

        verify(repository).findUser();
    }

}