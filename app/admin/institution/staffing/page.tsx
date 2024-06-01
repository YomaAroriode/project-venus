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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AcademicStaff, NonAcademicStaff } from "./tables";

// icons
import { IoSearchOutline } from "react-icons/io5";

// data
import { academicStaffData, nonAcademicStaffData } from "./data";

const buttonProps = {
  href: "/admin/institution/staffing/create-profile",
  text: "Add New Staff",
};

const Staffing = () => {
  const AcademicData = academicStaffData;
  const NonAcademicData = nonAcademicStaffData;

  return (
    <>
      <Header title="Staffing" buttonProps={buttonProps} />
      <Wrapper>
        <div className="flex flex-col gap-4 sm:flex-row md:items-center">
          <div>
            <Select>
              <SelectTrigger className="py-5 sm:w-[200px]">
                <SelectValue placeholder="Sort By:" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="level">Sort by Level</SelectItem>
                <SelectItem value="department">Sort by Department</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Input
              icon={<IoSearchOutline className="text-xl text-primary" />}
              iconPosition="left"
              type="text"
              placeholder="Search for teacher by name or email"
              className="py-5"
            />
          </div>
        </div>

        <Tabs defaultValue="academic" className="mt-5">
          <TabsList className="relative w-full flex-nowrap justify-start overflow-auto bg-transparent sm:overflow-hidden">
            <TabsTrigger
              value="academic"
              className="text-xs uppercase sm:text-base"
            >
              <p>academic staff</p>
              <span className="ml-2 bg-primary/30 px-1 text-primary">43</span>
            </TabsTrigger>
            <TabsTrigger
              value="non-academic"
              className="text-xs uppercase sm:text-base"
            >
              <p>non academic staff</p>
              <span className="ml-2 bg-default/30 px-1 text-default">43</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="academic">
            <AcademicStaff data={academicStaffData} />
          </TabsContent>

          <TabsContent value="non-academic">
            <NonAcademicStaff data={nonAcademicStaffData} />
          </TabsContent>
        </Tabs>
      </Wrapper>
    </>
  );
};

export default Staffing;
