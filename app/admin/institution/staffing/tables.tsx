import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  data: {
    id: string;
    firstName: string;
    lastName: string;
    level: string;
    department: string;
    status: "active" | "inactive";
  }[];
}

const AcademicStaff = ({ data }: TableProps) => {
  return (
    <div>
      <div className="my-2 rounded bg-white p-4 text-xs text-default/60 shadow-sm sm:text-base">
        Showing 1- 70 of 70 teachers
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell className="font-medium">{staff.id}</TableCell>
              <TableCell>{staff.firstName}</TableCell>
              <TableCell>{staff.lastName}</TableCell>
              <TableCell>{staff.level}</TableCell>
              <TableCell>{staff.department}</TableCell>
              <TableCell>
                <span
                  className={`inline-block w-24 rounded px-1 py-1 text-center ${staff.status === "active" ? "text-bg-green bg-green-300/40" : " bg-red-300/40 text-red-500"}`}
                >
                  {staff.status === "active" ? "Active" : "Inactive"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const NonAcademicStaff = ({ data }: TableProps) => {
  return (
    <div>
      <div className="my-2 rounded bg-white p-4 text-xs text-default/60 shadow-sm sm:text-base">
        Showing 1- 70 of 70 staffs
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell className="font-medium">{staff.id}</TableCell>
              <TableCell>{staff.firstName}</TableCell>
              <TableCell>{staff.lastName}</TableCell>
              <TableCell>{staff.level}</TableCell>
              <TableCell>{staff.department}</TableCell>
              <TableCell>
                <span
                  className={`inline-block w-24 rounded px-1 py-1 text-center ${staff.status === "active" ? "text-bg-green bg-green-300/40" : " bg-red-300/40 text-red-500"}`}
                >
                  {staff.status === "active" ? "Active" : "Inactive"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { AcademicStaff, NonAcademicStaff };
