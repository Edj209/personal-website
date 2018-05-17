package blogBackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Date;
import java.util.Arrays;

import blogBackend.PostsRepository;

@SpringBootApplication
public class BlogBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogBackendApplication.class, args);
	}

    @Bean
    CommandLineRunner init(PostsRepository postsRepository) {
        return (evt) -> Arrays.asList(
                "post1,post2".split(","))
                .forEach(
                        a -> {
                            Posts posts = new Posts();
                            Date date = new Date(System.currentTimeMillis());

                            posts.setPostTitle(a);
                            posts.setTitleDescription("Hello!");
                            posts.setPostContent("This is my first blog post!");
                            posts.setPostDate(date);

                            postsRepository.save(posts);
                        });
    }
}
