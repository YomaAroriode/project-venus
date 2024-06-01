import SideNav from "@/components/sidebar";
import Breadcrumb from "@/components/breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <div className="md:ml-60">
        <div className="absolute top-24 ml-5">
          <Breadcrumb />
        </div>
        {children}
      </div>
    </div>
  );
}
