import { urls } from "@/constant/path";
import { useRouter } from "next/navigation";
import { Button } from "..";
import MENU from "./../../assets/svg/menu.svg";
import { Menu, Title, Wrapper } from "./_headerUser";

function HeaderUser(props: any) {
  const router = useRouter();

  const handleLogoutClick = () => {
    router.push(urls.HOME);
  };

  return (
    <Wrapper>
      <Menu
        src={MENU}
        onClick={() => props.setSideBar(props.sideBar === "Y" ? "N" : "Y")}
      />
      <Title>SMKS Karya Teknik Watansoppeng</Title>
      <Button onClick={handleLogoutClick}>Logout</Button>
    </Wrapper>
  );
}

export default HeaderUser;
