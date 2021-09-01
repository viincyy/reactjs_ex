import Head from 'next/head';

const Layout = ({ children }) => (
    <>
        <Head>
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            ></meta>
            <title>My Next App</title>
        </Head>
        <header>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>NextJS</Navbar.Brand>
                <Nav>
                    <Nav.Link>Posts</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
            </Navbar>
        </header>

        <main>{children}</main>
    </>
);

export default Layout;
