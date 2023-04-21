package com.teamtrack.teamtrackbackend;

import com.teamtrack.teamtrackbackend.user.User;
import com.teamtrack.teamtrackbackend.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class TeamtrackbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TeamtrackbackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			// Insert some sample data into the database
			User user1 = User.builder()
					.username("user1")
					.password("password1")
					.role("ROLE_USER")
					.build();
			userRepository.save(user1);

			User user2 = User.builder()
					.username("user2")
					.password("password2")
					.role("ROLE_ADMIN")
					.build();
			userRepository.save(user2);
		};
	}
}
