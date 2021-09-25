import Layout from './Layout';
import CommentForm from './CommentForm';

const CommentEditPage = (props) => {
  return (
    <Layout authState={props.authState}>
      <CommentForm
        authState={props.authState}
        userId={props.userId}
        loadComments={() => props.setLoadComments(!props.loadComments)}
        setComments={() => props.setComments([])}
        comments={props.comments}
      />
    </Layout>
  );
};

export default CommentEditPage;
