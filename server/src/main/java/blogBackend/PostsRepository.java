package blogBackend;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import blogBackend.Posts;

@CrossOrigin(origins = "http://localhost:4200")
public interface PostsRepository extends CrudRepository<Posts, Long> {
}
