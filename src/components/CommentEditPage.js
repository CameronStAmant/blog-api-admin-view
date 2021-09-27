import Layout from './Layout';
import CommentForm from './CommentForm';

const CommentEditPage = (props) => {
  return (
    <Layout authState={props.authState}>
      <div className="mx-4">
        <CommentForm
          authState={props.authState}
          userId={props.userId}
          loadComments={() => props.setLoadComments(!props.loadComments)}
          setComments={() => props.setComments([])}
          comments={props.comments}
        />
      </div>
    </Layout>
  );
};

export default CommentEditPage;
