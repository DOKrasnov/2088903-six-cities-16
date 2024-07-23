import LoginForm from '../../components/login-form/login-form.tsx';
import LocationItem from '../../components/common/location-item/location-item.tsx';
import Layout from '../../components/layout/layout.tsx';

function LoginPage() {
  const currentCity = 'Amsterdam';

  return (
    <Layout
      title='Login'
      pageClass='page--gray page--login'
      mainClass='page__main--login'
    >
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm/>
        </section>
        <section className="locations locations--login locations--current">
          <LocationItem city={currentCity}/>
        </section>
      </div>
    </Layout>
  );
}

export default LoginPage;
