import FileUpload from "@/components/FileUpload";
import { Wrapper } from "./_dashboardPage";

function DashboardPage() {
  return (
    <Wrapper>
      Dashboard Page
      <br />
      <br />
      <span>Single Upload</span>
      <FileUpload />
      <br />
      <span>Multiple Upload</span>
      <FileUpload multiple />
    </Wrapper>
  );
}

export default DashboardPage;
