package blogBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import blogBackend.Posts;
import blogBackend.PostsRepository;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/blog")
public class BlogController {

    @Autowired
    private PostsRepository postsRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Posts> getAllPosts() {
        return postsRepository.findAll();
    }

    @PostMapping(path = "/post", consumes = "application/json")
    public ResponseEntity<Void> addPost(@RequestBody Posts post) {
        postsRepository.save(post);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

}
