package blogBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;

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

}
