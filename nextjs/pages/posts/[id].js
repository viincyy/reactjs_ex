import Layout from '../../components/Layout';
import { getPostById, getPostIds } from '../../lib/post';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Spinner from 'react-bootstrap/Spinner';

const Post = ({ post }) => {
    const router = useRouter();

    // Neu trang chua tao ra, isFallback cua router === true
    // Va trang tam thoi sau day se duoc render

    if (router.isFallback) {
        return (
            <Spinner animation='border' role='status' variant='dark'>
                <span className='sr-only'>LOADING...</span>
            </Spinner>
        );
    }

    // Khi getStaticProps() chay xong lan dau tien.
    // Cac lan sau thi trang so 6 (vi du) se duoc dua vao danh sach prerendered
    return (
        <Layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Link href='/posts'>
                        <Button variant='dark'>Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = await getPostIds(5);
    return {
        paths,
        // fallback: false, // K co path => 404
        fallback: true, // path nao khong return ngay lap tuc => show trang tam thoi => doi getStaticProps chay
        // => khi nao getStaticProps chay xong => return trang hoan chinh
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props: {
            post,
        },
    };
};
export default Post;
