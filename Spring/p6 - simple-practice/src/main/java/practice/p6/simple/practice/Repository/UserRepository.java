package practice.p6.simple.practice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import practice.p6.simple.practice.Domain.User;

public interface UserRepository extends JpaRepository<User, String> {
}
