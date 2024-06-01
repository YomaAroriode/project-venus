// components
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// // icons
// import { BsThreeDots } from "react-icons/bs";

const buttonProps = {
  href: "/admin/institution/staffing/subject",
  text: "Add New Staff",
};

const Subject = () => {
  return (
    <>
      <Header title="Staffing" buttonProps={buttonProps} />
      <Wrapper>
        <div>
          <Select>
            <SelectTrigger className="py-5 sm:max-w-[390px]">
              <SelectValue placeholder="Present Term (2nd Term 2023/2024)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">
                Present Term (2nd Term 2023/2024)
              </SelectItem>
              <SelectItem value="level">
                Present Term (2nd Term 2023/2024)
              </SelectItem>
              <SelectItem value="department">
                Present Term (2nd Term 2023/2024)
              </SelectItem>
              <SelectItem value="department">
                Present Term (2nd Term 2023/2024)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div></div>
        </div>
      </Wrapper>
    </>
  );
};

export default Subject;
