import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { PostComment } from "./Post";

type CommentProps = {
  comment: PostComment;
  onDeleteComment: (comment: PostComment) => void;
};

export function Comment({ comment, onDeleteComment }: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/victoralmeida52.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Almeida</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
