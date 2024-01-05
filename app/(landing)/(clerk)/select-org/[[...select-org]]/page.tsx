import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectPersonalUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"/organization/:id"}
      afterSelectOrganizationUrl={"/organization/:id"}
    />
  );
}
