import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 my-8">
      <Outlet /> {/* Тук зарежда пейджа който е зададен в routes.tsx */}
    </section>
  );
};

export default MainLayout;
