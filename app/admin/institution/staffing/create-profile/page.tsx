// components
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// css
import styles from "./styles.module.css";

const AddStaff = () => {
  return (
    <>
      <Header title="Create Staff Profile" />
      <Wrapper>
        <Tabs defaultValue="personal-data">
          <TabsList className="relative w-full flex-nowrap justify-start overflow-auto text-xs sm:text-sm md:text-base">
            <TabsTrigger value="personal-data" className="uppercase">
              personal data
            </TabsTrigger>
            <TabsTrigger value="nationality" className="uppercase">
              Nationality
            </TabsTrigger>
            <TabsTrigger value="point-of-contact" className="uppercase">
              point of contact
            </TabsTrigger>
            <TabsTrigger value="work-profile" className="uppercase">
              work profile
            </TabsTrigger>
            <TabsTrigger value="summary" className="uppercase">
              summary
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal-data">
            <div className={styles.group}>
              <div>
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" className={styles.inputField} />
              </div>
              <div>
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" className={styles.inputField} />
              </div>
            </div>

            <div className={styles.group}>
              <div>
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" className={styles.inputField} />
              </div>
              <div>
                <Select>
                  <SelectTrigger className={styles.selectField}>
                    <SelectValue placeholder="Select a Class" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Classes</SelectLabel>
                      <SelectItem value="apple">Jss 1</SelectItem>
                      <SelectItem value="banana">Jss 2</SelectItem>
                      <SelectItem value="blueberry">Jss 3</SelectItem>
                      <SelectItem value="grapes">SSS 1</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className={styles.group}>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input type="password" className={styles.inputField} />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="text" className={styles.inputField} />
              </div>
            </div>

            <div className={styles.group}>
              <div>
                <Select>
                  <SelectTrigger className={styles.selectField}>
                    <SelectValue placeholder="Select a Subject" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Subjects</SelectLabel>
                      <SelectItem value="economics">Economics</SelectItem>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="english-studies">
                        English Studies
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select>
                  <SelectTrigger className={styles.selectField}>
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                      <SelectItem value="none">Prefer not to say</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-10 ml-6 mt-44 flex flex-row gap-3">
              <Button className="w-28">Save</Button>
              <Button
                variant="outline"
                className=" w-28 border-[1px] border-primary"
              >
                Cancel
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="nationality">
            Make changes to nationality
          </TabsContent>

          <TabsContent value="point-of-contact">
            Make changes to point of contact
          </TabsContent>

          <TabsContent value="work-profile">
            Make changes to work profile
          </TabsContent>
          <TabsContent value="summary">Make changes to summary</TabsContent>
        </Tabs>
      </Wrapper>
    </>
  );
};

export default AddStaff;
