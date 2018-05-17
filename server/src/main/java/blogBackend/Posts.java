package blogBackend;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;
import java.sql.Date;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Posts {
    @Id @GeneratedValue(strategy =GenerationType.AUTO)
    private Long postId;

    private String postTitle;

    private String titleDescription;

    private Date postDate;

    private String postContent;

}
