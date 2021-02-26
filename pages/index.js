import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    console.log(user);
    return (
      <div className="home">
        <h1 class="home-name">
          Welcome {user?.name}!
        </h1>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

export const getServerSideProps = withPageAuthRequired();
