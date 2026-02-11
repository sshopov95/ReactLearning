import { Outlet } from "react-router";
import type { Route } from "../home/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website dev" },
  ];
}

const MainLayout = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 my-8">
      <Outlet /> {/* Тук зарежда пейджа който е зададен в routes.tsx */}
    </section>
  );
};

export default MainLayout;
