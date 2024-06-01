import Header from "@/components/header";
import Wrapper from "@/components/wrapper";

const buttonProps = {
  href: "/admin/institution/staffing/add-new-report",
  text: "Add New Report",
};

export default function ClassResult() {
  return (
    <>
      <Header title="Student Term Report" />
      <Wrapper>
        <div>Class Result</div>
      </Wrapper>
    </>
  );
}
