import { useRouter } from "next/navigation";
import { Button } from "..";
import { Title, Wrapper } from "./_headerUser";
import { urls } from "@/constant/path";

function HeaderUser() {
  const router = useRouter();

  const handleLogoutClick = () => {
    router.push(urls.HOME);
  };

  return (
    <Wrapper>
      <Title>SMKS Karya Teknik Watansoppeng</Title>
      <Button onClick={handleLogoutClick}>Logout</Button>
    </Wrapper>
  );
}

export default HeaderUser;
