import { Footer, Header } from "../components";

// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
