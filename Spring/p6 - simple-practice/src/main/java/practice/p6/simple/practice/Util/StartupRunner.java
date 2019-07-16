package practice.p6.simple.practice.Util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import practice.p6.simple.practice.Domain.User;
import practice.p6.simple.practice.Repository.UserRepository;

@Component
public class StartupRunner implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        User u1 = new User("Pecze Tamas");
        User u2 = new User("Almadi Eva");

        userRepository.save(u1);
        userRepository.save(u2);
    }
}
